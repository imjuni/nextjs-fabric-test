import { FabricBox } from '#/fabric/FabricBox';
import { Crosshair } from '#/fabric/objects/Crosshair';
import { fabric } from 'fabric';

export async function clickAnimation(event: fabric.IEvent<MouseEvent>, crosshair: Crosshair) {
  if (crosshair.data < 20) {
    crosshair.expand();
  } else {
    crosshair.shrink();
  }

  FabricBox.canvas.requestRenderAll();

  crosshair.inc();

  if (crosshair.data > 50) {
    FabricBox.canvas.remove(crosshair.object);
    return true;
  }

  setTimeout(() => clickAnimation(event, crosshair), 10);
  return false;
}
