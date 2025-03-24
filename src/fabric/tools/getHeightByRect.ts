import { getNum } from '#/fabric/tools/getNum';

export function getHeightByRect(rect: fabric.Rect) {
  if (rect.strokeWidth == null) {
    return getNum(rect.height);
  }

  return getNum(rect.height) + getNum(rect.strokeWidth);
}
