import { createFabric } from '#/fabric/createFabric';

export function getInitializor(createObject: () => Promise<void>) {
  const handle = async ({ ref }: { ref: React.RefObject<HTMLCanvasElement> }) => {
    await createFabric({ ref });
    await createObject();
  };

  return handle;
}
