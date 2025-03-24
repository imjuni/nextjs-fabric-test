import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';
import { Port } from '#/fabric/objects/Port';

export async function createPerPixelFindTarget() {
  const canvas = FabricBox.canvas;

  const nodes = [
    await Polyline.create({
      points: [
        { x: 820, y: 145 },
        { x: 860, y: 145 },
        { x: 860, y: 225 },
        { x: 250, y: 225 },
        { x: 250, y: 345 },
        { x: 300, y: 345 },
      ],
      canvas: {
        stroke: '#E71D36',
        strokeWidth: 2,
      },
    }),
    await Polyline.create({
      points: [
        { x: 330, y: 545 },
        { x: 690, y: 545 },
      ],
      canvas: {
        stroke: '#E71D36',
        strokeWidth: 2,
      },
    }),
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
      box: { left: 200, top: 500, width: 120, height: 80 },
      label: '3',
      color: '#8294C4',
    }),
    await Node.create({
      box: { left: 700, top: 500, width: 120, height: 80 },
      label: '4',
      color: '#8294C4',
    }),
    await Port.create({
      box: { left: 200, top: 540 },
      label: 'end',
      mode: 'right',
      color: '#2EC4B6',
    }),
    await Port.create({
      box: { left: 320, top: 540 },
      label: 'start',
      mode: 'left',
      color: '#2EC4B6',
    }),
    await Port.create({
      box: { left: 700, top: 540 },
      label: 'end',
      mode: 'right',
      color: '#2EC4B6',
    }),
    await Port.create({
      box: { left: 820, top: 540 },
      label: 'start',
      mode: 'left',
      color: '#2EC4B6',
    }),
  ];

  canvas.add(...nodes.map((node) => node.object));

  canvas.requestRenderAll();
}
