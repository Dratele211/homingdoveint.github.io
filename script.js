document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Tab functionality for education section
    const educationTabBtns = document.querySelectorAll('.tab-btn');
    const educationTabContents = document.querySelectorAll('.tab-content');
    
    educationTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            educationTabBtns.forEach(btn => btn.classList.remove('active'));
            educationTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Tab functionality for financial section
    const financialTabBtns = document.querySelectorAll('.financial-tab-btn');
    const financialTabContents = document.querySelectorAll('.financial-tab-content');
    
    financialTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            financialTabBtns.forEach(btn => btn.classList.remove('active'));
            financialTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Loan application modal
    const loanModal = document.getElementById('loanModal');
    const openLoanForm = document.getElementById('openLoanForm');
    const closeLoanModal = loanModal.querySelector('.close-btn');
    
    openLoanForm.addEventListener('click', function() {
        loanModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeLoanModal.addEventListener('click', function() {
        loanModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loanModal) {
            loanModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Student portal modal
    const studentPortalModal = document.getElementById('studentPortalModal');
    const studentPortalLinks = document.querySelectorAll('a[href="#student-portal"]');
    const closeStudentPortalModal = studentPortalModal.querySelector('.close-btn');
    
    studentPortalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            studentPortalModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeStudentPortalModal.addEventListener('click', function() {
        studentPortalModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Staff login modal
    const staffLoginModal = document.getElementById('staffLoginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeStaffLoginModal = staffLoginModal.querySelector('.close-btn');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        staffLoginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeStaffLoginModal.addEventListener('click', function() {
        staffLoginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Student portal content modal
    const studentPortalContent = document.getElementById('studentPortalContent');
    const closeStudentPortalContent = studentPortalContent.querySelector('.close-btn');
    
    closeStudentPortalContent.addEventListener('click', function() {
        studentPortalContent.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Staff portal content modal
    const staffPortalContent = document.getElementById('staffPortalContent');
    const closeStaffPortalContent = staffPortalContent.querySelector('.close-btn');
    
    closeStaffPortalContent.addEventListener('click', function() {
        staffPortalContent.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Student login form
    const studentLoginForm = document.getElementById('studentLoginForm');
    
    studentLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('studentUsername').value;
        const password = document.getElementById('studentPassword').value;
        
        if (username === 'HDstudent' && password === 'Student') {
            studentPortalModal.style.display = 'none';
            studentPortalContent.style.display = 'block';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
    
    // Staff login form
    const staffLoginForm = document.getElementById('staffLoginForm');
    
    staffLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('staffUsername').value;
        const password = document.getElementById('staffPassword').value;
        
        if (username === 'HDinternational' && password === 'Dove@2023') {
            staffLoginModal.style.display = 'none';
            staffPortalContent.style.display = 'block';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
    
    // Logout buttons
    const logoutStudent = document.getElementById('logoutStudent');
    const logoutStaff = document.getElementById('logoutStaff');
    
    logoutStudent.addEventListener('click', function() {
        studentPortalContent.style.display = 'none';
        document.body.style.overflow = 'auto';
        studentLoginForm.reset();
    });
    
    logoutStaff.addEventListener('click', function() {
        staffPortalContent.style.display = 'none';
        document.body.style.overflow = 'auto';
        staffLoginForm.reset();
    });
    
    // Portal tabs functionality
    const portalTabBtns = document.querySelectorAll('.portal-tab-btn');
    const portalTabContents = document.querySelectorAll('.portal-tab-content');
    
    portalTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            portalTabBtns.forEach(btn => btn.classList.remove('active'));
            portalTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Form submissions
    const loanForm = document.getElementById('loanForm');
    const contactForm = document.getElementById('contactForm');
    const uploadForm = document.getElementById('uploadForm');
    const announcementForm = document.getElementById('announcementForm');
    
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Loan application submitted successfully! We will contact you soon.');
        loanModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.reset();
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Learning material uploaded successfully!');
        this.reset();
    });
    
    announcementForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Announcement posted successfully!');
        this.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});