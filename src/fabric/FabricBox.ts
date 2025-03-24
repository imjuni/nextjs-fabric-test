import { fabric } from 'fabric';
import { IPoint } from 'fabric/fabric-impl';

export class FabricBox {
  static #box?: FabricBox;

  static create(canvas: fabric.Canvas): undefined {
    FabricBox.#box = new FabricBox(canvas);
  }

  static dispose(): undefined {
    if (FabricBox.#box != null) {
      FabricBox.#box.#canvas.dispose();
    }
  }

  static get box(): FabricBox {
    if (FabricBox.#box == null) {
      throw new Error('initialize before access FabricBox');
    }

    return FabricBox.#box;
  }

  static get canvas(): fabric.Canvas {
    if (FabricBox.#box == null || FabricBox.#box.#canvas == null) {
      throw new Error('initialize before access canvas');
    }

    return FabricBox.#box.#canvas;
  }

  #canvas: fabric.Canvas;

  #lastCoord: IPoint;

  #isMouseDown: boolean;

  constructor(canvas: fabric.Canvas) {
    this.#canvas = canvas;
    this.#lastCoord = { x: 0, y: 0 };
    this.#isMouseDown = false;
  }

  get isMouseDown(): boolean {
    return this.#isMouseDown;
  }

  set isMouseDown(value) {
    this.#isMouseDown = value;
  }

  get lastCoord(): Readonly<IPoint> {
    return this.#lastCoord;
  }

  set lastCoord(point: IPoint) {
    this.#lastCoord.x = point.x;
    this.#lastCoord.y = point.y;
  }
}
