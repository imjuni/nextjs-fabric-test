import { FabricBox } from '#/fabric/FabricBox';

// export async function onHandleFabricMouseUp(event: fabric.IEvent<MouseEvent>) {
export async function onHandleFabricMouseUp() {
  FabricBox.box.isMouseDown = false;
}
