import React from "react";
import SearchBar from "./SearchBar";
import CharList from "./CharList";
import ricknmorty from "../../apis/ricknmorty";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";

class SearchContainer extends React.Component {
  state = {
    characters: [],
    next: null,
    totalCount: null,
    hasMore: false,
    loading: true,
  };

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = async (term = null) => {
    try {
      const response = await ricknmorty.get("/character", {
        params: { name: term },
      });
      const next = response.data.info.next.split("/");

      this.setState({
        characters: response.data.results,
        next: next[next.length - 1],
        totalCount: response.data.info.count,
        loading: false,
      });

      if (this.state.characters !== undefined) this.setState({ hasMore: true });
    } catch (err) {
      this.setState({ characters: null, next: null });
    }
  };

  onSearchSubmit = async (term) => {
    try {
      this.getCharacters(term);
    } catch (err) {
      this.setState({ characters: null });
    }
  };

  fetchMoreData = async () => {
    const characters = this.state.characters;

    if (characters === null || characters.length >= this.state.totalCount) {
      this.setState({ hasMore: false, loading: false });
      return;
    }

    try {
      const response = await ricknmorty.get(`/character/${this.state.next}`);
      const next = response.data.info.next.split("/");

      this.setState({
        characters: characters.concat(response.data.results),
        next: next[next.length - 1],
      });
    } catch (err) {
      this.setState({ characters: null, next: null, hasMore: false });
    }
  };

  render() {
    const charactersLength =
      this.state.characters === null ? null : this.state.characters.length;

    if (this.state.loading && charactersLength !== null) return <Loader />;
    else
      return (
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <CharList characters={this.state.characters} />
          <InfiniteScroll
            style={{ marginTop: "20px" }}
            dataLength={charactersLength}
            next={this.fetchMoreData}
            loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
            hasMore={this.state.hasMore}
            endMessage={
              <h4 style={{ textAlign: "center" }}>No more results</h4>
            }
          />
        </div>
      );
  }
}

export default SearchContainer;

// todo: center loading
// todo: continue infinite scrolling
