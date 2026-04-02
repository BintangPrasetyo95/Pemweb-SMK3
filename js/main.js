/* ===== SMKN 3 Metro - Minimal JavaScript ===== */

document.addEventListener('DOMContentLoaded', function () {

  // ===== PRELOADER =====
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
      }, 500);
    });
    // Fallback
    setTimeout(function () {
      preloader.classList.add('hidden');
    }, 3000);
  }

  // ===== NAVBAR ACTIVE LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      const dropdownParent = link.closest('.dropdown');
      if (dropdownParent) {
        const toggle = dropdownParent.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  // ===== FEEDBACK FORM =====
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('feedbackName').value.trim();
      const category = document.getElementById('feedbackCategory').value;
      const message = document.getElementById('feedbackMessage').value.trim();
      if (!name || !category || !message) {
        alert('Mohon lengkapi semua field yang diperlukan.');
        return;
      }
      const btn = feedbackForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Mengirim...';
      btn.disabled = true;
      setTimeout(function () {
        alert('Terima kasih! Kritik dan saran Anda telah dikirim.');
        feedbackForm.reset();
        btn.innerHTML = original;
        btn.disabled = false;
      }, 1500);
    });
  }

  // ===== LOGIN FORM =====
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      if (!username || !password) {
        alert('Mohon masukkan username dan password.');
        return;
      }
      const btn = loginForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Memproses...';
      btn.disabled = true;
      setTimeout(function () {
        alert('Login berhasil! Mengalihkan...');
        btn.innerHTML = original;
        btn.disabled = false;
        window.location.href = 'index.html';
      }, 1500);
    });

    // Toggle password
    const togglePw = document.getElementById('togglePassword');
    if (togglePw) {
      togglePw.addEventListener('click', function () {
        const pw = document.getElementById('loginPassword');
        const icon = togglePw.querySelector('i');
        if (pw.type === 'password') {
          pw.type = 'text';
          icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
          pw.type = 'password';
          icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
      });
    }
  }

  // ===== BACK TO TOP =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.remove('d-none');
      } else {
        backToTop.classList.add('d-none');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
