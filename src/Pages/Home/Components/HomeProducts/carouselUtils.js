export function getNextIndex(current, total) {
  if (total <= 1) return current;

  return (current - 1 + total) % total;
}

export function getPreviousIndex(current, total) {
  if (total <= 1) return current;

  return (current + 1) % total;
}

export function getSlidePosition(
  index,
  activeIndex,
  total,
  direction
) {
  if (total === 0) {
    return "hidden";
  }

  const diff = (index - activeIndex + total) % total;

  if (diff === 0) {
    return "now";
  }

  if (diff === total - 1) {
    return "prev";
  }

  if (diff === 1) {
    return "next";
  }

  if (direction === "next" && diff === total - 2) {
    return "enter-left";
  }

  if (direction === "next" && diff === 2) {
    return "exit-right";
  }

  if (direction === "previous" && diff === 2) {
    return "enter-right";
  }

  if (direction === "previous" && diff === total - 2) {
    return "exit-left";
  }

  return "hidden";
}