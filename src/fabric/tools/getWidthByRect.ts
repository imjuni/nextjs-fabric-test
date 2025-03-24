import { getNum } from '#/fabric/tools/getNum';
import { fabric } from 'fabric';

export function getWidthByRect(rect: fabric.Rect) {
  if (rect.strokeWidth == null) {
    return getNum(rect.width);
  }

  return getNum(rect.width) + getNum(rect.strokeWidth);
}
