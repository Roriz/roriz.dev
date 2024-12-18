<template>
  <section class="post">
    <div class="tldr">
      <p><strong>TLDR;</strong> market is overly focused on improving LLMs, like how many parameters they have, context size, or even achieving AGI. However, none of these advancements will define our future. The real transformation will come from the software surrounding the LLMs. This software will control, orchestrate, and apply the right business rules, driving meaningful change. Even if we achieve true AGI, its impact will likely be far less disruptive than the market anticipates.</p>
      <p>Join me in exploring the future and discovering how software can leverage these powerful new tools we call LLMs.</p>
    </div>
    
    <h2>LLM under the hood</h2>
    <p>The major players in the AI field have begun discussing <strong>AGI</strong> and even predicting when it might arrive. However, we don’t even have a clear <strong>definition</strong> of AGI. How can we aim for a goal that isn’t properly defined?</p>
    <p>Whatever AGI may be, I’m convinced LLMs will never create as humans using the current <strong>transformer architecture</strong>. It’s clear that AI doesn’t actually think, but it mimics writing, drawing, and even music. It’s just <strong>mimicry</strong>, but on a masterful level.</p>
    <p>These systems possess a <strong>mathematical superpower</strong>, something humanity never thought possible before. It’s fascinating to see creativity and personal style translated into complex mathematical formulas. These formulas have become so intricate that we struggle to trace backward and understand why specific outputs occur. However, difficulty doesn’t equal wizardry, the process remains <strong>deterministic</strong>, precise, and limited to the data it was trained on and context.</p>
    
    <h2>Generative AI is a Fancy Mimic, and is that ok</h2>
    <p>Of course, it started by imitating a writer’s style, musical compositions, and jokes. All of these seemed harmless, but they were just the initial versions. Rapidly, people began using AI to <strong>mimic</strong> physical training routines, nutritional plans, and travel itineraries that directly impact real lives. This mimicry hasn’t stopped there, and there’s no sign of it slowing down.</p>
    <p>For me, the significant milestone will be when LLMs start mimicking procedures and protocols, such as onboarding documents, sales pitches, help desk tickets, and incident protocols.</p>
    <p>Many companies have countless documents, both internal and external, for onboarding, client communication, task execution, and complaint procedures. This is exactly where AI excels mimicking <strong>processes</strong> at scale.</p>
    <p>Don’t get me wrong; I still believe AI will replace many jobs. We tend to overestimate the complexity of our work, but the reality is that many people simply execute processes and follow <strong>protocols</strong>. We need to learn how to create, measure, adapt, and migrate between protocols, these are the skills that allow us to outperform AI.</p>
    <p>Our role will be to build protocols and set the direction while AI executes, observes, and reports. We will connect knowledge, create businesses, and experiment with new ideas. We will achieve greater results, our work will have a larger impact, and we will need fewer people to accomplish the same outcomes. This process will keep building on itself, cutting down dependencies, clearing obstacles, and boosting <strong>productivity</strong> even more.</p>
    <p>All that productivity won’t come from AGI, there’s no wizardry in mimicry by LLM. It’s simply another tool, much like the printing press, which drastically enabled the scaling of writing. Since LLMs are digital tools, the best way to use and scale them is through <strong>software</strong>.</p>
  
    <h2>Why AGI is Not the Future We Think</h2>
    <p>There are <strong>limits</strong> to what an LLM can do, even with AGI. To achieve real-world impact and be more effective, LLM needs to operate within a <strong>business model</strong>. On its own, the LLM is just a number predictor that transforms these numbers into text, images, or audio. However, it can't connect directly to banks, calendars, or other services by itself.</p>
    <p>The model isn’t just the <code>.bin</code> or <code>.h5</code> file downloaded from Hugging Face. It’s part of a larger platform that includes features like moderation, guardrails, function calls, structured outputs, and reasoning. These capabilities depend on the supporting <strong>software</strong> built around the model.</p>
    <p>Even though LLMs can perform some external requests, <strong>we can’t rely</strong> on them alone. Function calls may suggest right actions, but even if they work flawlessly, they can’t handle all edge cases, failures, queues, rate limits, differing protocols, or unusual standards. These are just a few challenges tied to external requests.</p>
    <p>In terms of architecture, LLMs can’t directly interact with databases, manage event queues, manipulate files, or establish connections. They are unaware of anything other than themselves. To overcome these limitations and achieve <strong>real solutions</strong>, robust infrastructure and software are key to true integration.</p>
    <p>I can go on by a lot, but you get the idea. An LLM by itself is limited to its <strong>trained data</strong> and prompts. However, with engineering, it can achieve what was previously impossible or prohibitively expensive.</p>
    <img src="assets/posts/agi_is_not_that_important-1.optimized.jpg" alt="The Meeseeks: Blue humanoid creatures that exist solely to fulfill one task and then cease to exist. They are incredibly effective but often hilariously overwhelmed when given overly complex or existentially difficult tasks." />
    <p><em>image 1 - The Meeseeks: Blue humanoid creatures that exist solely to fulfill one task and then cease to exist. They are incredibly effective but often hilariously overwhelmed when given overly complex or existentially difficult tasks.</em></p>
    <p>The best use of AI is to mimic processes and human behavior, while the best use of software is to structure and create deterministic use cases. Neither replaces the other, but <strong>together</strong> they complement each other. When combined, they become powerful allies in solving complex problems.</p>
  
    <h2>The Role of Software in Scaling AI</h2>
    <p>We are just beginning to explore the potential of allying <strong>AI+Engineer</strong>. Right now, almost all solutions are closely tied to <strong>foundation models</strong>. While many companies are working on second-level solutions, including those that owns the foundation models, we have yet to see clear dominant players emerging in this space.</p>
    <p>As we go deeper into AI applications, the need for <strong>functionalities</strong>, consistency, integrations, and business rules becomes more evident. These are challenges that only <strong>software</strong> can fully address today.</p>
    <img src="assets/posts/agi_is_not_that_important-2.optimized.jpg" alt="Iceberg of potential AI fields, starting with 1. foundation models, 2. prompt wrappers, 3. intelligent software, and 4. autonomous software." />
    <p><em>Image 2: Iceberg of potential AI fields, starting with 1. foundation models, 2. prompt wrappers, 3. intelligent software, and 4. autonomous software.</em></p>
  </section>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

useHead({
  title: 'AGI is Not That Important',
  meta: [
    {
      name: 'description',
      content: `The market is overly focused on improving LLMs, like how many parameters they have, context size, or even achieving AGI. However, none of these advancements will define our future. The real transformation will come from the software surrounding the LLMs. This software will control, orchestrate, and apply the right business rules, driving meaningful change. Even if we achieve true AGI, its impact will likely be far less disruptive than the market anticipates.
      Join me in exploring the future and discovering how software can leverage these powerful new tools we call LLMs.`
    },
    { name: 'keywords', content: 'AGI, Artificial General Intelligence, Blog, Radamés Roriz' },
    { name: 'author', content: 'Radamés Roriz' },
    { property: 'og:title', content: 'AGI is Not That Important - Radamés Roriz' },
    { property: 'og:description', content: props.post.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: props.post.url },
    { property: 'og:image', content: props.post.cover },
  ]
})
</script>
