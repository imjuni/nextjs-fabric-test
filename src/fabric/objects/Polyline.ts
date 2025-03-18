import { fabric } from 'fabric';
import type { IPoint } from 'fabric/fabric-impl';

export interface IPolylineCreateProps {
  points: IPoint[];
  color: string;
}

export interface IPolylineProps {
  polyline: fabric.Polyline;
}

export class Polyline {
  static async create(props: IPolylineCreateProps) {
    const polyline = new fabric.Polyline(props.points, {
      stroke: props.color,
      strokeWidth: 2,
      fill: 'transparent',
      perPixelTargetFind: true,
    });

    return new Polyline({ polyline });
  }

  #polyline: fabric.Polyline;

  get object() {
    return this.#polyline;
  }

  constructor(props: IPolylineProps) {
    this.#polyline = props.polyline;
  }
}
