import { $jsoneditor as jsoneditor$ } from '#/fabric/bridges/jsoneditor-bridge';
import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';
import { Port } from '#/fabric/objects/Port';
import { getNum } from '#/fabric/tools/getNum';
import Color from 'color';

export async function createObjectConnection() {
  const canvas = FabricBox.canvas;

  const node01 = await Node.create({
    box: { left: 300, top: 300, width: 120, height: 80 },
    label: '1',
    color: '#8294C4',
    canvas: {
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
    },
  });
  const portTop =
    getNum(node01.object.top) +
    (getNum(node01.object.height) + getNum(node01.object.strokeWidth)) / 2;

  const portL01 = await Port.create({
    box: {
      left: 300 + 2,
      top: portTop,
    },
    label: 'end',
    mode: 'right',
    color: '#2EC4B6',
  });
  const portR01 = await Port.create({
    box: {
      left: getNum(node01.object.left) + getNum(node01.object.width) - 2,
      top: portTop,
    },
    label: 'start',
    mode: 'left',
    color: '#2EC4B6',
  });

  const polyline01 = await Polyline.create({
    points: [
      {
        x:
          getNum(node01.object.left) +
          getNum(node01.object.width) +
          getNum(node01.object.strokeWidth) / 2 +
          12 -
          2,
        y: portTop,
      },
      { x: getNum(portL01.object.left) + 500, y: portTop + 14 / 2 },
    ],
    canvas: {
      stroke: Color('#ff1122').hex(),
      strokeWidth: 2,
    },
  });

  const nodes = [
    node01,
    portL01,
    portR01,
    polyline01,

    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: '2',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),

    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: '3',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
  ];
  canvas.add(...nodes.map((node) => node.object));

  canvas.requestRenderAll();

  setTimeout(() => {
    jsoneditor$.next(canvas.toJSON());
  }, 1000);
}
