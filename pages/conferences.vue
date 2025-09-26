<template>
  <div class="page-speaker">
    <header class="hero">
      <h1 class="hero__title">
        Events & Conferences
      </h1>
      <h2 class="hero__tagline">Simplicity + Real Impact + No Buzzwords</h2>
      <p class="hero__description">
        Collection of events and conferences where I've had the privilege to speak about technology and software development
      </p>
    </header>

    <section class="cta">
      <a
        href="mailto:radames@roriz.dev"
        class="button"
      >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        Contact Me
      </a>
    </section>

    <section class="events">
      <div class="events__grid">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="event-card"
          @click="navigateToEvent(event)"
          role="button"
          tabindex="0"
          @keyup.enter="navigateToEvent(event)"
        >
          <div class="event-card__image-container">
            <img
              :src="event.coverImage"
              :alt="`Cover image for ${event.title}`"
              class="event-card__image"
              loading="lazy"
            />
          </div>
          <div class="event-card__content">
            <h3 class="event-card__title">{{ event.title }}</h3>
            <p class="event-card__meta">
              <i class="fa fa-calendar" aria-hidden="true"></i> {{ event.date }}
              <span class="event-card__separator">•</span>
              <i class="fa fa-map-marker" aria-hidden="true"></i> {{ event.location }}
            </p>
            <p class="event-card__description">{{ event.description }}</p>
            <div v-if="event.links" class="event-card__links" @click.stop>
              <a
                v-for="(link, linkIndex) in event.links"
                :key="linkIndex"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="event-card__link"
                @click.stop
              >
                <i :class="link.icon" aria-hidden="true"></i> {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2 class="section-title cta__title">Invite Me to Speak</h2>
      <p class="cta__text">
        Interested in having me speak at your event? I'd love to be part of it!
      </p>
      <a
        href="mailto:radames@roriz.dev"
        class="button"
      >
        <i class="fa fa-envelope" aria-hidden="true"></i>
        Contact Me
      </a>
    </section>
  </div>
</template>

<script setup>
import tropical_on_rails from 'assets/events/2025-04-04_tropical_on_rails.optimized.webp'
import tropical_ruby from 'assets/events/2024-04-04_tropical.rb.optimized.webp'
import agro1 from 'assets/events/2025-05-04_agro1.optimized.webp'
import guruSP from 'assets/events/2025-09-03_guru-sp.optimized.webp'
import rubySummit from 'assets/events/2020-12-04_ruby_summit.optimized.webp'

const navigateToEvent = (event) => {
  const videoLink = event.links?.find(link => link.icon.includes('play-circle'));
  if (videoLink?.url) {
    window.open(videoLink.url, '_blank', 'noopener,noreferrer');
  }
}

const events = [
  {
    title: 'Guru-SP 71º',
    date: 'September 03, 2025',
    location: 'São Paulo, Brazil',
    description: 'Presented on "The secret for consistent AI feature: ActiveGenie" to an audience of 40+ developers.',
    coverImage: guruSP,
    links: [
      { text: 'Slides', url: 'https://speakerdeck.com/roriz/the-secret-to-consistent-genai-activegenie-bc800f7d-4477-4690-8f4f-a9f549a04843', icon: 'fa fa-file-powerpoint' },
      { text: 'Video', url: 'https://www.youtube.com/watch?v=qDuwcGm9C6w', icon: 'fa fa-play-circle' }
    ],
  },
  {
    title: 'Techxperience',
    date: 'June 04, 2025',
    location: 'Rio Grande do Sul, Brazil',
    description: 'Presented on "GenAI hype is real, but mainly for small and clearly defined problems" to an audience of 50+ developers.',
    coverImage: agro1,
  },
  {
    title: 'Tropical on Rails',
    date: 'April 04, 2025',
    location: 'São Paulo, Brazil',
    description: 'Presented on "GenAI has already changed software development" to an audience of 700+ developers.',
    coverImage: tropical_on_rails,
    links: [
      { text: 'Slides', url: 'https://speakerdeck.com/roriz/ai-has-already-changed-software-development', icon: 'fa fa-file-powerpoint' },
      { text: 'Video', url: 'https://www.youtube.com/watch?v=Szyjq-vktXE', icon: 'fa fa-play-circle' }
    ]
  },
  {
    title: 'Tropical.rb',
    date: 'April 05, 2024',
    location: 'São Paulo, Brazil',
    description: 'Presented on "We need less layers, not more" to an audience of 400+ developers.',
    coverImage: tropical_ruby,
    links: [
      { text: 'Slides', url: 'https://speakerdeck.com/roriz/we-need-less-layers-not-more', icon: 'fa fa-file-powerpoint' },
      { text: 'Video', url: 'https://www.youtube.com/watch?v=GdtPEm_Yia4', icon: 'fa fa-play-circle' }
    ]
  },
  {
    title: 'Ruby summit Brasil',
    date: 'December 04, 2020',
    location: 'Online',
    description: 'Presented on "Scaling the development environment with CLI in Ruby" to an audience of 1400+ developers.',
    coverImage: rubySummit,
    links: [
      { text: 'Slides', url: 'https://speakerdeck.com/roriz/escalando-o-ambiente-de-desenvolvimento-com-cli-em-ruby', icon: 'fa fa-file-powerpoint' },
      { text: 'Video', url: 'https://www.youtube.com/watch?v=59SLTusbIhI', icon: 'fa fa-play-circle' }
    ]
  }
]

useHead({
  title: 'Events & Conferences',
  meta: [
    {
      name: 'description',
      content: 'Collection of events and conferences where I\'ve had the privilege to speak about technology and software development.'
    }
  ]
})
</script>

<style scoped>
.page-speaker {
  padding: calc(var(--spacing) * 2);
  background-color: var(--bg-secondary);
  max-width: 800px;
  margin: auto;
}

.section-title {
  text-align: center;
  color: var(--tx-primary);
  margin-bottom: calc(var(--spacing) * 2);
}

.hero {
  text-align: center;
  padding: calc(var(--spacing) * 3.75) 0 0 0;
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
  margin-bottom: calc(var(--spacing) * 1.25);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero__description {
  font-size: 1.125rem;
  color: var(--tx-secondary);
  max-width: 700px;
  margin: 0 auto calc(var(--spacing) * 1.25);
  line-height: 1.6;
}

.events {
  margin: calc(var(--spacing) * 3.75) 0;
}

.events__grid {
  display: grid;
  gap: calc(var(--spacing) * 2);
  margin-top: calc(var(--spacing) * 2);
}

.event-card {
  background: var(--bg-primary);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.event-card__image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.event-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card:hover .event-card__image {
  transform: scale(1.05);
}

.event-card__content {
  padding: calc(var(--spacing) * 1.5);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.event-card__title {
  font-size: 1.375rem;
  color: var(--tx-primary);
  margin-bottom: calc(var(--spacing) * 0.5);
}

.event-card__meta {
  color: var(--tx-tertiary);
  margin-bottom: calc(var(--spacing) * 1);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.5);
}

.event-card__separator {
  margin: 0 calc(var(--spacing) * 0.5);
  color: var(--tx-tertiary);
}

.event-card__description {
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.25);
  line-height: 1.6;
}

.event-card__links {
  display: flex;
  gap: calc(var(--spacing) * 1.5);
  margin-top: calc(var(--spacing) * 1.5);
  padding-top: calc(var(--spacing) * 1.25);
  border-top: 1px solid var(--border-color);
}

.event-card__link {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacing) * 0.5);
  color: var(--tx-link);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.event-card__link:hover {
  color: var(--tx-link-hover);
  text-decoration: underline;
}

.cta {
  background-color: var(--bg-secondary);
  padding: calc(var(--spacing) * 2.5);
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: calc(var(--spacing) * 3.75) 0;
  text-align: center;
  border: 1px solid var(--border-color);
}

.cta__title {
  margin-bottom: calc(var(--spacing) * 1.25);
}

.cta__text {
  font-size: 1.125rem;
  color: var(--tx-secondary);
  margin-bottom: calc(var(--spacing) * 1.5);
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.button {
  background-color: var(--bg-accent);
  color: var(--tx-primary);
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1.125rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: var(--bg-accent-hover);
  transform: translateY(-1px);
}

.button i {
  font-size: 1.25em;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-speaker {
    padding: var(--spacing);
  }

  .hero {
    padding: calc(var(--spacing) * 2) 0;
  }

  .hero__title {
    font-size: 1.875rem;
  }

  .hero__tagline {
    font-size: 1.125rem;
  }

  .event-card {
    padding: 0;
  }

  .event-card__title {
    font-size: 1.25rem;
  }

  .event-card__meta {
    flex-wrap: wrap;
  }

  .event-card__links {
    flex-direction: column;
    gap: calc(var(--spacing) * 0.75);
  }

  .event-card__content {
    padding: var(--spacing);
  }
}
</style>
