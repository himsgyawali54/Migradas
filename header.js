class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg py-4">
        <a class="navbar-brand" href="/"><img  src="./img/.webp" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-lg-5">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="service.html"> Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
            <li>
            <a class="btn-all" type="submit">Get Started</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  </header> 
        `;
  }
}
customElements.define("my-header", MyHeader);
