const stackMap = stack => stack.map((tech, index) => {
  if (index === 0) {
    return `${tech}`;
  }
  return ` » ${tech} `;
});

const classnames = [
  'sage',
  'lemon',
  'sky',
  'pink',
];

export {
  stackMap,
  classnames,
};
