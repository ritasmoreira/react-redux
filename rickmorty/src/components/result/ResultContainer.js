import React from "react";
import ricknmorty from "../../apis/ricknmorty";
import EpisodeList from "./EpisodeList";
import RecommendedList from "./RecommendedList";
import Loader from "../Loader";

class ResultContainer extends React.Component {
  state = { recommended: null, species: null, loading: true };

  async componentDidMount() {
    const { species } = this.props.location.state;
    const speciesResult = await this.getCharsFromSameSpecies(species);

    const recommended = speciesResult.data.results.map((species) => {
      return <RecommendedList character={species} key={species.id} />;
    });

    this.setState({ recommended, species });
  }

  getCharsFromSameSpecies = async (species) => {
    try {
      const result = await ricknmorty.get("character/", {
        params: { species: species },
      });
      this.setState({ loading: false });
      return result;
    } catch (err) {
      this.setState({ episodes: null });
    }
  };

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="ui grid">
        <div className="ten wide column">
          <EpisodeList episodeList={this.props.location.state} />
        </div>

        <div className="six wide column">
          <h4>Other {this.state.species}s</h4>
          {this.state.recommended}
        </div>
      </div>
    );
  }
}

export default ResultContainer;
