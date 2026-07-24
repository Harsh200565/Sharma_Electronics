function bookService(){
    alert("Thank you for choosing Sharma Electronics Workshop.\nOur team will contact you shortly.");
}
// Form submit -> WhatsApp redirect
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('custName').value;
      const phone = document.getElementById('custPhone').value;
      const msg = document.getElementById('custMsg').value;

      const fullMsg = `Namaste Sharma Electronics! 
      Name :${name} 
      Phone :(${phone}).
      Inquiry: ${msg}`;
      const waUrl = `https://wa.me/917240318709?text=${encodeURIComponent(fullMsg)}`;

      window.open(waUrl, '_blank');
      contactForm.reset();
    });
  }


// Direct Product WhatsApp Inquiry
function inquireProduct(productName) {
  const message = `Namaste Sharma Electronics, mujhe ${productName} ke baare mein details aur best price janna hai.`;
  const whatsappUrl = `https://wa.me/917240318709?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelector('.mobile-menu-links');
  const desktopMenu = document.querySelector('.desktop-menu');

  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
    mobileMenu.classList.toggle('deactive');
  }
  if (mobileMenuLinks) {
    mobileMenuLinks.classList.toggle('active');
    mobileMenuLinks.classList.toggle('deactive');
  }
  if (desktopMenu) {
    desktopMenu.classList.toggle('deactive');
  }
}
function toggleMobileMenu(){
    document.querySelector(".mobile-menu-links").classList.toggle("active");
}
