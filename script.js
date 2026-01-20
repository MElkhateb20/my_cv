// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const typedTextSpan = document.querySelector('.typed-text');
const links = document.querySelectorAll('.nav-links li');

// Sticky Navbar Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Set Blurred Background for Portfolio Cards
document.querySelectorAll('.card-image').forEach(card => {
    const img = card.querySelector('img');
    if (img) {
        card.style.backgroundImage = `url('${img.src}')`;
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close Mobile Menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Typing Effect
const typedWords = ["Instructor", "Data Analyst", "Data Scientist", "ML Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 100;

function type() {
    const currentWord = typedWords[wordIndex];

    if (isDeleting) {
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeDelay = 50;
    } else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeDelay = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeDelay = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typedWords.length;
        typeDelay = 500;
    }

    setTimeout(type, typeDelay);
}

document.addEventListener('DOMContentLoaded', type);

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.skill-card, .portfolio-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add animation class via JS for control
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(styleSheet);

// =========================================
// NTI BUTTONS LOGIC
// =========================================

const modal = document.getElementById('media-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Close Modal Logic
function hideModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; // Clear content
    }, 300);
}

if (closeModal) {
    closeModal.addEventListener('click', hideModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// Open Modal Function
function openModal(title, contentHTML) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHTML;
    modal.style.display = 'flex';
    // Small delay to allow display:flex to apply before adding opacity class
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// View Moments Logic
// View Moments Logic
const ntiImages = [
    "20250731_193540.jpg",
    "20250731_193555.jpg",
    "20250731_193733.jpg",
    "20250731_194454.jpg",
    "IMG-20251012-WA0041.jpg",
    "IMG-20251012-WA0044.jpg",
    "IMG-20251012-WA0046.jpg",
    "IMG-20251012-WA0048.jpg",
    "IMG-20251013-WA0022.jpg",
    "IMG-20251013-WA0026.jpg",
    "IMG-20251206-WA0015.jpg",
    "IMG-20260118-WA0044.jpg",
    "IMG-20260118-WA0059.jpg",
    "IMG-20260118-WA0070.jpg",
    "Screenshot 2026-01-19 200137.jpg"
];

function showMomentsGrid() {
    let imagesHTML = '<div class="modal-grid">';
    ntiImages.forEach(img => {
        imagesHTML += `<img src="assets/NTI/${img}" alt="NTI Moment" onclick="viewSingleImage('${img}')">`;
    });
    imagesHTML += '</div>';
    openModal('NTI - Moments', imagesHTML);
}

function viewSingleImage(imgName) {
    const fullImgSrc = `assets/NTI/${imgName}`;
    const singleImageHTML = `
        <button class="btn-back" id="btn-back-to-moments"><i class="fas fa-arrow-left"></i> Back to Gallery</button>
        <div class="single-image-view" style="display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
            <img src="${fullImgSrc}" alt="NTI Moment Full" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 4px;">
        </div>
    `;
    
    // Update modal content directly
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modalTitle) modalTitle.textContent = 'NTI - Zoomed Moment';
    if (modalBody) {
        modalBody.innerHTML = singleImageHTML;
        
        // Attach event listener to back button
        const backBtn = document.getElementById('btn-back-to-moments');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                showMomentsGrid();
            });
        }
    }
}

const btnMoments = document.getElementById('btn-nti-moments');
if (btnMoments) {
    btnMoments.addEventListener('click', () => {
        showMomentsGrid();
    });
}

// Recording Logic
const ntiRecordings = [
    { title: "SQL - P1", id: "1sn4uHTp71tbzT095jVOmEtn9plRylIQt" },
    { title: "SQL - P3", id: "1FiDfuh2V0fVCfSX0-khKMBKIyXbOuJ1B" },
    { title: "Sales", id: "14dXS6kKOKa_0mF-F02wXS5ZW3HkjS6aZ" },
    { title: "HR Project", id: "1aFuM4mOofV5-1yMTnkM-VZDgAd4ac0r-" }
];

function showRecordingsList() {
    let recordingsHTML = '<div class="modal-list">';
    ntiRecordings.forEach(rec => {
        recordingsHTML += `
            <div class="video-link-item" onclick="playVideo('${rec.id}', '${rec.title}')" style="cursor: pointer;">
                <div class="video-icon"><i class="fas fa-play"></i></div>
                <div class="video-info">
                    <h4>${rec.title}</h4>
                    <p>Click to watch recording</p>
                </div>
            </div>
        `;
    });
    recordingsHTML += '</div>';
    openModal('NTI - Recordings', recordingsHTML);
}

function playVideo(id, title) {
    const videoHTML = `
        <button class="btn-back" id="btn-back-to-list"><i class="fas fa-arrow-left"></i> Back to List</button>
        <div class="video-container">
            <iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay"></iframe>
        </div>
    `;
    modalBody.innerHTML = videoHTML;
    modalTitle.textContent = title;

    // Attach event listener to back button
    document.getElementById('btn-back-to-list').addEventListener('click', () => {
        showRecordingsList();
    });
}

const btnRecordings = document.getElementById('btn-nti-recordings');
if (btnRecordings) {
    btnRecordings.addEventListener('click', () => {
        showRecordingsList();
    });
}
