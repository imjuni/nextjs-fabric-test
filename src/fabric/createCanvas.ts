import { CE_FABRIC_CANVAS_CONFIG } from '#/const-enum/CE_FABRIC_CANVAS_CONFIG';
import { onHandleFabricMouseDown } from '#/fabric/events/mousedown';
import { onHandleFabricMouseWheel } from '#/fabric/events/mousewheel';
import { FabricBox } from '#/fabric/FabricBox';
import { fabric } from 'fabric';

export function createCanvas({ ref }: { ref: React.RefObject<HTMLCanvasElement> }) {
  const canvas = new fabric.Canvas(ref.current, {
    selection: false,
    width: CE_FABRIC_CANVAS_CONFIG.WIDTH,
    height: CE_FABRIC_CANVAS_CONFIG.HEIGHT,
    backgroundColor: CE_FABRIC_CANVAS_CONFIG.BACKGROUND_COLOR,
    targetFindTolerance: 10,
    // 선택 영역의 배경색을 투명하게 설정
    // selectionColor: 'rgba(0, 0, 0, 0)',
    // 선택 테두리 색을 투명하게 설정
    // selectionBorderColor: 'transparent',
  });

  canvas.on('mouse:down', onHandleFabricMouseDown);
  canvas.on('mouse:wheel', onHandleFabricMouseWheel);

  FabricBox.create(canvas);
}
