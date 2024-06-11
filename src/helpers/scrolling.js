export const handleScrollDown = (element) => {
  const top = element.getBoundingClientRect().height;
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};

export const handleScrollDownByHalf = (element) => {
  const top = element.getBoundingClientRect().height / 2;
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};
