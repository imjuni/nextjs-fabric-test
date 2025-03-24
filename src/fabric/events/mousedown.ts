import { clickAnimation } from '#/fabric/events/mousedown/click-animation';
import { FabricBox } from '#/fabric/FabricBox';
import { Crosshair } from '#/fabric/objects/Crosshair';
import { FabricPlainState } from '#/fabric/states/fabric-plain-state';
import { fabric } from 'fabric';

export async function onHandleFabricMouseDown(event: fabric.IEvent<MouseEvent>) {
  const pointer = FabricBox.canvas.getPointer(event.e, true);
  FabricBox.box.lastCoord = pointer;
  FabricBox.box.isMouseDown = true;

  if (FabricPlainState.it.isShowClickPos) {
    setTimeout(async () => {
      const absPointer = FabricBox.canvas.getPointer(event.e, true);
      const size = 30;
      const crosshair = await Crosshair.create({
        box: {
          left: absPointer.x - size / 2,
          top: absPointer.y - size / 2,
          width: size,
          height: size,
        },
        label: 'clicked',
        color: '#FF9F1C',
      });

      FabricBox.canvas.add(crosshair.object);

      requestAnimationFrame(() => clickAnimation(event, crosshair));
    }, 10);
  }
}
