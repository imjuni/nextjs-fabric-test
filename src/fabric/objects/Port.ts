import { IBox } from '#/fabric/interfaces/IBox';
import { getLock } from '#/fabric/tools/getLock';
import Color from 'color';
import { fabric } from 'fabric';

export interface IPortCreateProps {
  box: Omit<IBox, 'width' | 'height'>;
  label: string;
  color: string;
  mode: 'right' | 'left';
}

export interface IPortProps {
  polygon: fabric.Polygon;
  group: fabric.Group;
  text: fabric.Text;
}

export class Port {
  static async create(props: IPortCreateProps) {
    const textAdjustX = 5;
    const polygonWidth = 12;
    const polygonHeight = 8;
    const paddingWithPolygonBetweenText = 4;
    const polygonWithPadding = polygonWidth + paddingWithPolygonBetweenText;

    const text = new fabric.Text(props.label, {
      originX: props.mode,
      originY: 'center',
      left:
        props.mode === 'right'
          ? polygonWithPadding * -1 + textAdjustX
          : polygonWithPadding - textAdjustX,
      top: 0,
      fontSize: 14,
      fontFamily: 'roboto',
    });

    const points =
      props.mode === 'left'
        ? [
            { x: 0, y: 0 },
            { x: 8, y: 0 },
            { x: 12, y: 6 },
            { x: 8, y: 12 },
            { x: 0, y: 12 },
          ]
        : [
            { x: 0, y: 0 },
            { x: 12, y: 0 },
            { x: 12, y: 12 },
            { x: 0, y: 12 },
            { x: 4, y: 6 },
          ];

    const polygon = new fabric.Polygon(points, {
      left: 0,
      top: 0,
      originX: 'center',
      originY: 'center',
      width: polygonWidth,
      height: polygonHeight,
      fill: Color(props.color).mix(Color('white'), 0.5).toString(),
      stroke: Color(props.color).mix(Color('black'), 0.2).toString(),
      strokeWidth: 2,
    });

    const group = new fabric.Group([text, polygon], {
      left: props.box.left,
      top: props.box.top,
      originX: props.mode,
      originY: 'center',
      ...getLock(),
    });

    group.add(polygon);
    group.add(text);

    return new Port({ text, polygon: polygon, group });
  }

  #polygon: IPortProps['polygon'];

  #group: IPortProps['group'];

  #text: IPortProps['text'];

  get object() {
    return this.#group;
  }

  constructor(props: IPortProps) {
    this.#polygon = props.polygon;
    this.#group = props.group;
    this.#text = props.text;
  }
}
