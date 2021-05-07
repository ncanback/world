import React from "react";
import { Observer, useLocalStore } from "mobx-react";
import Stores from "../../store";

const SlideBar = () => {
  const localStore = useLocalStore(() => Stores);
  const changeView = () => {
    localStore.cameraStore.setCamerPosition([0, 0, 200]);
  };
  return (
    <Observer>
      {() => (
        <div className="SlideBar">
          <div onClick={() => changeView()}>切换垂直视角</div>
        </div>
      )}
    </Observer>
  );
};

export default SlideBar;
