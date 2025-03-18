import { CE_FABRIC_CANVAS_CONFIG } from '#/const-enum/CE_FABRIC_CANVAS_CONFIG';
import { FabricBox } from '#/fabric/FabricBox';
import { ImageBox } from '#/fabric/images/ImageBox';
import { fabric } from 'fabric';

export async function createCanvas({ ref }: { ref: React.RefObject<HTMLCanvasElement> }) {
  await ImageBox.create();

  const canvas = new fabric.Canvas(ref.current, {
    selection: false,
    width: CE_FABRIC_CANVAS_CONFIG.WIDTH,
    height: CE_FABRIC_CANVAS_CONFIG.HEIGHT,
    backgroundColor: CE_FABRIC_CANVAS_CONFIG.BACKGROUND_COLOR,
  });

  FabricBox.create(canvas);
}
