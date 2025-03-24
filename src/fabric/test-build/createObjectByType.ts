import { createCoord } from '#/fabric/test-build/createCoord';
import { createObjectConnection } from '#/fabric/test-build/createObjectConnection';
import { createPerPixelFindTarget } from '#/fabric/test-build/createPerPixelFindTarget';
import { getInitializor } from '#/fabric/tools/getInitializor';

export type TTestType = 'per-pixel-find-target' | 'object-coord' | 'object-connection';

export function createObjectByType(type: TTestType) {
  switch (type) {
    case 'object-coord':
      return getInitializor(createCoord);
    case 'object-connection':
      return getInitializor(createObjectConnection);
    default:
      return getInitializor(createPerPixelFindTarget);
  }
}
