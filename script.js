// script.js
// Form validation and interactivity

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Get form and form elements
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('form-success');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Function to validate the form
    function validateForm() {
        let isValid = true;
        
        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        // Validate name field
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Please enter your full name.';
            isValid = false;
        }
        
        // Validate email field
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
        
        // Validate message field
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
        }
        
        return isValid;
    }
    
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent page refresh
        
        // Validate form
        if (validateForm()) {
            // Form is valid - simulate successful submission
            console.log('Form submitted with data:');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', messageInput.value);
            
            // Show success message
            successMessage.style.display = 'flex';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            // Show alert message (as per requirements)
            alert('Thank you for your message! I will get back to you soon.');
        } else {
            // Form is invalid - focus on first error field
            if (nameError.textContent) {
                nameInput.focus();
            } else if (emailError.textContent) {
                emailInput.focus();
            } else if (messageError.textContent) {
                messageInput.focus();
            }
        }
    }
    
    // Real-time validation for each field
    function addRealTimeValidation() {
        // Name field validation on blur
        nameInput.addEventListener('blur', function() {
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your full name.';
            } else {
                nameError.textContent = '';
            }
        });
        
        // Email field validation on blur
        emailInput.addEventListener('blur', function() {
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email address.';
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
            } else {
                emailError.textContent = '';
            }
        });
        
        // Message field validation on blur
        messageInput.addEventListener('blur', function() {
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter your message.';
            } else {
                messageError.textContent = '';
            }
        });
        
        // Clear error messages when user starts typing
        nameInput.addEventListener('input', function() {
            if (nameError.textContent) {
                nameError.textContent = '';
            }
        });
        
        emailInput.addEventListener('input', function() {
            if (emailError.textContent) {
                emailError.textContent = '';
            }
        });
        
        messageInput.addEventListener('input', function() {
            if (messageError.textContent) {
                messageError.textContent = '';
            }
        });
    }
    
    // Add event listener for form submission
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Initialize real-time validation
    addRealTimeValidation();
    
    // Add some interactivity to the profile image
    const profileImage = document.querySelector('.profile-img');
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            alert('Hello! This is Nesriya Junid. Nice to meet you!');
        });
    }
});