import { ImageBox } from '#/fabric/images/ImageBox';
import { IBox } from '#/fabric/interfaces/IBox';
import { getLock } from '#/fabric/tools/getLock';
import { getNum } from '#/fabric/tools/getNum';
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

export class Crosshair {
  static async create(props: INodeCreateProps) {
    const image = await new Promise<fabric.Image>((resolve) => {
      fabric.loadSVGFromString(ImageBox.crosshair, (images, options) => {
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
          stroke: props.color,
          data: { group },
        });

        return resolve(firstImage);
      });
    });

    const text = new fabric.Text(props.label, {
      originX: 'center',
      originY: 'center',
      left: 0,
      top: getNum(image.width) - 10,
      fontSize: Math.floor(getNum(image.width) * 0.5),
    });

    const group = new fabric.Group([image], {
      left: props.box.left,
      top: props.box.top,
      ...getLock(),
      selectable: false,
    });

    return new Crosshair({ image, text, group });
  }

  #image: fabric.Image;

  #group: fabric.Group;

  #text: fabric.Text;

  #data: number;

  get object() {
    return this.#group;
  }

  get data() {
    return this.#data;
  }

  inc() {
    this.#data += 1;
  }

  constructor(props: INodeProps) {
    this.#image = props.image;
    this.#group = props.group;
    this.#text = props.text;
    this.#data = 0;
  }

  expand() {
    const delta = 0.005;

    const left = getNum(this.#group.left);
    const top = getNum(this.#group.top);

    this.#group.setOptions({
      scaleX: getNum(this.#group.scaleX) + delta,
      scaleY: getNum(this.#group.scaleY) + delta,
      left: left - (getNum(this.#group.width) * delta) / 2,
      top: top - (getNum(this.#group.height) * delta) / 2,
    });
    this.#group.setCoords();
  }

  shrink() {
    const delta = 0.005;

    const left = getNum(this.#group.left);
    const top = getNum(this.#group.top);

    this.#group.setOptions({
      scaleX: getNum(this.#group.scaleX) - 0.005,
      scaleY: getNum(this.#group.scaleY) - 0.005,
      left: left + (getNum(this.#group.width) * delta) / 2,
      top: top + (getNum(this.#group.height) * delta) / 2,
    });
    this.#group.setCoords();
  }
}
