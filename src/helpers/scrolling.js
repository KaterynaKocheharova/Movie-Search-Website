export const handleScrollDown = (element) => {
  const top = element.getBoundingClientRect().height;
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};

export const handleScrollDownByHalf = () => {
  window.scrollBy({
    top: 200,
    behavior: "smooth",
  });
};
