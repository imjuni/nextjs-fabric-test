import { getLock } from '#/fabric/tools/getLock';
import { fabric } from 'fabric';
import type { IPoint } from 'fabric/fabric-impl';

export interface IPolylineCreateProps {
  points: IPoint[];
  color: string;
}

export interface IPolylineProps {
  polyline: fabric.Polyline;
  color: string;
}

export class Polyline {
  static async create(props: IPolylineCreateProps) {
    const polyline = new fabric.Polyline(props.points, {
      stroke: props.color,
      strokeWidth: 2,
      fill: 'transparent',
      perPixelTargetFind: true,
      padding: 10,
      ...getLock(),
      hasControls: false,
      hasBorders: false,
      selectable: true,
    });

    return new Polyline({ polyline, color: props.color });
  }

  #color: string;

  #polyline: fabric.Polyline;

  get object() {
    return this.#polyline;
  }

  get color() {
    return this.#color;
  }

  constructor(props: IPolylineProps) {
    this.#polyline = props.polyline;
    this.#color = props.color;

    this.#polyline.on('selected', this.onHandleSelected.bind(this));
    this.#polyline.on('deselected', this.onHandleDeselected.bind(this));
  }

  onHandleSelected() {
    this.#polyline.setOptions({
      stroke: '#8294C4',
    });

    this.#polyline.canvas?.requestRenderAll();
  }

  onHandleDeselected() {
    this.#polyline.setOptions({
      stroke: this.#color,
    });

    this.#polyline.canvas?.requestRenderAll();
  }
}
