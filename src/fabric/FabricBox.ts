import type { fabric } from 'fabric';

export class FabricBox {
  static box?: FabricBox;

  static create(canvas: fabric.Canvas): undefined {
    FabricBox.box = new FabricBox(canvas);
  }

  static get canvas(): fabric.Canvas {
    if (FabricBox.box == null || FabricBox.box.#canvas == null) {
      throw new Error('initialize before access canvas');
    }

    return FabricBox.box.#canvas;
  }

  #canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.#canvas = canvas;
  }
}
