// Project data
const projects = [
    { title: "Project 1", description: "Description of project 1", image: "project1.jpg" },
    { title: "Project 2", description: "Description of project 2", image: "project2.jpg" },
    { title: "Project 3", description: "Description of project 3", image: "project3.jpg" },
];

// Skills data
const skills = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    data: [90, 85, 80, 75, 70],
};

// Experience data
const experiences = [
    { year: "2020", title: "Junior Developer", company: "Tech Co" },
    { year: "2021", title: "Web Developer", company: "Web Solutions Inc" },
    { year: "2022", title: "Senior Developer", company: "Innovation Labs" },
];

// Populate projects
function populateProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectCard);
        
        gsap.from(projectCard, {
            duration: 0.8,
            opacity: 0,
            y: 50,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: projectCard,
                start: "top bottom-=100",
            }
        });
    });
}

// Create skills chart
function createSkillsChart() {
    const ctx = document.createElement('canvas');
    document.getElementById('skills-chart').appendChild(ctx);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: skills.labels,
            datasets: [{
                label: 'Skill Level',
                data: skills.data,
                backgroundColor: 'rgba(44, 123, 182, 0.2)',
                borderColor: 'rgb(44, 123, 182)',
                pointBackgroundColor: 'rgb(44, 123, 182)',
            }]
        },
        options: {
            responsive: true,
            scale: {
                ticks: { beginAtZero: true, max: 100 }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create experience timeline
function createExperienceTimeline() {
    const timeline = document.getElementById('experience-timeline');
    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.classList.add('card');
        item.innerHTML = `
            <h4>${exp.year}</h4>
            <h3>${exp.title}</h3>
            <p>${exp.company}</p>
        `;
        timeline.appendChild(item);

        gsap.from(item, {
            duration: 0.8,
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            delay: index * 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
            }
        });
    });
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log(`New message from ${name} (${email}): ${message}`);
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// Animate sections on scroll
function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top bottom-=100",
            }
        });
    });
}

// Animate background shapes
function animateBackgroundShapes() {
    const shapes = document.querySelectorAll('.bg-animation div');
    shapes.forEach((shape, index) => {
        const delay = index * 2;
        const duration = 25 + Math.random() * 10;
        const size = 20 + Math.random() * 30;

        gsap.set(shape, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: size,
            height: size,
        });

        gsap.to(shape, {
            y: -size,
            repeat: -1,
            duration: duration,
            delay: delay,
            ease: "none",
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    createSkillsChart();
    createExperienceTimeline();
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
    animateSections();
    animateBackgroundShapes();

    // Animate CTA button
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    // Animate navigation links
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { y: -3, duration: 0.3, ease: "power2.out" });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { y: 0, duration: 0.3, ease: "power2.out" });
        });
    });

    const profilePicture = document.querySelector('.profile-picture');
    profilePicture.addEventListener('click', () => {
        profilePicture.classList.add('spin');
        setTimeout(() => {
            profilePicture.classList.remove('spin');
        }, 500);
    });

    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(profilePicture.getBoundingClientRect());
    }

    // Animate other elements
    gsap.to(container, {
        duration: 0.5,
        scale: 1.05,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
    });

    function createParticle(rect) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 10 + 5;
        const speedX = (Math.random() - 0.5) * 20;
        const speedY = (Math.random() - 0.5) * 20;
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `hsl(${Math.random() * 90 + 180}, 100%, 50%)`;

        gsap.fromTo(particle, 
            { x: startX, y: startY, opacity: 1 },
            { 
                duration: 1,
                x: startX + speedX * 20,
                y: startY + speedY * 20,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => particle.remove()
            }
        );
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('#main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        gsap.to(window, { 
            duration: 1, 
            scrollTo: targetElement,
            ease: "power3.inOut"
        });
    });
});

// Parallax effect for background
gsap.to("body", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Make the cartoon follow the mouse
document.addEventListener('mousemove', (e) => {
    const cartoon = document.querySelector('.cartoon-container');
    const x = e.clientX;
    const y = e.clientY;
    
    gsap.to(cartoon, {
        duration: 0.3,
        x: x - 50,
        y: y - 50,
        ease: 'power2.out'
    });
});

// Make the cartoon react to clicks
document.addEventListener('click', () => {
    const cartoon = document.querySelector('.dancing-cartoon');
    gsap.to(cartoon, {
        duration: 0.1,
        scale: 1.2,
        yoyo: true,
        repeat: 1
    });
});

function pageTransition() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 })
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('.animate-this', { duration: .5, y: 30, opacity: 0, stagger: .4 })
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        },
        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
});