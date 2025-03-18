export class FabricPlainState {
  static #it: FabricPlainState;

  static get it() {
    return FabricPlainState.#it;
  }

  static create() {
    FabricPlainState.#it = new FabricPlainState();
  }

  #isShowClickPos: boolean;

  #isWheelZoom: boolean;

  get isShowClickPos() {
    return this.#isShowClickPos;
  }

  set isShowClickPos(value) {
    this.#isShowClickPos = value;
  }

  get isWheelZoom() {
    return this.#isWheelZoom;
  }

  set isWheelZoom(value) {
    this.#isWheelZoom = value;
  }

  constructor() {
    this.#isShowClickPos = false;
    this.#isWheelZoom = true;
  }
}
