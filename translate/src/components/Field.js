import React from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  // Alternatively a function with the same logic can be called
  /* renderSubmit(value) {
    return value === "english" ? "Name" : "Naam";
  } */

  render() {
    const text = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
