import React from "react";
import Main from "./enter/main";
import SlideBar from "./enter/slideBar";
import TopBar from "./enter/topBar";
import { Provider } from "mobx-react";
import Stores from "./store";

const App = () => {
  return (
    <>
      <Provider {...Stores}>
        <TopBar></TopBar>
        <SlideBar></SlideBar>
        <Main></Main>
      </Provider>
    </>
  );
};

export default App;
