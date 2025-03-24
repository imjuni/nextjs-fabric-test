import type JSONEditor from 'jsoneditor';
import { create } from 'zustand';

interface IJSONEdtirState {
  data: unknown;
  editor: JSONEditor;
}

interface IJSONEditorAction {
  init: (editor: JSONEditor) => void;
  update: (data: unknown) => void;
}

export const editorStore = create<IJSONEdtirState & IJSONEditorAction>((set) => ({
  data: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: {} as any,
  init: (editor: JSONEditor) =>
    set(() => {
      return { editor };
    }),
  update: (data: unknown) =>
    set((state) => {
      state.editor.update(data);
      return state;
    }),
}));
