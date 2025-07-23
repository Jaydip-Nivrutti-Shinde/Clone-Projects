  const observer = new IntersectionObserver(
    ([entry]) => {
      const para = entry.target;
      if (entry.isIntersecting) {
        para.classList.add("visible");
      } else {
        para.classList.remove("visible");
      }
    },
    {
      root: null, // Use viewport
      threshold: 1.0, // Wait till full element is in view
      rootMargin: "0% 0px -30% 0px" // Top: -25%, Bottom: -75%
    }
  );

  const target = document.querySelector(".fade-text");
  observer.observe(target);
