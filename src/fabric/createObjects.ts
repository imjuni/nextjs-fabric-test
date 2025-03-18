import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';

export async function createObjects() {
  const canvas = FabricBox.canvas;

  const nodes = [
    await Node.create({
      box: { left: 700, top: 100, width: 120, height: 80 },
      label: '1',
      color: '#8294C4',
    }),
    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: '2',
      color: '#8294C4',
    }),
    await Polyline.create({
      points: [
        { x: 780, y: 125 },
        { x: 840, y: 125 },
        { x: 840, y: 225 },
        { x: 210, y: 225 },
        { x: 210, y: 325 },
        { x: 265, y: 325 },
      ],
      color: '#E71D36',
    }),
  ];

  canvas.add(...nodes.map((node) => node.object));

  canvas.requestRenderAll();
}
