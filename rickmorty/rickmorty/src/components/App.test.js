import React from "react";
import { mount, configure, shallow } from "enzyme";
import App from "./App";
import SearchContainer from "./search/SearchContainer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("App Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render header", () => {
    expect(wrapper.find("Header"));
  });

  test("check if searching morty returns results", async () => {
    const wrapper = shallow(<SearchContainer />);
    const instance = wrapper.instance();
    await instance.getCharacters("morty");
    expect(wrapper.state("characters").length).toBeGreaterThan(0);
  });

  test("check if search throws error", async () => {
    const wrapper = shallow(<SearchContainer />);
    const instance = wrapper.instance();
    try {
      await instance.getCharacters("ryan");
    } catch (e) {
      expect(e).toEqual({
        error: "error",
      });
    }
  });
});
