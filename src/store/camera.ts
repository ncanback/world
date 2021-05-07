import { observable, action, makeObservable } from "mobx";
import { Position } from "../type";

class CameraStore {
  constructor() {
    makeObservable(this);
  }

  @observable cameraPosition: Position = [200, 200, 200];

  @action
  setCamerPosition(positon: Position) {
    this.cameraPosition = positon;
  }
}

export default CameraStore;
