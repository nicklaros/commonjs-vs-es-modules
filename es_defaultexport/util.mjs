function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export default {
  add,
  subtract,
};

// atau

const toExport = {
  add,
  subtract,
};

export { toExport as default };
