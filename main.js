document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    document.querySelector('.form-container form').addEventListener('submit', function(e) {
        const location = document.querySelector('input[type="search"]').value;
        const pickUpDate = document.querySelector('input[type="date"]').value;
        const returnDate = document.querySelector('input[type="date"]').value;
        
        if (!location || !pickUpDate || !returnDate) {
            e.preventDefault();
            alert('Please fill in all fields');
        }
    });

    // Image Preview for Payment Options
    window.previewImage = function(event, imgId) {
        const reader = new FileReader();
        reader.onload = function(){
            const output = document.getElementById(imgId);
            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
});
