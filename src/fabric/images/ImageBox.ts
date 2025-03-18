export class ImageBox {
  static #node: string;

  static async fetch(url: string) {
    const resp = await fetch(url);
    const text = await resp.text();
    return text;
  }

  static async create() {
    ImageBox.#node = await ImageBox.fetch('node.svg');
  }

  static get node(): string {
    return ImageBox.#node;
  }
}
