// Dashboard Specific Scripts
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Link Switching
    const dashLinks = document.querySelectorAll('.dash-link');
    dashLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                dashLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Logic to switch content blocks could be added here
                console.log('Switching to:', link.textContent.trim());
            }
        });
    });

    // 2. Table Row Hover Effects
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.transition = 'background 0.2s';
        row.addEventListener('mouseenter', () => {
            row.style.background = 'var(--bg-light)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.background = 'transparent';
        });
    });
});
