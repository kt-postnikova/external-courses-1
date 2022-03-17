module.exports = function addEllipsis(string, number) {
  const ELLIPSIS_CODE = '\u2026';
  if (string.length > number) {
    return `${string.slice(0, number - 1)}${ELLIPSIS_CODE}`;
  }

  return null;
};
