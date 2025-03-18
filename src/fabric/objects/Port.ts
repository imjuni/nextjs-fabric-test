import { IBox } from '#/fabric/interfaces/IBox';
import { getLock } from '#/fabric/tools/getLock';
import Color from 'color';
import { fabric } from 'fabric';

export interface IPortCreateProps {
  box: IBox;
  label: string;
  color: string;
  mode: 'right' | 'left';
}

export interface IPortProps {
  rect: fabric.Rect;
  group: fabric.Group;
  text: fabric.Text;
}

export class Port {
  static async create(props: IPortCreateProps) {
    const textAdjustX = 5;

    const text = new fabric.Text(props.label, {
      originX: props.mode,
      originY: 'center',
      left:
        props.mode === 'right' ? props.box.width * -1 + textAdjustX : props.box.width - textAdjustX,
      top: 0,
      fontSize: 14,
      fontFamily: 'roboto',
    });

    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      originX: 'center',
      originY: 'center',
      width: props.box.width,
      height: props.box.height,
      // fill: 'transparent',
      fill: Color(props.color).mix(Color('white'), 0.5).toString(),
    });

    const group = new fabric.Group([], {
      left: props.box.left,
      top: props.box.top,
      width: props.box.width,
      height: props.box.height,
      originX: props.mode,
      originY: 'top',
      ...getLock(),
    });

    group.add(rect);
    group.add(text);

    return new Port({ text, rect, group });
  }

  #rect: IPortProps['rect'];

  #group: IPortProps['group'];

  #text: IPortProps['text'];

  get object() {
    return this.#group;
  }

  constructor(props: IPortProps) {
    this.#rect = props.rect;
    this.#group = props.group;
    this.#text = props.text;
  }
}
