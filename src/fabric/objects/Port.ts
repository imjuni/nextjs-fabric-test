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
    const polygonWidth = 18;
    const polygonHeight = 14;
    const slopeSize = 4;
    const paddingWithPolygonBetweenText = 4;
    const polygonWithPadding = polygonWidth + paddingWithPolygonBetweenText;

    const text = new fabric.Textbox(props.label, {
      originX: props.mode,
      originY: 'center',
      left:
        props.mode === 'right'
          ? polygonWithPadding * -1 + textAdjustX
          : polygonWithPadding - textAdjustX,
      top: 0,
      fontSize: 12,
      textAlign: props.mode === 'right' ? 'right' : 'left',
      width: props.label.length * 10,
      lineHeight: 1,
      height: 14,
      fontFamily: 'roboto mono',
    });

    // 1줄로만 text를 입력할 경우 height를 설정해도 font-size를 사용해서 height를 자동으로 계산한다
    // 그래서 height를 다시 설정하고, setCoords를 호출해야 한다
    text.set({ height: 14 });
    text.setCoords();

    console.log('포트 글자 크기: ', text.width, text.height);

    const points =
      props.mode === 'left'
        ? [
            { x: 0, y: 0 },
            { x: polygonWidth - slopeSize, y: 0 },
            { x: polygonWidth, y: polygonHeight / 2 },
            { x: polygonWidth - slopeSize, y: polygonHeight },
            { x: 0, y: polygonHeight },
          ]
        : [
            { x: 0, y: 0 },
            { x: polygonWidth, y: 0 },
            { x: polygonWidth, y: polygonHeight },
            { x: 0, y: polygonHeight },
            { x: slopeSize, y: polygonHeight / 2 },
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
