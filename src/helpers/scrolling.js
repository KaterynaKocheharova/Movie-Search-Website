export const handleScrollDown = (element) => {
  const top = element.getBoundingClientRect().height * 2;
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
