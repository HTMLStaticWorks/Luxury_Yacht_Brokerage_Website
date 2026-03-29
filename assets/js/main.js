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
    
    // 3. Navigation Active State Logic
    const handleNavigationActiveState = () => {
        const path = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            // Remove active class first
            link.classList.remove('active');
            
            // Highlight Fleet when on detail page or any fleet-related page
            if (href === 'yachts.html' && (path.includes('yacht-details.html') || path.includes('yachts.html') || path.includes('charter.html') || path.includes('pricing.html'))) {
                link.classList.add('active');
            }
            // Highlight Discovery
            else if (href === 'about.html' && (path.includes('about.html') || path.includes('blog.html') || path.includes('contact.html'))) {
                link.classList.add('active');
            }
            // Highlight Home
            else if (href === 'index.html' && (path.endsWith('/') || path.includes('index.html') || path.includes('home-2.html'))) {
                link.classList.add('active');
            }
        });
    };

    handleNavigationActiveState();

    // 4. Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to Top Button (global)
    const ensureBackToTop = () => {
        if (document.getElementById('back-to-top')) return;

        const btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.className = 'back-to-top';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(btn);

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const shouldShow = window.scrollY > 450;
                btn.classList.toggle('is-visible', shouldShow);
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    };

    ensureBackToTop();

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

    // 9. Active Menu Highlighting
    const highlightActiveMenu = () => {
        const path = window.location.pathname;
        const page = path.split("/").pop() || 'index.html';
        
        // Handle all nav links and dropdown links
        const allLinks = document.querySelectorAll('.nav-link, .dropdown-link');
        
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Check if link matches current page
            if (href === page || (page === 'index.html' && href === '/')) {
                link.classList.add('active');
                
                // If it's a dropdown link, also highlight the parent nav-link
                const dropdownMenu = link.closest('.dropdown-menu');
                if (dropdownMenu) {
                    const parentNavItem = dropdownMenu.closest('.nav-item-dropdown');
                    if (parentNavItem) {
                        const parentLink = parentNavItem.querySelector('.nav-link');
                        if (parentLink) parentLink.classList.add('active');
                    }
                }
            }
        });
    };

    highlightActiveMenu();

    // 10. Yacht Details Logic
    const yachtDetailsPage = document.querySelector('.yacht-details-page');
    if (yachtDetailsPage && window.yachtsData) {
        const urlParams = new URLSearchParams(window.location.search);
        const yachtId = parseInt(urlParams.get('id')) || 1;
        const yacht = window.yachtsData.find(y => y.id === yachtId) || window.yachtsData[0];

        if (yacht) {
            // Update Page Title
            document.title = `${yacht.name} | Ocean Elite`;

            // Update Breadcrumb
            const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
            if (breadcrumbCurrent) breadcrumbCurrent.textContent = yacht.name;

            // Update Header Info
            const seriesEl = document.querySelector('.yacht-series');
            const titleEl = document.querySelector('.yacht-title');
            const descEl = document.querySelector('.yacht-description');
            
            if (seriesEl) seriesEl.textContent = yacht.series;
            if (titleEl) {
                const nameParts = yacht.name.split(' ');
                if (nameParts.length > 1) {
                    titleEl.innerHTML = `${nameParts[0]} <span class="text-gold">${nameParts.slice(1).join(' ')}</span>`;
                } else {
                    titleEl.textContent = yacht.name;
                }
            }
            if (descEl) descEl.textContent = yacht.description;

            // Update Sidebar Price
            const priceEl = document.querySelector('.yacht-price-value');
            if (priceEl) priceEl.textContent = yacht.price;

            // Update Gallery (Simplified to 2 images)
            const mainGallery = document.querySelector('.yacht-gallery-main');
            const secondaryGallery = document.querySelector('.yacht-gallery-secondary');
            
            if (mainGallery) {
                mainGallery.style.backgroundImage = `url('${yacht.images.hero}')`;
            }

            if (secondaryGallery) {
                const galleryImg = yacht.images.gallery[0] || yacht.images.hero;
                secondaryGallery.style.backgroundImage = `url('${galleryImg}')`;
            }

            // Update Amenities
            const amenitiesGrid = document.querySelector('.amenities-grid');
            if (amenitiesGrid) {
                const icons = ['water', 'dumbbell', 'helicopter', 'wine-glass', 'film', 'spa', 'anchor', 'ship'];
                amenitiesGrid.innerHTML = yacht.amenities.map((amenity, index) => `
                    <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem;">
                        <i class="fas fa-${icons[index % icons.length]} text-gold"></i> <span>${amenity}</span>
                    </div>
                `).join('');
            }

            // Update Specs
            const specsTable = document.querySelector('.specs-table-body');
            if (specsTable) {
                specsTable.innerHTML = `
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 1.25rem 0; font-weight: 600; width: 40%; color: var(--primary-gold);">Builder / Model</td>
                        <td style="padding: 1.25rem 0;">${yacht.builder} / ${yacht.model}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 1.25rem 0; font-weight: 600;">Year of Build</td>
                        <td style="padding: 1.25rem 0;">${yacht.year}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 1.25rem 0; font-weight: 600;">Gross Tonnage</td>
                        <td style="padding: 1.25rem 0;">${yacht.gt}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 1.25rem 0; font-weight: 600;">Hull Material</td>
                        <td style="padding: 1.25rem 0;">${yacht.hull}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 1.25rem 0; font-weight: 600;">Staterooms</td>
                        <td style="padding: 1.25rem 0;">${yacht.staterooms}</td>
                    </tr>
                `;
            }
        }
    }

    // 10b. Charter Details Logic
    const charterDetailsPage = document.querySelector('.charter-details-page');
    if (charterDetailsPage && window.charterData) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id')) || 1;
        const project = window.charterData.find(p => p.id === projectId) || window.charterData[0];

        if (project) {
            document.title = `${project.name} | Ocean Elite`;
            const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
            if (breadcrumbCurrent) breadcrumbCurrent.textContent = project.name;

            const typeEl = document.querySelector('.project-type');
            const titleEl = document.querySelector('.project-title');
            const descEl = document.querySelector('.project-description');
            const detailTextEl = document.querySelector('.project-details-text');
            
            if (typeEl) typeEl.textContent = project.type;
            if (titleEl) {
                const nameParts = project.name.split(' ');
                if (nameParts.length > 1) {
                    titleEl.innerHTML = `${nameParts[0]} <span class="text-gold">${nameParts.slice(1).join(' ')}</span>`;
                } else {
                    titleEl.textContent = project.name;
                }
            }
            if (descEl) descEl.textContent = project.description;
            if (detailTextEl) detailTextEl.textContent = project.details;

            const mainGallery = document.querySelector('.project-gallery-main');
            const secondaryGallery = document.querySelector('.project-gallery-secondary');
            
            if (mainGallery) mainGallery.style.backgroundImage = `url('${project.images.hero}')`;
            if (secondaryGallery) {
                const galleryImg = project.images.gallery[0] || project.images.hero;
                secondaryGallery.style.backgroundImage = `url('${galleryImg}')`;
            }

            const specVessel = document.querySelector('.spec-vessel');
            const specYear = document.querySelector('.spec-year');
            const specClient = document.querySelector('.spec-client');

            if (specVessel) specVessel.textContent = project.vessel;
            if (specYear) specYear.textContent = project.year;
            if (specClient) specClient.textContent = project.client;
        }
    }


    // 11. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('section[class*="section-padding"] .reveal h3');
    faqItems.forEach(header => {
        // Only target FAQ headers (they have a plus/minus icon)
        const icon = header.querySelector('.fa-plus, .fa-minus');
        if (icon) {
            header.addEventListener('click', () => {
                const answer = header.nextElementSibling;
                const isExpanded = answer.style.display === 'block';
                
                // Toggle current item
                answer.style.display = isExpanded ? 'none' : 'block';
                
                // Toggle icon
                if (isExpanded) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    header.style.color = 'inherit';
                } else {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    header.style.color = 'var(--primary-gold)';
                }
                
                // Optional: Close other items (Accordion behavior)
                faqItems.forEach(otherHeader => {
                    if (otherHeader !== header) {
                        const otherAnswer = otherHeader.nextElementSibling;
                        const otherIcon = otherHeader.querySelector('.fa-minus');
                        if (otherAnswer && otherAnswer.style.display === 'block') {
                            otherAnswer.style.display = 'none';
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-minus');
                                otherIcon.classList.add('fa-plus');
                            }
                            otherHeader.style.color = 'inherit';
                        }
                    }
                });
            });
        }
    });

    // 12. Blog Details Logic
    if (window.location.href.includes('blog-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));

        if (articleId && window.blogData) {
            const article = window.blogData.find(b => b.id === articleId);

            if (article) {
                document.title = `${article.title} | Ocean Elite`;
                
                const metaElement = document.getElementById('article-meta');
                const titleElement = document.getElementById('article-title');
                const heroElement = document.getElementById('article-hero');
                const contentElement = document.getElementById('article-content');

                if (metaElement) metaElement.textContent = `${article.category} | ${article.date}`;
                
                if (titleElement) {
                    const titleParts = article.title.split(' ');
                    const lastWord = titleParts.pop();
                    titleElement.innerHTML = `${titleParts.join(' ')} <span class="text-gold">${lastWord}</span>`;
                }
                
                if (heroElement) {
                    // Prepend assets/images/ if not already present
                    let heroPath = article.heroImage;
                    if (!heroPath.startsWith('assets/')) {
                        heroPath = 'assets/images/' + heroPath;
                    }
                    heroElement.src = heroPath;
                    heroElement.alt = article.title;
                    
                    // Fallback to Unsplash if image fails to load
                    heroElement.onerror = function() {
                        this.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5947?auto=format&fit=crop&w=1200&q=80';
                        this.onerror = null; // Prevent infinite loop
                    };
                }
                if (contentElement) contentElement.innerHTML = article.content;
            }
        }
    }
});

