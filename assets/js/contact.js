// ===== CONTACT FORM — contact.js =====
//
// TODO: palitan ang 3 values na 'to base sa EmailJS dashboard mo
// (Account > General para sa PUBLIC_KEY, Email Services para sa SERVICE_ID,
// Email Templates para sa TEMPLATE_ID)
const EMAILJS_PUBLIC_KEY = "NIMHT_eb_FW-rYZoR";
const EMAILJS_SERVICE_ID = "service_kuzb5vv";
const EMAILJS_TEMPLATE_ID = "template_dbt5k9d";

(function () {
  if (typeof emailjs === "undefined") {
    console.error("EmailJS SDK not loaded — check the <script> tag in index.html");
    return;
  }

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('.contact-submit');
      const originalHTML = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
        .then(() => {
          btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          btn.style.background = '#22c55e';
          form.reset();
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          btn.innerHTML = '<i class="fas fa-times"></i> Failed to send Feature Under Development    ';
          btn.style.background = '#ef4444';
        })
        .finally(() => {
          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalHTML;
            btn.style.background = '';
          }, 3000);
        });
    });
  }
})();