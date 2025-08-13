document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Validation
    const searchForm = document.querySelector('.form-container form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const location = document.querySelector('input[type="search"]').value;
            const pickUpDate = document.querySelector('input[type="date"]').value;
            const returnDate = document.querySelector('input[type="date"]').value;
            
            if (!location || !pickUpDate || !returnDate) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }
            
            // Check if return date is after pickup date
            if (new Date(returnDate) <= new Date(pickUpDate)) {
                e.preventDefault();
                alert('Return date must be after pickup date');
                return;
            }
            
            e.preventDefault();
            alert('Search completed! Showing available vehicles...');
        });
    }

    // Add click handlers for rent buttons
    document.querySelectorAll('.services-container .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const vehicleBox = this.closest('.box');
            const vehicleName = vehicleBox.querySelector('h3').textContent;
            const vehiclePrice = vehicleBox.querySelector('h2').textContent.split(' ')[0];
            
            // Redirect to payment page with vehicle info
            window.location.href = `payment.html?vehicle=${encodeURIComponent(vehicleName)}&price=${encodeURIComponent(vehiclePrice)}`;
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter .box');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('.btn');
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="text"]');
                const email = emailInput.value.trim();
                
                if (!email) {
                    alert('Please enter your email address');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            });
        }
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add loading animation for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.type !== 'submit') return;
            
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    });
});