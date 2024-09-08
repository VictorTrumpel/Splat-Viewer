export const updatersSet = new Set<() => void>();

let stopped: boolean = false;

export const removeUpdateFunction = (updateFn: () => void) => {
  updatersSet.delete(updateFn);
};

export const addUpdateFunction = (updateFn: () => void) => {
  updatersSet.add(updateFn);
};

export const update = () => {
  [...updatersSet].forEach((cb) => cb());
};

export const startListenFrame = () => {
  stopped = false;

  const onFrame = () => {
    if (stopped) return;
    update();
    requestAnimationFrame(onFrame);
  };

  requestAnimationFrame(onFrame);
};

export const stopListenFrame = () => {
  stopped = true;
};
