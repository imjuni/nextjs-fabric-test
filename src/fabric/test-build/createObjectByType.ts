import { createGroupCoord } from '#/fabric/test-build/createGroupCoord';
import { createObjectConnection } from '#/fabric/test-build/createObjectConnection';
import { createObjectCoord } from '#/fabric/test-build/createObjectCoord';
import { createPerPixelFindTarget } from '#/fabric/test-build/createPerPixelFindTarget';
import { getInitializor } from '#/fabric/tools/getInitializor';

export type TTestType =
  | 'per-pixel-find-target'
  | 'object-coord'
  | 'object-connection'
  | 'group-coord';

export function createObjectByType(type: TTestType) {
  switch (type) {
    case 'object-coord':
      return getInitializor(createObjectCoord);
    case 'group-coord':
      return getInitializor(createGroupCoord);
    case 'object-connection':
      return getInitializor(createObjectConnection);
    default:
      return getInitializor(createPerPixelFindTarget);
  }
}
