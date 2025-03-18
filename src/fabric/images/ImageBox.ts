export class ImageBox {
  static #node: string;

  static #crosshair: string;

  static async fetch(url: string) {
    const resp = await fetch(url);
    const text = await resp.text();
    return text;
  }

  static async create() {
    ImageBox.#node = await ImageBox.fetch('node.svg');
    ImageBox.#crosshair = await ImageBox.fetch('classic_crosshair.svg');
  }

  static get node(): string {
    return ImageBox.#node;
  }

  static get crosshair(): string {
    return ImageBox.#crosshair;
  }
}
