document.addEventListener("scroll", () => {
  const total = document.querySelector("#total");
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight >= docHeight) {
    total.classList.add("scrolled");
  } else {
    total.classList.remove("scrolled");
  }
});
