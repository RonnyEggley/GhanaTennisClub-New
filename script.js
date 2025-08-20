// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Sample Data for Dynamic Content
const newsData = [
    {
        id: 1,
        title: "Annual Tennis Tournament 2024",
        date: "2024-03-15",
        excerpt: "Join us for our biggest tennis tournament of the year with prizes worth GHS 10,000!",
        content: "Our annual tennis tournament is back! Register now to compete against the best players in Ghana.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "New Coaching Program Launched",
        date: "2024-03-10",
        excerpt: "Professional coaching sessions now available for all skill levels.",
        content: "We are excited to announce our new coaching program with certified professionals.",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Court Renovation Complete",
        date: "2024-03-05",
        excerpt: "Our courts have been fully renovated with new surfaces and lighting.",
        content: "After months of renovation, our courts are now ready with state-of-the-art facilities.",
        image: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Membership Drive 2024",
        date: "2024-02-28",
        excerpt: "Special discounts available for new members joining this month.",
        content: "Take advantage of our special membership offers available throughout March.",
        image: "https://images.unsplash.com/photo-1606107557460-e49cc5e88f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "Junior Tennis Camp",
        date: "2024-02-20",
        excerpt: "Summer tennis camp for children aged 8-16 starts registration.",
        content: "Give your children the opportunity to learn tennis from professional coaches.",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        title: "Club Social Event",
        date: "2024-02-15",
        excerpt: "Monthly social gathering for all members and their families.",
        content: "Join us for our monthly social event with food, drinks, and networking.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

const eventsData = [
    // Upcoming Events
    {
        id: 1,
        title: "Weekly Training Session",
        date: "2025-08-25",
        time: "6:00 PM - 8:00 PM",
        type: "training",
        description: "Improve your tennis skills with our professional coaches.",
        location: "Court 1 & 2",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 2,
        title: "Singles Tournament",
        date: "2025-09-15",
        time: "9:00 AM - 5:00 PM",
        type: "tournament",
        description: "Competitive singles tournament for intermediate players.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        title: "Tennis Fundamentals Workshop",
        date: "2025-09-22",
        time: "9:00 AM - 3:00 PM",
        type: "training",
        description: "Perfect your tennis fundamentals with expert coaching.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 4,
        title: "Family Fun Day",
        date: "2025-10-05",
        time: "10:00 AM - 4:00 PM",
        type: "social",
        description: "A day of fun activities for the whole family.",
        location: "Club Grounds",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 5,
        title: "Advanced Coaching Clinic",
        date: "2025-10-15",
        time: "2:00 PM - 4:00 PM",
        type: "training",
        description: "Specialized coaching for advanced players.",
        location: "Court 3",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 6,
        title: "Doubles Championship",
        date: "2025-11-02",
        time: "8:00 AM - 6:00 PM",
        type: "tournament",
        description: "Annual doubles championship with cash prizes.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 7,
        title: "Mixed Doubles Tournament",
        date: "2025-11-15",
        time: "9:00 AM - 5:00 PM",
        type: "tournament",
        description: "Exciting mixed doubles tournament for all skill levels.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 8,
        title: "Holiday Social Event",
        date: "2025-12-20",
        time: "5:00 PM - 9:00 PM",
        type: "social",
        description: "Join us for our annual holiday celebration with food and games.",
        location: "Club House",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    // Past Events
    {
        id: 9,
        title: "Summer Tournament 2024",
        date: "2024-07-15",
        time: "9:00 AM - 5:00 PM",
        type: "tournament",
        description: "Annual summer tournament with great participation.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 10,
        title: "Junior Tennis Workshop",
        date: "2024-06-10",
        time: "3:00 PM - 5:00 PM",
        type: "training",
        description: "Special workshop for young tennis enthusiasts.",
        location: "Court 1 & 2",
        image: "https://images.unsplash.com/photo-1606107557460-e49cc5e88f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 9,
        title: "Club Anniversary Celebration",
        date: "2024-05-20",
        time: "6:00 PM - 10:00 PM",
        type: "social",
        description: "Celebrating our club's anniversary with members and guests.",
        location: "Club House",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 10,
        title: "Spring Training Camp",
        date: "2024-04-15",
        time: "8:00 AM - 4:00 PM",
        type: "training",
        description: "Intensive spring training for all skill levels.",
        location: "All Courts",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
];

// Facebook Feed Simulation
const facebookPosts = [
    {
        id: 1,
        content: "Great turnout at today's training session! 🎾 #GhanaTennis #Training",
        date: "2024-03-18",
        likes: 45,
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        content: "Registration is now open for our annual tournament! Don't miss out on the biggest tennis event of the year. 🏆",
        date: "2024-03-16",
        likes: 67,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        content: "Beautiful sunrise tennis session this morning. There's nothing like starting the day on the court! 🌅🎾",
        date: "2024-03-14",
        likes: 32,
        image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// Load Latest News on Home Page
function loadLatestNews() {
    const newsContainer = document.getElementById('latest-news');
    if (!newsContainer) return;

    const latestNews = newsData.slice(0, 3);
    
    newsContainer.innerHTML = latestNews.map(article => `
        <div class="news-card">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}" class="news-img">
            </div>
            <div class="news-content">
                <div class="news-date">${formatDate(article.date)}</div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a href="blog.html" class="btn btn-outline">Read More</a>
            </div>
        </div>
    `).join('');
}

// Load Upcoming Events Carousel on Home Page
function loadUpcomingEvents() {
    const eventsCarousel = document.getElementById('events-carousel');
    if (!eventsCarousel) return;

    const upcomingEvents = getUpcomingEvents().slice(0, 6); // Show more events for carousel
    
    eventsCarousel.innerHTML = upcomingEvents.map((event, index) => `
        <a href="events.html#event-${event.id}" class="carousel-event-card" data-event-id="${event.id}">
            <div class="carousel-event-image">
                <img src="${event.image}" alt="${event.title}" class="carousel-event-img">
            </div>
            <div class="carousel-event-content">
                <div class="carousel-event-date">${formatDate(event.date)}</div>
                <h3 class="carousel-event-title">${event.title}</h3>
                <div class="carousel-event-time">${event.time}</div>
            </div>
        </a>
    `).join('');

    // Initialize carousel after loading events
    initializeEventsCarousel(upcomingEvents.length);
}

// Events Carousel Functionality
let currentEventSlide = 0;
let eventsPerView = 3;
let totalEventSlides = 0;
let eventCarouselInterval;

function initializeEventsCarousel(totalEvents) {
    totalEventSlides = totalEvents;
    updateEventsPerView();
    createCarouselDots();
    setupCarouselControls();
    updateCarouselPosition();
    startAutoCarousel();
    
    // Update events per view on window resize
    window.addEventListener('resize', updateEventsPerView);
}

function updateEventsPerView() {
    const width = window.innerWidth;
    if (width <= 480) {
        eventsPerView = 1;
    } else if (width <= 768) {
        eventsPerView = 2;
    } else if (width <= 1200) {
        eventsPerView = 2;
    } else {
        eventsPerView = 3;
    }
    updateCarouselPosition();
}

function createCarouselDots() {
    const dotsContainer = document.getElementById('carousel-dots');
    if (!dotsContainer || totalEventSlides <= eventsPerView) {
        if (dotsContainer) dotsContainer.style.display = 'none';
        return;
    }

    const maxSlides = Math.max(0, totalEventSlides - eventsPerView);
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i <= maxSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToEventSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function setupCarouselControls() {
    const prevBtn = document.getElementById('events-prev');
    const nextBtn = document.getElementById('events-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoCarousel();
            previousEventSlide();
            startAutoCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoCarousel();
            nextEventSlide();
            startAutoCarousel();
        });
    }

    // Hide controls if not needed
    if (totalEventSlides <= eventsPerView) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
}

function updateCarouselPosition() {
    const carousel = document.getElementById('events-carousel');
    if (!carousel) return;

    const slideWidth = 320 + 32; // Card width + gap
    const offset = currentEventSlide * slideWidth * -1;
    carousel.style.transform = `translateX(${offset}px)`;
    
    updateCarouselDots();
}

function updateCarouselDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentEventSlide);
    });
}

function nextEventSlide() {
    const maxSlide = Math.max(0, totalEventSlides - eventsPerView);
    currentEventSlide = currentEventSlide >= maxSlide ? 0 : currentEventSlide + 1;
    updateCarouselPosition();
}

function previousEventSlide() {
    const maxSlide = Math.max(0, totalEventSlides - eventsPerView);
    currentEventSlide = currentEventSlide <= 0 ? maxSlide : currentEventSlide - 1;
    updateCarouselPosition();
}

function goToEventSlide(slideIndex) {
    currentEventSlide = slideIndex;
    updateCarouselPosition();
}

function startAutoCarousel() {
    if (totalEventSlides <= eventsPerView) return;
    
    eventCarouselInterval = setInterval(() => {
        nextEventSlide();
    }, 5000); // Auto-advance every 5 seconds
}

function stopAutoCarousel() {
    if (eventCarouselInterval) {
        clearInterval(eventCarouselInterval);
    }
}

// Load Facebook Feed
function loadFacebookFeed() {
    const facebookContainer = document.getElementById('facebook-feed');
    if (!facebookContainer) return;

    facebookContainer.innerHTML = `
        <div class="facebook-posts">
            <h3>Latest from our Facebook Page</h3>
            ${facebookPosts.map(post => `
                <div class="facebook-post">
                    <div class="post-image">
                        <img src="${post.image}" alt="Facebook post image" class="facebook-img">
                    </div>
                    <div class="post-content">
                        <div class="post-date">${formatDate(post.date)}</div>
                        <p>${post.content}</p>
                        <div class="post-stats">${post.likes} likes</div>
                    </div>
                </div>
            `).join('')}
            <a href="https://web.facebook.com/ghanatennisclub" target="_blank" class="btn btn-primary">
                View More on Facebook
            </a>
        </div>
    `;
}

// Load All Blog Posts
function loadBlogPosts() {
    const featuredContainer = document.getElementById('featured-story');
    const otherStoriesContainer = document.getElementById('other-stories');
    
    if (!featuredContainer || !otherStoriesContainer) {
        // Fallback for old layout
        const blogContainer = document.getElementById('blog-posts');
        if (!blogContainer) return;
        
        blogContainer.innerHTML = newsData.map(article => `
            <article class="blog-post" data-article-id="${article.id}">
                <img src="${article.image}" alt="${article.title}" class="blog-post-image">
                <div class="blog-post-content">
                    <div class="blog-post-meta">
                        <span>${formatDate(article.date)}</span>
                        <span>•</span>
                        <span>Ghana Tennis Club</span>
                    </div>
                    <h2 class="blog-post-title">${article.title}</h2>
                    <p class="blog-post-excerpt">${article.excerpt}</p>
                    <button class="btn btn-primary read-more" onclick="openNewsModal(${article.id})">Read Full Article</button>
                </div>
            </article>
        `).join('');
        return;
    }

    // Load featured story (first article)
    const featuredArticle = newsData[0];
    featuredContainer.innerHTML = `
        <img src="${featuredArticle.image}" alt="${featuredArticle.title}" class="story-image">
        <div class="story-content">
            <div class="story-meta">
                <span>${formatDate(featuredArticle.date)}</span>
                <span>•</span>
                <span>Ghana Tennis Club</span>
            </div>
            <h1 class="story-title">${featuredArticle.title}</h1>
            <p class="story-excerpt">${featuredArticle.content}</p>
            <button class="btn btn-primary read-more" onclick="openNewsModal(${featuredArticle.id})">Read Full Article</button>
        </div>
    `;

    // Load other stories (remaining articles)
    const otherArticles = newsData.slice(1);
    otherStoriesContainer.innerHTML = otherArticles.map(article => `
        <article class="blog-post" data-article-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" class="blog-post-image">
            <div class="blog-post-content">
                <div class="blog-post-meta">
                    <span>${formatDate(article.date)}</span>
                    <span>•</span>
                    <span>Ghana Tennis Club</span>
                </div>
                <h2 class="blog-post-title">${article.title}</h2>
                <p class="blog-post-excerpt">${article.excerpt}</p>
                <button class="btn btn-primary read-more" onclick="openNewsModal(${article.id})">Read Full Article</button>
            </div>
        </article>
    `).join('');
}

// Load Recent Posts for Sidebar
function loadRecentPosts() {
    const recentContainer = document.getElementById('recent-posts');
    if (!recentContainer) return;

    const recentPosts = newsData.slice(0, 4);
    
    recentContainer.innerHTML = recentPosts.map(article => `
        <div class="sidebar-post">
            <img src="${article.image}" alt="${article.title}" class="sidebar-post-image">
            <div class="sidebar-post-content">
                <h4>${article.title}</h4>
                <div class="sidebar-post-date">${formatDate(article.date)}</div>
            </div>
        </div>
    `).join('');
}

// Load All Events
function loadAllEvents() {
    const upcomingContainer = document.getElementById('upcoming-events-list');
    const pastContainer = document.getElementById('past-events-list');
    
    if (upcomingContainer) {
        displayUpcomingEvents(getUpcomingEvents());
    }
    
    if (pastContainer) {
        displayPastEvents(getPastEvents());
    }
}

// Display Upcoming Events (Regular Size)
function displayUpcomingEvents(events) {
    const upcomingContainer = document.getElementById('upcoming-events-list');
    if (!upcomingContainer) return;

    upcomingContainer.innerHTML = events.map(event => `
        <div class="event-card upcoming-event" data-type="${event.type}">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" class="event-img">
            </div>
            <div class="event-content">
                <div class="event-date">${formatDate(event.date)}</div>
                <h3>${event.title}</h3>
                <div class="event-time">🕒 ${event.time}</div>
                <p>${event.description}</p>
                <div class="event-location">📍 ${event.location}</div>
                <div class="event-type">
                    <span class="type-badge type-${event.type}">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Display Past Events (Smaller Size)
function displayPastEvents(events) {
    const pastContainer = document.getElementById('past-events-list');
    if (!pastContainer) return;

    pastContainer.innerHTML = events.map(event => `
        <div class="event-card past-event" data-type="${event.type}">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" class="event-img">
            </div>
            <div class="event-content">
                <div class="event-date">${formatDate(event.date)}</div>
                <h3>${event.title}</h3>
                <div class="event-time">🕒 ${event.time}</div>
                <div class="event-location">📍 ${event.location}</div>
                <div class="event-type">
                    <span class="type-badge type-${event.type}">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Event Filtering
function setupEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Load upcoming events by default
    displayEvents(getUpcomingEvents());
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            if (filter === 'upcoming') {
                displayEvents(getUpcomingEvents());
            } else if (filter === 'past') {
                displayEvents(getPastEvents());
            } else {
                const filteredEvents = eventsData.filter(event => event.type === filter);
                displayEvents(filteredEvents);
            }
        });
    });
}

// Helper functions for event filtering
function getUpcomingEvents() {
    const today = new Date();
    return eventsData.filter(event => new Date(event.date) >= today);
}

function getPastEvents() {
    const today = new Date();
    return eventsData.filter(event => new Date(event.date) < today);
}

// Membership Form Functions
function setupMembershipForm() {
    const membershipButtons = document.querySelectorAll('.membership-btn');
    const registrationForm = document.getElementById('registrationForm');
    const membershipTypeInput = document.getElementById('membershipType');
    const cancelButton = document.getElementById('cancelForm');
    const form = document.getElementById('membershipForm');

    // Show/hide form based on membership button clicks
    membershipButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            showMembershipForm(category);
        });
    });

    // Cancel button functionality
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            hideMembershipForm();
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', handleMembershipSubmit);
    }
}

function showMembershipForm(category) {
    const registrationForm = document.getElementById('registrationForm');
    const membershipTypeInput = document.getElementById('membershipType');
    
    // Hide all conditional fields first
    hideAllConditionalFields();
    
    // Set membership type
    const categoryNames = {
        'adult': 'Adult Membership (GHC 600)',
        'family': 'Family Membership (GHC 1,500)',
        'junior': 'Junior Membership (GHC 200)',
        'student': 'Student Membership (GHC 300)',
        'corporate': 'Corporate Membership (GHC 5,000)'
    };
    
    membershipTypeInput.value = categoryNames[category];
    
    // Show relevant conditional fields
    showConditionalFields(category);
    
    // Show the form
    registrationForm.style.display = 'block';
    registrationForm.scrollIntoView({ behavior: 'smooth' });
}

function hideMembershipForm() {
    const registrationForm = document.getElementById('registrationForm');
    const form = document.getElementById('membershipForm');
    
    registrationForm.style.display = 'none';
    form.reset();
    hideAllConditionalFields();
}

function hideAllConditionalFields() {
    const familyFields = document.getElementById('familyFields');
    const studentFields = document.getElementById('studentFields');
    const corporateFields = document.getElementById('corporateFields');
    
    if (familyFields) familyFields.style.display = 'none';
    if (studentFields) studentFields.style.display = 'none';
    if (corporateFields) corporateFields.style.display = 'none';
}

function showConditionalFields(category) {
    switch(category) {
        case 'family':
            const familyFields = document.getElementById('familyFields');
            if (familyFields) familyFields.style.display = 'block';
            break;
        case 'student':
            const studentFields = document.getElementById('studentFields');
            if (studentFields) studentFields.style.display = 'block';
            break;
        case 'corporate':
            const corporateFields = document.getElementById('corporateFields');
            if (corporateFields) corporateFields.style.display = 'block';
            break;
    }
}

function handleMembershipSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Category-specific validation
    const membershipType = data.membershipType.toLowerCase();
    
    if (membershipType.includes('student') && !data.institution) {
        alert('Please provide your educational institution for student membership.');
        return;
    }
    
    if (membershipType.includes('corporate') && !data.companyName) {
        alert('Please provide your company name for corporate membership.');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you for your ${data.membershipType} registration! We will contact you soon with payment details and membership information.`);
    hideMembershipForm();
}

// Gallery Functions - Organized by Albums/Events
const galleryAlbums = [
    {
        id: 1,
        title: "2025 Fine Water Open Tournament",
        date: "March 2025",
        coverImage: "images/2025 Fine Water Open Final.webp",
        description: "Highlights from our biggest tournament of the year",
        images: [
            {
                id: 1,
                src: "images/2025 Fine Water Open Final.webp",
                alt: "Tournament Final",
                caption: "Intense final match of the 2025 Fine Water Open"
            },
            {
                id: 2,
                src: "images/Jimmy Estrada.webp", 
                alt: "Jimmy Estrada",
                caption: "Jimmy Estrada showing excellent form"
            },
            {
                id: 3,
                src: "images/Lankai and Issah.webp",
                alt: "Lankai and Issah",
                caption: "Competitive doubles action with Lankai and Issah"
            }
        ]
    },
    {
        id: 2,
        title: "Club Facilities Tour",
        date: "2024",
        coverImage: "images/Court 1 & 2.webp",
        description: "A showcase of our world-class tennis facilities",
        images: [
            {
                id: 4,
                src: "images/Court 1 & 2.webp",
                alt: "Tennis Courts 1 & 2",
                caption: "Our professional tennis courts 1 & 2"
            },
            {
                id: 5,
                src: "images/Court 1 View.jpg",
                alt: "Court 1 View",
                caption: "Beautiful panoramic view of Court 1"
            },
            {
                id: 6,
                src: "images/GTC.webp",
                alt: "Ghana Tennis Club",
                caption: "Main clubhouse and facilities overview"
            },
            {
                id: 7,
                src: "images/Front Sign.webp",
                alt: "Club Entrance",
                caption: "Welcome to Ghana Tennis Club entrance"
            }
        ]
    },
    {
        id: 3,
        title: "Dr. Hayfron Practice Court Opening",
        date: "2024",
        coverImage: "images/Opening of the Dr. Hayfron Practice Court.webp",
        description: "Grand opening ceremony of our new practice facility",
        images: [
            {
                id: 8,
                src: "images/Opening of the Dr. Hayfron Practice Court.webp",
                alt: "Court Opening Ceremony",
                caption: "Official ribbon cutting ceremony for the new practice court"
            }
        ]
    },
    {
        id: 4,
        title: "Training & Coaching Sessions",
        date: "2024",
        coverImage: "images/Coash Sam.jpg",
        description: "Professional coaching and training programs",
        images: [
            {
                id: 9,
                src: "images/Coash Sam.jpg",
                alt: "Coach Sam",
                caption: "Coach Sam leading a training session"
            }
        ]
    }
];

function setupGallery() {
    loadGalleryImages();
    setupGalleryFilters();
    setupImageModal();
}

function loadGalleryImages(filter = 'all') {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    const filteredImages = filter === 'all' 
        ? galleryData 
        : galleryData.filter(image => image.category === filter);

    galleryGrid.innerHTML = filteredImages.map(image => `
        <div class="gallery-item" data-category="${image.category}">
            <img src="${image.src}" alt="${image.alt}" class="gallery-img" 
                 onclick="openImageModal(${image.id})" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-caption">${image.caption}</div>
            </div>
        </div>
    `).join('');
}

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            loadGalleryImages(filter);
        });
    });
}

function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalClose = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (modalClose) {
        modalClose.addEventListener('click', closeImageModal);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateImage(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateImage(1));
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') closeImageModal();
            if (e.key === 'ArrowLeft') navigateImage(-1);
            if (e.key === 'ArrowRight') navigateImage(1);
        }
    });
}

let currentImageIndex = 0;

function openImageModal(imageId) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    const image = galleryData.find(img => img.id === imageId);
    currentImageIndex = galleryData.findIndex(img => img.id === imageId);
    
    if (image) {
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.textContent = image.caption;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryData.length - 1;
    } else if (currentImageIndex >= galleryData.length) {
        currentImageIndex = 0;
    }
    
    const image = galleryData[currentImageIndex];
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.caption;
}

// Membership Modal Functions
function showMembershipForm() {
    const modal = document.getElementById('membershipModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeMembershipForm() {
    const modal = document.getElementById('membershipModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('membershipModal');
    if (event.target === modal) {
        closeMembershipForm();
    }
}

// Hero Background Rotation
let heroImageIndex = 0;
const heroImages = [
    'images/Court 1 & 2.webp',
    'images/GTC.webp',
    'images/Opening of the Dr. Hayfron Practice Court.webp',
    'images/2025 Fine Water Open Final.webp'
];

function setupHeroRotation() {
    const heroSection = document.getElementById('hero-section');
    if (heroSection && heroImages.length > 0) {
        // Set initial background
        heroSection.style.backgroundImage = `url('${heroImages[0]}')`;
        
        // Auto-rotate backgrounds every 6 seconds
        setInterval(() => {
            heroImageIndex = (heroImageIndex + 1) % heroImages.length;
            heroSection.style.backgroundImage = `url('${heroImages[heroImageIndex]}')`;
        }, 6000);
    }
}

// Form Validation and Submission
function setupForms() {
    // Registration Form
    const registrationForm = document.getElementById('membershipForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleRegistrationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!data.terms) {
        alert('Please accept the terms and conditions.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your registration! We will contact you soon with membership details.');
    e.target.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create mailto link for external email
    const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:info@ghanatennisclub.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    alert('Your default email client will open with the message. Please send the email to complete your inquiry.');
    e.target.reset();
}

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Smooth Scrolling for Anchor Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Loading Animation
function showLoading(container) {
    if (container) {
        container.innerHTML = '<div class="loading">Loading...</div>';
    }
}

// Initialize Page-Specific Content
function initializePage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    switch (page) {
        case 'index.html':
        case '':
            loadLatestNews();
            loadUpcomingEvents();
            loadFacebookFeed();
            setupHeroRotation();
            break;
        case 'blog.html':
            loadBlogPosts();
            break;
        case 'events.html':
            loadAllEvents();
            setupEventFilters();
            break;
        case 'registration.html':
        case 'contact.html':
            setupForms();
            break;
        case 'membership.html':
            setupMembershipForm();
            break;
        case 'gallery.html':
            setupGallery();
            break;
    }
}

// Modal Functions
function openNewsModal(articleId) {
    const modal = document.getElementById('newsModal');
    const modalBody = modal.querySelector('.modal-body');
    const article = newsData.find(article => article.id === articleId);

    if (article) {
        modalBody.innerHTML = `
            <div class="modal-article">
                <div class="modal-image">
                    <img src="${article.image}" alt="${article.title}" class="modal-img">
                </div>
                <div class="modal-date">${formatDate(article.date)}</div>
                <h2>${article.title}</h2>
                <div class="modal-content-text">
                    <p>${article.content}</p>
                </div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
        closeNewsModal();
    }
}

// Add CSS for type badges and modal
const additionalStyles = `
    /* Modal Styles */
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        background-color: white;
        margin: 5% auto;
        padding: 20px;
        width: 90%;
        max-width: 800px;
        border-radius: 8px;
        max-height: 90vh;
        overflow-y: auto;
    }

    .close-modal {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 28px;
        font-weight: bold;
        color: var(--text-dark);
        cursor: pointer;
    }

    .close-modal:hover {
        color: var(--primary-green);
    }

    .modal-image {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .modal-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .modal-date {
        color: var(--text-light);
        margin-bottom: 10px;
    }

    .modal-content-text {
        margin-top: 20px;
        line-height: 1.6;
    }

    .type-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    
    .type-tournament {
        background-color: var(--accent-gold);
        color: white;
    }
    
    .type-training {
        background-color: var(--primary-green);
        color: white;
    }
    
    .type-social {
        background-color: var(--secondary-green);
        color: white;
    }
    
    .facebook-posts {
        text-align: left;
    }
    
    .facebook-post {
        background-color: white;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        border-left: 4px solid var(--primary-green);
        display: flex;
        gap: 1rem;
    }
    
    .post-image {
        flex-shrink: 0;
        width: 80px;
        height: 80px;
    }
    
    .facebook-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    
    .post-content {
        flex: 1;
    }
    
    .post-date {
        font-size: 0.9rem;
        color: var(--text-light);
        margin-bottom: 0.5rem;
    }
    
    .post-stats {
        font-size: 0.9rem;
        color: var(--text-light);
        margin-top: 0.5rem;
    }
    
    .article-content {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .event-time {
        color: var(--primary-green);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    .event-location {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--text-light);
    }
    
    .event-type {
        margin-top: 1rem;
    }
`;

// Add additional styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupSmoothScrolling();
    
    // Set up modal close button
    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeNewsModal);
    }
});

// Add some interactive effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.news-card, .event-card, .membership-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});