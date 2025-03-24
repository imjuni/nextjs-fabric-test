import { $jsoneditor as jsoneditor$ } from '#/fabric/bridges/jsoneditor-bridge';
import { FabricBox } from '#/fabric/FabricBox';
import { Node } from '#/fabric/objects/Node';
import { Port } from '#/fabric/objects/Port';
import Color from 'color';
import { fabric } from 'fabric';
import { IPoint } from 'fabric/fabric-impl';

function getAbsoluteCoordsFromGroup(child: fabric.Object, group: fabric.Group): IPoint {
  // 그룹과 자식 객체의 좌표를 최신 상태로 업데이트
  // group.setCoords();
  // child.setCoords();

  // 그룹의 전체 변환 행렬은 group.calcTransformMatrix()에 포함됩니다.
  const groupMatrix = group.calcTransformMatrix();

  // child의 로컬 좌표(그룹 내부 좌표)는 child.left, child.top 입니다.
  const localPoint = new fabric.Point(child.left ?? 0, child.top ?? 0);

  // 그룹의 변환 행렬을 사용하여 child의 로컬 좌표를 절대 좌표로 변환합니다.
  const absolutePoint = fabric.util.transformPoint(localPoint, groupMatrix);

  return absolutePoint;
}

export async function createGroupCoord() {
  const canvas = FabricBox.canvas;

  const nodes = [
    await Node.create({
      box: { left: 100, top: 100, width: 100, height: 50 },
      label: '01',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
    await Node.create({
      box: { left: 200, top: 200, width: 100, height: 50 },
      label: '01',
      color: '#8294C4',
      canvas: {
        stroke: Color('#332211').hex(),
        strokeWidth: 8,
      },
    }),
  ];

  const ports = [
    await Port.create({
      box: { left: 100, top: 400 },
      label: 'p1',
      mode: 'right',
      color: '#2EC4B6',
    }),
    await Port.create({
      box: { left: 200, top: 400 },
      label: 'p2',
      mode: 'left',
      color: '#2EC4B6',
    }),
  ];

  const group01 = new fabric.Group(
    nodes.map((node) => node.object),
    {},
  );

  const group02 = new fabric.Group(
    ports.map((port) => port.object),
    {},
  );

  canvas.add(
    new fabric.Rect({
      left: group01.left,
      top: group01.top,
      width: group01.width,
      height: group01.height,
      fill: '#DDDDDD',
    }),
  );

  canvas.add(group01);

  console.log(
    '테스트: ',
    getAbsoluteCoordsFromGroup(nodes[0].object.getObjects()[0], nodes[0].object),
  );
  console.log('테스트: ', getAbsoluteCoordsFromGroup(nodes[0].object, group01));

  canvas.add(
    new fabric.Rect({
      left: group02.left,
      top: group02.top,
      width: group02.width,
      height: group02.height,
      fill: '#DDDDDD',
    }),
  );
  canvas.add(group02);

  canvas.add(
    new fabric.Text(
      [
        'group에 left, top을 설정하지 않고, new fabric.Group([오브젝트 배열])',
        '방식으로 group을 생성하는 경우 전달한 오브젝트 배열의 BoundingBox의 top-left를 사용하고',
        'width, height를 구할 때는 strokeWidth를 포함한다',
        '',
        '',
        `left: ${nodes.at(0)?.object.left}`,
        `top: ${nodes.at(0)?.object.top}`,
        `${nodes.at(0)?.object.originX}`,
        `${nodes.at(0)?.object.originY}`,
        '',
        `left: ${group01.left}/ top: ${group01.top}`,
        `width: ${group01.width}/ height: ${group01.height}`,
      ].join('\n'),
      {
        left: 600,
        top: 100,
        fontSize: 15,
        fontFamily: 'roboto',
      },
    ),
  );

  canvas.add(
    new fabric.Text(
      [
        `left: ${ports.at(0)?.object.left}/ top: ${ports.at(0)?.object.top}`,
        `width: ${ports.at(0)?.object.width}/ height: ${ports.at(0)?.object.height}`,
        `${ports.at(0)?.object.originX}`,
        `${ports.at(0)?.object.originY}`,
        '',
        `left: ${group02.left}/ top: ${group02.top}`,
        `width: ${group02.width}/ height: ${group02.height}`,
      ].join('\n'),
      {
        left: 600,
        top: 400,
        fontSize: 15,
        fontFamily: 'roboto',
      },
    ),
  );

  canvas.requestRenderAll();

  setTimeout(() => {
    jsoneditor$.next(canvas.toJSON());
  }, 1000);
}
