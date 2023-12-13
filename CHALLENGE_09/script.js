function adjustLights(lights) {
  let changesNeeded = 0;

  for (let i = 0; i < lights.length; i++) {
    const expectedColor = i % 2 === 0 ? '🔴' : '🟢';

    if (lights[i] !== expectedColor) {
      changesNeeded++;
    }
  }

  return Math.min(changesNeeded, lights.length - changesNeeded);
}