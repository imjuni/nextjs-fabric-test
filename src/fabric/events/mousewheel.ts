import { FabricBox } from '#/fabric/FabricBox';
import { FabricPlainState } from '#/fabric/states/fabric-plain-state';
import { fabric } from 'fabric';

export async function onHandleFabricMouseWheel(event: fabric.IEvent<WheelEvent>) {
  if (FabricPlainState.it.isWheelZoom) {
    const canvas = FabricBox.canvas;
    const delta = event.e.deltaY;
    const zoom = canvas.getZoom();
    const nextZoom = zoom * 0.999 ** delta;

    event.e.preventDefault();
    event.e.stopPropagation();

    canvas.zoomToPoint({ x: event.e.offsetX, y: event.e.offsetY }, nextZoom);
    canvas.fire('zoom:changed', { zoom: nextZoom });
  }
}
