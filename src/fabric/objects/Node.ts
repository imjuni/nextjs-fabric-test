import { ImageBox } from '#/fabric/images/ImageBox';
import { IBox } from '#/fabric/interfaces/IBox';
import { getNum } from '#/fabric/tools/getNum';
import Color from 'color';
import { fabric } from 'fabric';

export interface INodeCreateProps {
  box: IBox;
  label: string;
  color: string;
}

export interface INodeProps {
  image: fabric.Image;
  group: fabric.Group;
  text: fabric.Text;
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
          stroke: Color(props.color).mix(Color('black'), 0.2),
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
    });

    const group = new fabric.Group([image, text], {
      left: props.box.left,
      top: props.box.top,
    });

    return new Node({ image, text, group });
  }

  #image: fabric.Image;

  #group: fabric.Group;

  #text: fabric.Text;

  get object() {
    return this.#group;
  }

  constructor(props: INodeProps) {
    this.#image = props.image;
    this.#group = props.group;
    this.#text = props.text;
  }
}
