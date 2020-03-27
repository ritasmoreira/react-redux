import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Maracena", duration: "2:35" },
    { title: "All Star", duration: "3:10" },
    { title: "Toxic", duration: "4:32" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
