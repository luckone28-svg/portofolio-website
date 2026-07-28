/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TOP PROGRESS BAR (Scroll Indicator)
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });

    // 2. BACK TO TOP BUTTON
    const topBtn = document.getElementById('topBtn');

    window.addEventListener('scroll', () => {
        if (topBtn) {
            if (window.scrollY > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        }
    });

    if (topBtn) {
        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. AUTO-CALCULATE PROJECTS BUILT
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    const projectCountEl = document.getElementById('projectCount');
    
    if (projectCountEl) {
        const count = projectCards.length;
        projectCountEl.textContent = String(count).padStart(2, '0') + '+';
    }
});

// 4. INISIALISASI LIBRARY ANIMASI AOS
AOS.init({ duration: 800, once: true });