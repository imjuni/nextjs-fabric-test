import { $jsoneditor as jsoneditor$ } from '#/fabric/bridges/jsoneditor-bridge';
import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Polyline } from '#/fabric/objects/Polyline';
import { getLock } from '#/fabric/tools/getLock';
import Color from 'color';
import { fabric } from 'fabric';

export async function createCoord() {
  const canvas = FabricBox.canvas;

  const nodes = [
    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: 'x',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
    await Node.create({
      box: { left: 300, top: 300, width: 120, height: 80 },
      label: 'x',
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
    await Polyline.create({
      points: [
        { x: 300, y: 200 },
        { x: 300, y: 420 },
      ],
      canvas: {
        stroke: Color('#1122ff').hex(),
        strokeWidth: 2,
      },
    }),
    await Polyline.create({
      points: [
        { x: 100, y: 300 },
        { x: 800, y: 300 },
      ],
      canvas: {
        stroke: Color('#1122ff').hex(),
        strokeWidth: 2,
      },
    }),
  ];
  canvas.add(...nodes.map((node) => node.object));

  const nodes2 = [
    new fabric.Rect({
      left: 600,
      top: 300,
      width: 120,
      height: 80,
      originX: 'left',
      originY: 'top',
      fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
    }),
    new fabric.Rect({
      left: 600,
      top: 300,
      width: 120,
      height: 80,
      originX: 'center',
      originY: 'center',
      fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
    }),
    new fabric.Text('left: 600, top: 300', {
      left: 610,
      top: 310,
      fontSize: 12,
      fontFamily: 'roboto',
    }),
    new fabric.Polyline(
      [
        { x: 510, y: 300 },
        { x: 800, y: 300 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Polyline(
      [
        { x: 600, y: 200 },
        { x: 600, y: 420 },
      ],
      {
        stroke: Color('#1122ff').hex(),
        strokeWidth: 2,
      },
    ),
  ];

  const nodes3 = [
    new fabric.Group(
      [
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 120,
          height: 80,
          fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
          stroke: Color('#332211').hex(),
          strokeWidth: 8,
        }),
      ],
      {
        left: 300,
        top: 500,
        width: 120,
        height: 80,
        angle: 90,
      },
    ),
    new fabric.Rect({
      left: 300,
      top: 500,
      width: 120,
      height: 80,
      originX: 'center',
      originY: 'center',
      fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
    }),
    new fabric.Polyline(
      [
        { x: 200, y: 500 },
        { x: 500, y: 500 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Polyline(
      [
        { x: 300, y: 410 },
        { x: 300, y: 620 },
      ],
      {
        stroke: Color('#1122ff').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Text(
      '그룹인 경우, 그룹 객체에 width, height 지정\nstroke가 그룹 객체 stroke의 중심을 지남',
      {
        left: 230,
        top: 410,
        fontSize: 15,
        fontFamily: 'roboto',
      },
    ),
  ];

  const nodes4 = [
    new fabric.Rect({
      left: 600,
      top: 500,
      width: 120,
      height: 80,
      fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
      angle: 90,
    }),
    new fabric.Rect({
      left: 600,
      top: 500,
      width: 120,
      height: 80,
      originX: 'center',
      originY: 'center',
      fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
      stroke: Color('#332211').hex(),
      strokeWidth: 8,
    }),
    new fabric.Polyline(
      [
        { x: 510, y: 500 },
        { x: 800, y: 500 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Polyline(
      [
        { x: 600, y: 410 },
        { x: 600, y: 620 },
      ],
      {
        stroke: Color('#1122ff').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Text(
      '그룹 아닌 경우, Rect에 width, height 지정\nstroke가 Rect stroke의 밖으로 지남',
      {
        left: 550,
        top: 410,
        fontSize: 15,
        fontFamily: 'roboto',
      },
    ),
  ];

  const nodes5 = [
    new fabric.Group(
      [
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 120,
          height: 80,
          originX: 'center',
          originY: 'center',
          fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
          stroke: Color('#332211').hex(),
          strokeWidth: 8,
        }),
        // group을 생성할 때 배열로 전달하는 object의 (0, 0)은 모두 group의 중점에서 시작한다
        // group 100x100 그룹을 (0, 0)에 배치하면 group에 포함시키는 모든 object는 (50,50)에서
        // 시작한다
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          originX: 'left',
          originY: 'top',
          fill: Color('#822233').mix(Color('white'), 0.3).toString(),
          stroke: Color('#229922').hex(),
          strokeWidth: 4,
        }),
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          originX: 'center',
          originY: 'center',
          fill: Color('#229933').mix(Color('white'), 0.3).toString(),
          stroke: Color('#229922').hex(),
          strokeWidth: 4,
        }),
      ],
      {
        name: 'width-height-set-group',
        left: 900,
        top: 300,
        width: 128,
        height: 88,
        originX: 'left',
        originY: 'top',
        ...getLock(),
      },
    ),
    new fabric.Polyline(
      [
        { x: 600, y: 300 },
        { x: 1100, y: 300 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Text('그룹에 width, height 지정\nstroke가 그룹 stroke의 중심 통과', {
      left: 850,
      top: 250,
      fontSize: 15,
      fontFamily: 'roboto',
    }),
    new fabric.Group(
      [
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 120,
          height: 80,
          originX: 'center',
          originY: 'center',
          fill: Color('#8294C4').mix(Color('white'), 0.5).toString(),
          stroke: Color('#332211').hex(),
          strokeWidth: 8,
        }),
        // group을 생성할 때 배열로 전달하는 object의 (0, 0)은 모두 group의 중점에서 시작한다
        // group 100x100 그룹을 (0, 0)에 배치하면 group에 포함시키는 모든 object는 (50,50)에서
        // 시작한다
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          originX: 'left',
          originY: 'top',
          fill: Color('#822233').mix(Color('white'), 0.3).toString(),
          stroke: Color('#229922').hex(),
          strokeWidth: 4,
        }),
        new fabric.Rect({
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          originX: 'center',
          originY: 'center',
          fill: Color('#229933').mix(Color('white'), 0.3).toString(),
          stroke: Color('#229922').hex(),
          strokeWidth: 4,
        }),
      ],
      {
        left: 1100,
        top: 300,
        data: {
          name: 'width-height-unset-group',
        },
        originX: 'left',
        originY: 'top',
        ...getLock(),
      },
    ),
    new fabric.Polyline(
      [
        { x: 600, y: 300 },
        { x: 1500, y: 300 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
    new fabric.Text('그룹에 width, height 설정 안함\nstroke가 그룹 stroke의 외곽 지남', {
      left: 1070,
      top: 250,
      fontSize: 15,
      fontFamily: 'roboto',
    }),
    new fabric.Text(
      '그룹에 포함된 객체는 0, 0이 무조건 그룹 객체의 중심\noriginX: left, originY: top으로 설정하면 stroke가 밖으로 지남\n좌측 빨간 사각형과 중심을 지나는 선 참고',
      {
        left: 900,
        top: 400,
        fontSize: 15,
        fontFamily: 'roboto',
      },
    ),
  ];

  canvas.add(...nodes2);
  canvas.add(...nodes3);
  canvas.add(...nodes4);
  canvas.add(...nodes5);
  canvas.add(
    new fabric.Polyline(
      [
        { x: 600, y: 340 },
        { x: 1500, y: 340 },
      ],
      {
        stroke: Color('#ff1122').hex(),
        strokeWidth: 2,
      },
    ),
  );

  canvas.requestRenderAll();

  setTimeout(() => {
    jsoneditor$.next(canvas.toJSON());
  }, 1000);
}
