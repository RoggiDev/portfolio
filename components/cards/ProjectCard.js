import { getTranslations } from "../../js/i18n.js";

import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

export class CustomProjectCard extends LitElement {
  static properties = {
    projectIndex: { type: Number },
    projectId: { type: String },
    image: { type: String },
    technologies: { type: Array },
    liveUrl: { type: String },
    githubUrl: { type: String },
    translations: { type: Object },
  };

  constructor() {
    super();

    this.translations = {
      projects: {},
      projectButtons: {},
    };

    this.translationsReady = this.loadTranslations();
  }

  // Light DOM rendering
  createRenderRoot() {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();

    this.translationsReady = this.loadTranslations();
  }

  async loadTranslations() {
    this.translations = await getTranslations();
  }

  // Render the UI as a function of component state
  render() {
    const projectTranslation = this.translations.projects?.[this.projectId];

    if (!projectTranslation) {
      return html``;
    }

    const { title, description } = projectTranslation;
    const { viewLive, viewRepo } = this.translations.projectButtons;

    return html`
      <div id=${this.projectId} class="c-card-trigger">
        <div
          class="card c-card ${Number(this.projectIndex) % 2
            ? "c-card-right"
            : "c-card-left"}"
        >
          <div class="row g-0">
            <div
              class="col-12 col-lg-7 ${Number(this.projectIndex) % 2
                ? "order-0 order-lg-1"
                : "order-0 order-lg-0"} c-project-image-container"
            >
              <img
                src=${this.image}
                class="c-project-img c-project-right"
                alt=${title}
                title=${title}
                loading="lazy"
              />
            </div>

            <div
              class="col-12 col-lg ${Number(this.projectIndex) % 2
                ? "order-1 order-lg-0"
                : "order-1 order-lg-1"} c-project-text-container"
            >
              <div class="card-body c-card-body">
                <h3 class="card-title c-project-title">${title}</h3>

                <p class="card-text c-project-description">${description}</p>

                <div class="c-tech-list">
                  ${this.technologies.map(
                    (technology) => html`
                      <span class="c-tech-badge">${technology}</span>
                    `,
                  )}
                </div>

                <div class="c-project-links">
                  ${this.liveUrl &&
                  html`
                    <a
                      href=${this.liveUrl}
                      target="_blank"
                      rel="noopener"
                      class="c-project-link"
                    >
                      ${viewLive}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right c-view-icon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </a>
                  `}
                  ${this.githubUrl &&
                  html`
                    <a
                      href=${this.githubUrl}
                      target="_blank"
                      rel="noopener"
                      class="c-project-link"
                    >
                      ${viewRepo}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right c-view-icon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </a>
                  `}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-project-card", CustomProjectCard);
