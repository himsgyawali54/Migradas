class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg py-4">
        <a class="navbar-brand" href="index.html"><img width="150px" src="./img/migradas-logo.webp" /></a>
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
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="study-abroad.html">Study Abroad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pathways-programs.html"
                >Pathway Programs</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="visas.html">Visas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="other-services.html">Other Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Support</a>
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
