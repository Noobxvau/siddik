// Image Change
function changeImage() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('profile-image').src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Scroll Animations for sections
window.onload = function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.animation = 'fadeInUp 1s forwards';
        }, index * 500); // Staggered animation
    });
};

// Dynamic Project Detail Popup
function showProjectDetails(title, description) {
    alert(title + "\n" + description);  // Example of showing project details
}

// Scroll to specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}