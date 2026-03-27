// Ocean Elite - Main Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const themeBtnMobile = document.getElementById('theme-toggle-mobile');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);

    const toggleTheme = () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update all theme icons
        const icons = document.querySelectorAll('#theme-toggle i, #theme-toggle-mobile i');
        icons.forEach(icon => {
            if (newTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    };

    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

    // Initial icon state
    if (currentTheme === 'dark') {
        const icons = document.querySelectorAll('#theme-toggle i, #theme-toggle-mobile i');
        icons.forEach(icon => { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); });
    }

    // 2. RTL Toggle Logic
    const rtlBtn = document.getElementById('rtl-toggle');
    const rtlBtnMobile = document.getElementById('rtl-toggle-mobile');
    const currentDir = localStorage.getItem('dir') || 'ltr';

    document.documentElement.setAttribute('dir', currentDir);

    const toggleRTL = () => {
        let dir = document.documentElement.getAttribute('dir');
        let newDir = dir === 'ltr' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
    };

    if (rtlBtn) rtlBtn.addEventListener('click', toggleRTL);
    if (rtlBtnMobile) rtlBtnMobile.addEventListener('click', toggleRTL);

    // 3. Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Smooth Animations (Basic Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // 5. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const dashboardSidebar = document.getElementById('dashboard-sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (sidebarToggle) {
                sidebarToggle.classList.toggle('hidden', navMenu.classList.contains('active'));
            }
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 6. Mobile Dropdown Toggle (Click on mobile)
    const dropdowns = document.querySelectorAll('.nav-item-dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1100) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-item-dropdown > .nav-link), .dropdown-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1100 && navMenu) {
                navMenu.classList.remove('active');
                if (sidebarToggle) {
                    sidebarToggle.classList.remove('hidden');
                }
                if (menuToggle) {
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // 7. Dashboard Sidebar Toggle
    if (sidebarToggle && dashboardSidebar && sidebarBackdrop) {
        sidebarToggle.addEventListener('click', () => {
            dashboardSidebar.classList.toggle('active');
            sidebarBackdrop.classList.toggle('active');
            sidebarToggle.classList.toggle('hidden', dashboardSidebar.classList.contains('active'));
        });

        sidebarBackdrop.addEventListener('click', () => {
            dashboardSidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
            sidebarToggle.classList.remove('hidden');
        });
    }

    // 8. Dynamic Dashboard Content Loading
    const dashLinks = document.querySelectorAll('.dash-link[href^="#"]');
    const sections = document.querySelectorAll('.dashboard-section');
    const pageTitle = document.getElementById('dashboard-page-title');

    if (dashLinks.length > 0 && sections.length > 0) {
        dashLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                
                // Update active link
                dashLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Update sections
                sections.forEach(sec => sec.classList.remove('active'));
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.classList.add('active');
                
                // Update title
                if (pageTitle) {
                    pageTitle.textContent = link.textContent.trim();
                }

                // Close sidebar on mobile after clicking
                if (window.innerWidth <= 1100 && dashboardSidebar) {
                    dashboardSidebar.classList.remove('active');
                    sidebarBackdrop.classList.remove('active');
                    sidebarToggle.classList.remove('hidden');
                }
            });
        });
    }
});
