import { FabricBox } from '#/fabric/FabricBox';

export async function onHandleFabricMouseMove(event: fabric.IEvent<MouseEvent>) {
  if (FabricBox.box.isMouseDown) {
    const pointer = FabricBox.canvas.getPointer(event.e, true);
    const deltaX = pointer.x - FabricBox.box.lastCoord.x;
    const deltaY = pointer.y - FabricBox.box.lastCoord.y;

    // relativePan 메서드를 사용해 캔버스 전체를 이동시킵니다.
    FabricBox.canvas.relativePan({ x: deltaX, y: deltaY });
    FabricBox.canvas.requestRenderAll();
    FabricBox.box.lastCoord = pointer;
  }
}
