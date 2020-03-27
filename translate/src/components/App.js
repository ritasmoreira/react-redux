import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "../components/LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />

          {/* 'value' prop name should not be changed */}
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
