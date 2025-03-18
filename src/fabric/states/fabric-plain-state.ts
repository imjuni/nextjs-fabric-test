export class FabricPlainState {
  static #it: FabricPlainState;

  static get it() {
    return FabricPlainState.#it;
  }

  static create() {
    FabricPlainState.#it = new FabricPlainState();
  }

  #isShowClickPos: boolean;

  get isShowClickPos() {
    return this.#isShowClickPos;
  }

  set isShowClickPos(value) {
    this.#isShowClickPos = value;
  }

  constructor() {
    this.#isShowClickPos = false;
  }
}
