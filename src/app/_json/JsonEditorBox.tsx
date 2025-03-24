'use client';

import { editorStore } from '#/components/state/editor-state';
import { CE_FABRIC_CANVAS_CONFIG } from '#/const-enum/CE_FABRIC_CANVAS_CONFIG';
import { $jsoneditor } from '#/fabric/bridges/jsoneditor-bridge';
import { css } from '#/styled-system/css';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';
import { Suspense, useEffect, useRef } from 'react';
import { throttleTime } from 'rxjs';

const styledJsonEditor = css({
  width: '10rem',
  height: '10rem',
});

export default function JSONEditorBox() {
  const divRef = useRef<HTMLDivElement>(null);
  const initializeRef = useRef<boolean>(false);
  const { init } = editorStore();

  useEffect(() => {
    if (!initializeRef.current) {
      initializeRef.current = true;
      const editor = new JSONEditor(divRef.current!, {});
      editor.set({});
      init(editor);

      const p = $jsoneditor.pipe(throttleTime(100));
      p.subscribe((data: unknown) => {
        console.log('데이터 수신: ', data);
        editor.update(data);
      });
    }
  }, []);

  return (
    <Suspense>
      <div
        className={styledJsonEditor}
        style={{
          width: CE_FABRIC_CANVAS_CONFIG.WIDTH / 2,
          height: CE_FABRIC_CANVAS_CONFIG.HEIGHT,
        }}
        ref={divRef}
      />
    </Suspense>
  );
}
