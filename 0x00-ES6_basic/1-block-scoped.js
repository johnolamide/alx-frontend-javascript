export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-var
  var task = false;
  // eslint-disable-next-line no-var
  var task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true;
    // eslint-disable-next-line no-unused-vars
    const task2 = false;
  }

  return [task, task2];
}
