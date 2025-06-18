<template>
  <div class="page-active-genie">
    <header class="hero">
      <h1 class="hero__title">
        <a href="https://github.com/Roriz/active_genie">🧞 ActiveGenie</a>
      </h1>
      <h2 class="hero__tagline">The lodash for GenAI, stop reinventing the wheel</h2>
      <p class="hero__description">
        Like Lodash or ActiveStorage, ActiveGenie provides essential modules for rapid, reliable AI integration.
        Features a custom benchmarking system ensuring consistent quality and performance across models and providers.
      </p>
    </header>

    <section class="features">
      <h2 class="section-title features__title">What is ActiveGenie?</h2>
      <div class="features__grid">
        <div class="features__image-column">
          <img style="max-width: 100%;" src="/assets/active_genie.optimized.webp" alt="ActiveGenie, the lodash for LLMs" />
        </div>
        <div class="features__text-column">
          <p class="features__paragraph">
            ActiveGenie isn't just an API wrapper, built to solve the hardest problem in GenAI: consistency.
            Modules with clear intention, with simple and consistent interfaces.
          </p>
          <ul class="features__list">
            <li class="features__list-item">ActiveGenie::DataExtractor - Extract data from text</li>
            <li class="features__list-item">ActiveGenie::Battle - Debate-style comparison</li>
            <li class="features__list-item">ActiveGenie::Scoring - School-grade-style rating</li>
            <li class="features__list-item">ActiveGenie::Ranking - Scoring + Battle + Elo rating system</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2 class="section-title cta__title">Join the Community & Support ActiveGenie!</h2>
      <p class="cta__text">
        Support this open-source project! Star us on GitHub or contribute to help us grow.
      </p>
      <a
        href="https://github.com/roriz/active_genie"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        View on GitHub & Star Us!
      </a>
    </section>

    <section class="stats">
      <h2 class="section-title stats__title">Project Stats</h2>
      <div class="stats__grid">
        <div class="stat-card">
          <h3 class="stat-card__title">GitHub Stars <i class="fa fa-star" aria-hidden="true"></i></h3>
          <p class="stat-card__value stat-card__value--stars" id="github-stars">80+</p>
          <p class="stat-card__description">Help us reach more developers!</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-card__title">Gem Downloads <i class="fa fa-gem" aria-hidden="true"></i></h3>
          <p class="stat-card__value stat-card__value--downloads" id="gem-downloads">3000+</p>
          <p class="stat-card__description">Join thousands of happy users!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-active-genie {
  padding: calc(var(--spacing) * 2);
  background-color: var(--bg-secondary);
  max-width: 800px;
  margin: auto;
}

.section-title {
  text-align: center;
  color: var(--tx-primary);
}

.hero {
  text-align: center;
  padding-top: calc(var(--spacing) * 3.75);
  padding-bottom: calc(var(--spacing) * 3.75);
}

.hero__title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: calc(var(--spacing) * 1.25);
  color: var(--tx-primary);
}

.hero__tagline {
  font-size: 1.25rem;
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.875);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero__description {
  font-size: 1.125rem;
  color: var(--tx-secondary);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.features {
  margin-top: calc(var(--spacing) * 3.75);
  margin-bottom: calc(var(--spacing) * 3.75);
}

.features__title {
  margin-bottom: calc(var(--spacing) * 2.5);
}

.features__grid {
  display: grid;
  gap: calc(var(--spacing) * 2.5);
  align-items: center;
}

.features__image {
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(var(--bg-primary-rgb), 0.1), 0 4px 6px -2px rgba(var(--bg-primary-rgb), 0.05);
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px solid var(--bg-secondary);
}

.features__image:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(var(--bg-primary-rgb), 0.15);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.features__image-caption {
  font-size: 0.875rem;
  text-align: center;
  margin-top: calc(var(--spacing) * 0.5);
  color: var(--tx-secondary);
}

.features__paragraph {
  font-size: 1.125rem;
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.25);
  line-height: 1.6;
}

.features__list {
  list-style-type: disc;
  list-style-position: inside;
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.25);
}

.features__list-item {
  margin-top: calc(var(--spacing) * 0.5);
}
.features__list-item:first-child {
  margin-top: 0;
}

.cta {
  background-color: var(--bg-secondary);
  padding: calc(var(--spacing) * 2.5);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(var(--bg-primary-rgb), 0.1), 0 2px 4px -1px rgba(var(--bg-primary-rgb), 0.06);
  margin-top: calc(var(--spacing) * 3.75);
  margin-bottom: calc(var(--spacing) * 3.75);
  text-align: center;
}

.cta__title {
  margin-bottom: calc(var(--spacing) * 1.875);
}

.cta__text {
  font-size: 1.125rem;
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.875);
  line-height: 1.6;
}

.button {
  background-color: var(--bg-accent);
  color: var(--tx-primary);
  font-weight: 700;
  padding: calc(var(--spacing) * 0.94) calc(var(--spacing) * 1.875);
  border-radius: 0.5rem;
  font-size: 1.125rem;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.15s ease-in-out;
}

.button [class*="fa-"] {
  margin-right: var(--spacing);
}

.button:hover {
  background-color: var(--bg-accent-hover);
}

.button__icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: calc(var(--spacing) * 0.5);
}

.stats {
  margin-top: calc(var(--spacing) * 3.75);
  margin-bottom: calc(var(--spacing) * 3.75);
}

.stats__title {
  margin-bottom: calc(var(--spacing) * 2.5);
}

.stats__grid {
  display: grid;
  gap: calc(var(--spacing) * 2.5);
  text-align: center;
}

.stat-card {
  background-color: var(--bg-tertiary);
  padding: calc(var(--spacing) * 1.875);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(var(--bg-primary-rgb), 0.1), 0 4px 6px -2px rgba(var(--bg-primary-rgb), 0.05);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(var(--bg-primary-rgb), 0.15);
}

.stat-card__title {
  font-size: 1.5rem;
  color: var(--tx-primary);
  margin-bottom: calc(var(--spacing) * 0.5);
}

.stat-card__value {
  font-size: 2.25rem;
  font-weight: 700;
}

.stat-card__value--stars {
  color: var(--tx-accent);
}

.stat-card__value--downloads {
  color: var(--tx-accent);
}

.stat-card__description {
  color: var(--tx-secondary);
  font-size: 0.9rem;
}

.stats__note {
  text-align: center;
  color: var(--tx-secondary);
  margin-top: calc(var(--spacing) * 1.875);
  font-size: 0.9rem;
}
.footer {
  text-align: center;
  padding-top: calc(var(--spacing) * 2.5);
  padding-bottom: calc(var(--spacing) * 2.5);
}

.footer__text {
  color: var(--tx-secondary);
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  .page-active-genie {
    padding: calc(var(--spacing) * 2.5);
  }

  .hero__title {
    font-size: 3rem;
  }

  .hero__tagline {
    font-size: 1.5rem;
  }

  .features__grid {
    grid-template-columns: 1fr 2fr;
  }

  .stats__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

</style>
