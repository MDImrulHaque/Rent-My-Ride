document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(bookingForm);
            const pickupDate = bookingForm.querySelector('input[type="date"]').value;
            const returnDate = bookingForm.querySelectorAll('input[type="date"]')[1].value;
            const fullName = bookingForm.querySelector('input[placeholder="Enter your full name"]').value;
            const email = bookingForm.querySelector('input[type="email"]').value;
            const phone = bookingForm.querySelector('input[type="tel"]').value;
            const termsAccepted = bookingForm.querySelector('#terms').checked;
            
            // Validation
            if (!termsAccepted) {
                alert('Please accept the terms and conditions to proceed.');
                return;
            }
            
            if (new Date(returnDate) <= new Date(pickupDate)) {
                alert('Return date must be after pickup date.');
                return;
            }
            
            if (!fullName || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate booking process
            const submitBtn = bookingForm.querySelector('.booking-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Booking confirmed! You will receive a confirmation email shortly.');
                // Redirect to payment or confirmation page
                window.location.href = 'payment.html';
            }, 2000);
        });
    }
    
    // Set minimum date to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });
});