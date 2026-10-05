// // @ts-check

import { getTranslations } from "../../js/i18n.js";

import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

export class CustomNavbar extends LitElement {
  static properties = {
    translations: { type: Object },
  };

  constructor() {
    super();

    this.translations = {
      navigation: {},
    };
  }

  // Light DOM rendering
  createRenderRoot() {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();

    this.translations = await getTranslations();
  }

  // Render the UI as a function of component state
  render() {
    const { navigation } = this.translations;
    const { home, about, stack, experience, projects, resume } = navigation;

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
                  <a class="nav-link c-nav-link" href="#hero">${home}</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#about">${about}</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#myStack">${stack}</a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#experience">
                    ${experience}
                  </a>
                </li>

                <li class="nav-item c-nav-item">
                  <a class="nav-link c-nav-link" href="#projects">
                    ${projects}
                  </a>
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
              href="/media/documents/YaelRodríguez-FrontEndEngineer-Resume.pdf"
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

              ${resume}
            </a>

            <!-- Language -->
            <!-- <div class="dropdown">
              <button
                class="dropdown-toggle c-language-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-translate"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"
                  />
                  <path
                    d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"
                  />
                </svg>
              </button>

              <ul
                class="mt-2 dropdown-menu dropdown-menu-dark dropdown-menu-end"
              >
                <li>
                  <a class="dropdown-item" href="/">English (US)</a>
                </li>

                <li>
                  <a class="dropdown-item" href="/es">Español</a>
                </li>
              </ul>
            </div> -->

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
