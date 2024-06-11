export const handleScrollDown = (element) => {
  const top = element.getBoundingClientRect().height;
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};

// make a function for reviews
// simplify the code by using custom hooks
// set is Scrolled already to avoid scrolling when we refresh the page
