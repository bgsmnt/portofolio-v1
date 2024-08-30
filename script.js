document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi EmailJS
    emailjs.init("93dZRCHIr2SvGZ8uT"); // Ganti dengan User ID EmailJS Anda

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Menampilkan loading indicator
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Kirim email menggunakan EmailJS
        emailjs.sendForm('service_iatshq3', 'template_gvrvh54', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again.');
            })
            .finally(function() {
                // Mengembalikan tombol ke keadaan semula
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Tambahkan kode ini di bagian atas file script.js
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("sticky-nav").style.top = "0";
    } else {
        document.getElementById("sticky-nav").style.top = "-60px"; // Sesuaikan dengan tinggi navbar
    }
    prevScrollPos = currentScrollPos;
}
