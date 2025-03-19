import { ImageBox } from '#/fabric/images/ImageBox';
import { IBox } from '#/fabric/interfaces/IBox';
import { getLock } from '#/fabric/tools/getLock';
import { getNum } from '#/fabric/tools/getNum';
import Color from 'color';
import { fabric } from 'fabric';
import { IObjectOptions } from 'fabric/fabric-impl';

export interface INodeCreateProps {
  box: IBox;
  label: string;
  color: string;
  canvas?: {
    originX?: IObjectOptions['originX'];
    originY?: IObjectOptions['originY'];
    stroke?: string;
    strokeWidth?: number;
    fontFamily?: string;
    fontSize?: number;
  };
}

export interface INodeProps {
  image: fabric.Image;
  group: fabric.Group;
  text: fabric.Text;
  rect: fabric.Rect;
}

export class Node {
  static async create(props: INodeCreateProps) {
    const image = await new Promise<fabric.Image>((resolve) => {
      fabric.loadSVGFromString(ImageBox.node, (images, options) => {
        const firstImage = images.at(0) as fabric.Image;

        const group = fabric.util.groupSVGElements(images, options);
        const scaleX = props.box.width / getNum(group.width);
        const scaleY = props.box.height / getNum(group.height);

        firstImage.setOptions({
          scaleX,
          scaleY,
          originX: 'center',
          originY: 'center',
          left: 0,
          top: 0,
          width: props.box.width,
          height: props.box.height,
          fill: props.color,
          stroke: Color(props.color).mix(Color('black'), 0.2).toString(),
          strokeWidth: 3,
        });

        return resolve(firstImage);
      });
    });

    const text = new fabric.Text(props.label, {
      originX: 'center',
      originY: 'center',
      left: 0,
      top: 0,
      fontFamily: props.canvas?.fontFamily ?? 'roboto',
      fontSize: props.canvas?.fontSize ?? 20,
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
      stroke: props.canvas?.stroke,
      strokeWidth: props.canvas?.strokeWidth,
    });

    const group = new fabric.Group([rect, image, text], {
      left: props.box.left,
      top: props.box.top,
      width: props.box.width,
      height: props.box.height,
      originX: props.canvas?.originX ?? 'left',
      originY: props.canvas?.originY ?? 'top',
      ...getLock(),
    });

    return new Node({ image, text, group, rect });
  }

  #image: INodeProps['image'];

  #group: INodeProps['group'];

  #text: INodeProps['text'];

  #rect: INodeProps['rect'];

  get object() {
    return this.#group;
  }

  constructor(props: INodeProps) {
    this.#image = props.image;
    this.#group = props.group;
    this.#text = props.text;
    this.#rect = props.rect;
  }
}
