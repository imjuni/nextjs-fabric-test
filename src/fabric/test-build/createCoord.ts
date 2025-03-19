import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';
import Color from 'color';

export async function createCoord() {
  const canvas = FabricBox.canvas;

  const nodes = [
    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: 'x: left\ny: top',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: 'x: center\ny: center',
      color: '#8294C4',
      canvas: {
        originX: 'center',
        originY: 'center',
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
    await Polyline.create({
      points: [
        { x: 200, y: 300 },
        { x: 500, y: 300 },
      ],
      canvas: {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    }),
  ];

  canvas.add(...nodes.map((node) => node.object));

  canvas.requestRenderAll();
}
