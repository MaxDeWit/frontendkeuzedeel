<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <h2>Wuthering Waves</h2>
      </div>

      <div class="footer-column">
        <h3>Quick Links</h3>
        <a href="#home">Home</a>
        <a href="#characters">Characters</a>
        <a href="#regions">Regions</a>
      </div>

      <div class="footer-column">
        <h3>Follow Us</h3>
        <p>@WutheringWaves</p>
      </div>

      <div class="footer-column">
        <h3>Contact</h3>
        <p>hebnoggeenmail@example.com</p>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 Wuthering Waves Fan Site Max</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #4f4f4f;
  color: #f0f0f0;
  padding: 2rem 2.5rem 1.5rem;
  margin-top: 2rem;
  border-radius: 16px;
}

.footer-top {
  display: grid;
  grid-template-columns: minmax(180px, 1.5fr) repeat(3, minmax(120px, 1fr));
  gap: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  padding-bottom: 1.5rem;
}

.footer-brand h2 {
  margin: 0;
  font-size: 1.75rem;
  line-height: 1.1;
}

.footer-column h3 {
  margin: 0 0 0.9rem;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e8e8e8;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-column a,
.footer-column p {
  margin: 0;
  color: #e8e8e8;
  text-decoration: none;
  font-size: 0.95rem;
}

.footer-column a:hover {
  text-decoration: underline;
}

.footer-bottom {
  padding-top: 1.25rem;
  text-align: center;
  color: #d9d9d9;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .site-footer {
    padding: 1.5rem 1.25rem 1rem;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .footer-bottom {
    padding-top: 1rem;
  }
}
</style>