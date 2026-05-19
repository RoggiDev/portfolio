import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

export class CustomNavbar extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <nav
        id="navbar"
        class="navbar navbar-expand-lg navbar-dark fixed-top c-navbar"
      >
        <div class="container gap-2">
          <a class="navbar-brand fw-bold c-navbar-title" href="#hero">
            ROGGI DEV
          </a>

          <!-- Offcanvas -->
          <div
            class="offcanvas offcanvas-end c-offcanvas"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <!-- Header -->
            <div class="offcanvas-header c-offcanvas-header">
              <p
                class="offcanvas-title c-offcanvas-title"
                id="offcanvasNavbarLabel"
              >
                ROGGI DEV
              </p>

              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <!-- Body -->
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#hero">Home</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#about">About Me</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#myStack">My Stack</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#experience">
                    Experience
                  </a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#projects">Projects</a>
                </li>

                <!-- <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#contact">Contact</a>
                </li> -->
              </ul>
            </div>
          </div>

          <div class="c-nav-buttons">
            <!-- Resume -->
            <a
              href="/media/documents/Yael Rodríguez - React Developer - Resume.pdf"
              target="_blank"
              class="c-resume-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                />
              </svg>

              Resume
            </a>

            <!-- Toggle button -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("custom-navbar", CustomNavbar);
