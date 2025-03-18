import { FabricPlainState } from '#/fabric/states/fabric-plain-state';
import { create } from 'zustand';

interface IFabricStoreState {
  isShowClickPos: boolean;
}

interface IFabricStoreAction {
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export const fabricStore = create<IFabricStoreState & IFabricStoreAction>((set) => ({
  isShowClickPos: false,
  toggle: () =>
    set((state) => {
      FabricPlainState.it.isShowClickPos = !state.isShowClickPos;
      return { isShowClickPos: !state.isShowClickPos };
    }),
  enable: () =>
    set(() => {
      FabricPlainState.it.isShowClickPos = true;
      return { isShowClickPos: true };
    }),
  disable: () =>
    set(() => {
      FabricPlainState.it.isShowClickPos = false;
      return { isShowClickPos: false };
    }),
}));
