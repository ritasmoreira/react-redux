import React from "react";
import Episode from "./Episode";
import ricknmorty from "../../apis/ricknmorty";

class EpisodeList extends React.Component {
  state = { episodesComponents: null, name: null };

  async componentDidMount() {
    let episodes;
    const { episodeUrl, name } = this.props.episodeList;
    if (episodeUrl === undefined) {
      episodes = "No episodes found";
      return;
    }

    const episodeIds = this.getEpisodesIds(episodeUrl);
    episodes = await this.getEpisodes(episodeIds.join());

    if (episodes !== null) {
      if (Array.isArray(episodes.data)) {
        episodes = episodes.data.map((ep) => {
          return <Episode key={ep.id} episode={ep} />;
        });
      } else
        episodes = <Episode key={episodes.data.id} episode={episodes.data} />;
    }
    this.setState({ episodesComponents: episodes, name: name });
  }

  getEpisodes = async (ids) => {
    try {
      return await ricknmorty.get(`episode/${ids}`);
    } catch (err) {
      this.setState({ episodes: null });
    }
  };

  getEpisodesIds = (episodesUrl) => {
    const episodesIds = episodesUrl.map((ep) => {
      ep = ep.split("/");
      return ep[ep.length - 1];
    });
    return episodesIds;
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <div>{this.state.episodesComponents}</div>
      </div>
    );
  }
}

export default EpisodeList;
