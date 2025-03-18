import { createCanvas } from '#/fabric/createCanvas';
import { createObjects } from '#/fabric/createObjects';
import { ImageBox } from '#/fabric/images/ImageBox';

export async function createFabric({ ref }: { ref: React.RefObject<HTMLCanvasElement> }) {
  await ImageBox.create();
  await createCanvas({ ref });
  await createObjects();
}
