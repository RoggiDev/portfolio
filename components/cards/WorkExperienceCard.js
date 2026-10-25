import { getTranslations } from "../../js/i18n.js";

import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

export class CustomWorkExperienceCard extends LitElement {
  static properties = {
    jobId: { type: String },
    company: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    technologies: { type: Array },
    translations: { type: Object },
  };

  constructor() {
    super();

    this.translations = {
      workExperience: {},
      currentJob: {},
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

  render() {
    const jobTranslation = this.translations.workExperience?.[this.jobId];

    if (!jobTranslation) {
      return html``;
    }

    const { post, activities } = jobTranslation;
    const { currentJobLabel } = this.translations.currentJob;

    return html`
      <div id=${this.jobId} class="c-work-trigger">
        <div class="p-4 c-work-experience">
          <div class="d-flex flex-column gap-2">
            <p class="mb-0 c-post">${post}</p>

            <div
              class="d-flex flex-column flex-md-row gap-0 gap-md-2 c-job-time"
            >
              <h3 class="mb-0 c-company-name">${this.company}</h3>

              <p class="mb-0 d-none d-md-flex">|</p>

              <p class="mb-0">
                ${this.startDate} -
                ${this.endDate ? this.endDate : currentJobLabel}
              </p>
            </div>
          </div>

          <ul class="mb-0 c-tasks">
            ${activities.map((activity) => html`<li>${activity}</li>`)}
          </ul>

          <div class="d-flex flex-wrap gap-2 gap-sm-3">
            ${this.technologies.map(
              (technology) => html`
                <span class="c-tech-badge">${technology}</span>
              `,
            )}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-work-experience-card", CustomWorkExperienceCard);
