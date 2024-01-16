class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <footer id="contact-us">      
      <section class="contact-us-info">
      
      <div class="container">
      <h2 class="big-heading"><span>Contact  </span> Us</h2>
        <div class="row row-cols-1 row-cols-lg-2 contact-row gap-5">
        <div class="col-md-7 col-lg-4 contact-detail-card">
            <div class="card">
              <div class="card-body">
                <h2>CONTACT DETAILS</h2>
                
               
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <i class="bi bi-whatsapp"></i
                    >
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Chat Via Whatsapp</h4>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="mailto:info@sociomizly.com" class="stretched-link"
                      ><i class="bi bi-envelope"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Send an Email</h4>
                    <p>info@sociomizly.com</p>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                  <i class="bi bi-alarm"></i>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Sun-Fri (Open Hours)</h4>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Book a consultation</h4>
                  </div>
                </div>

                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <i class="bi bi-geo-alt"></i
                    >
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>71-75 Shelton St, London WC2H 9JQ, </h4>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>
              </div>
              </div>
              
              
           <div class="card">
           <div class="card-body">   
        <form
            action="https://formsubmit.co/rajnitabhetwal10@gmail.com"
            method="POST"
          >
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="text"
                  name="First Name"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="Last Name"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="mail"
                  name="Email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="col">
                <input
                  type="tel"
                  name="Phone"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="text"
                  name="country"
                  class="form-control"
                  placeholder="Enter Your country"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="location"
                  class="form-control"
                  placeholder="Enter your location"
                />
              </div>
            </div>

           
            <textarea
              name="Message"
              class="form-control"
              placeholder="Message"
              rows="6"
            ></textarea>

            <button class="btn-all" type="submit">Submit</button>
          </form>
          </div>
          </div>
        
             
          
         
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-form">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <h3><a href="/"><img  src="#" /></a></h3>
            <p>
            With a commitment to excellence, transparency, and tailored solutions, SocioMizly is your partner for digital success.
            </p>
          </div>
          <div class="col-12 col-lg-3">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="service.html">Service</a></li>
              <li><a href="about.html">About US</a></li>
              
              <li><a href="contact.html">Contact Us</a></li>
              
            </ul>
            <!-- <div class="social-media">
              <ul>
                <li>
                  <i class="bi bi-youtube"></i>
                  <p>Youtube</p>
                </li>
                <li>
                  <i class="bi bi-facebook"></i>
                  <p>Facebook</p>
                </li>
                <li>
                  <i class="bi bi-instagram"></i>
                  <p>Instagram</p>
                </li>
              </ul>
            </div> -->
          </div>
          
          <div class="col-12 col-lg-3">
            <h3>Contact</h3>
            <ul>
              
              <li><a href="mailto:info@sociomizly.com">Email: info@sociomizly.com</a></li>
              <li>Phone: +1 5589 55488 55</li>
             
            </ul>
          </div>
        </div>
        <p class="copyright">
          Copyright @ 2024 - SocioMizly- All rights reserved
        </p>
      </div>
    </section></footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
