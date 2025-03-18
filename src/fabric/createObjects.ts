import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';
import { Port } from '#/fabric/objects/Port';

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
    await Node.create({
      box: { left: 400, top: 500, width: 120, height: 80 },
      label: '3',
      color: '#8294C4',
    }),
    await Port.create({
      box: { left: 400, top: 540, width: 18, height: 14 },
      label: 'mi',
      color: '#2EC4B6',
    }),
    await Polyline.create({
      points: [
        { x: 820, y: 145 },
        { x: 860, y: 145 },
        { x: 860, y: 225 },
        { x: 250, y: 225 },
        { x: 250, y: 345 },
        { x: 300, y: 345 },
      ],
      color: '#E71D36',
    }),
  ];

  canvas.add(...nodes.map((node) => node.object));

  canvas.requestRenderAll();
}
