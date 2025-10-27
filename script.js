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

// ربط الأنيميشن مع السكاشن
document.querySelectorAll(".section, .profile, .work-card, .skills-grid div, .projects-grid img, .info").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});


document.addEventListener('DOMContentLoaded', () => {
    // الألقاب التي ستتناوب في الظهور
    const titles = [
        "Data Analyst",
        "BI Specialist",
        "Instructor",
        "Computer Engineer"
    ];

    const typingTextElement = document.getElementById('typing-text');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // سرعة الكتابة بالمللي ثانية
    const deletingSpeed = 50; // سرعة المسح
    const pauseTime = 1500; // وقت التوقف بين الألقاب

    function type() {
        const currentTitle = titles[titleIndex];
        
        if (!isDeleting) {
            // حالة الكتابة
            typingTextElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentTitle.length) {
                // انتهت الكتابة، ابدأ المسح بعد وقت التوقف
                isDeleting = true;
                setTimeout(type, pauseTime);
            } else {
                // استمر في الكتابة
                setTimeout(type, typingSpeed);
            }
        } else {
            // حالة المسح
            typingTextElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // انتهى المسح، انتقل للعنوان التالي
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(type, typingSpeed); // ابدأ الكتابة فوراً
            } else {
                // استمر في المسح
                setTimeout(type, deletingSpeed);
            }
        }
    }

    // ابدأ العملية بعد تحميل الصفحة
    type();
});
