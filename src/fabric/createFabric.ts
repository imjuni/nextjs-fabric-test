import { createCanvas } from '#/fabric/createCanvas';
import { createObjects } from '#/fabric/createObjects';
import { ImageBox } from '#/fabric/images/ImageBox';
import { FabricPlainState } from '#/fabric/states/fabric-plain-state';

export async function createFabric({ ref }: { ref: React.RefObject<HTMLCanvasElement> }) {
  FabricPlainState.create();
  await ImageBox.create();
  await createCanvas({ ref });
  await createObjects();
}
