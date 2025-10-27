// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // لو العنصر يحتوي على عناصر داخلية (زي .info أو .skills-grid)
        const children = entry.target.querySelectorAll("div, img, p, h1, h2, a");
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add("visible");
          }, i * 150); // تأخير بسيط لكل عنصر لعمل تأثير متتابع
        });
      }
    });
  },
  { threshold: 0.2 }
);

