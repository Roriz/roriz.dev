<template>
  <div v-if="isPreview" class="post-preview">
    <img src="assets/posts/gen_ai_is_for_small_tasks-1.optimized.webp" alt="A realistic, iterative view of GenAI development" />
    <span>{{ post.title }}</span>
  </div>
  <section v-else class="post">
    <blockquote class="tldr">
      <p><strong>TLDR:</strong> Stop trying to build fully autonomous agents with GenAI. The current state of the technology excels at executing small, well-defined, and isolated tasks, not at handling the complexity of large, open-ended problems. The path to leveraging GenAI effectively is to think like a software builder: break down large challenges into a series of smaller, predictable functions that can be powered by a model. The real power isn't in a single, all-knowing AI, but in the software that orchestrates these small, intelligent steps.</p>
    </blockquote>

    <p>As software builders, we've learned a fundamental lesson over the decades: complexity is the enemy. We build robust systems creating right sizeservices breaking problems down into smaller, testable, and maintainable parts. Yet, in the rush to adopt Generative AI, we seem to be forgetting this principle. The hype around autonomous agents and AGI is pushing us toward building complex, unpredictable systems that are doomed to fail.</p>

    <NuxtLink to="/post/agi-is-not-that-important" class="back-link">
      Read more about why AGI is not that important
    </NuxtLink>

    <p>My argument is simple: the most effective way to use GenAI today is to stop thinking big and start thinking small, by focusing on the smallest, clearest tasks possible. We should treat LLMs not as autonomous thinkers, but as powerful tools for task execution, similar to a specialized tool or a highly capable junior assistant: brilliant at executing well-defined tasks but needing clear, precise instructions to avoid going off the rails.</p>
    <p>This isn't just a hunch; it's a conclusion supported by both practical experience and academic research. A recent paper from Apple researchers, <a href="https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf" target="_blank">"The Illusion of Thinking"</a> or the hardest benchmarks like <a href="https://epoch.ai/data/ai-benchmarking-dashboard" target="_blank">FrontierMath</a>, reinforces this idea perfectly. Looks like there is a limit of resolve complex and opened taks. This limitation is fundamental. Just as even a human genius cannot solve every problem monolithically, we shouldn't expect an LLM to do so. The only viable path forward is to split the problem, the model, or both.</p>
    <img src="assets/posts/gen_ai_is_for_small_tasks-1.optimized.webp" alt="Benchmarking FrontierMath">
    <p><em>Image 1: Benchmarking FrontierMath</em></p>

    <p>In software, we solve scaling complexity with design patterns, clear boundaries, and protocols. It's time to apply the same proven engineering principles to how we build with GenAI.</p>
    <NuxtLink to="/post/scaling_genAI_by_engineer_vision" class="back-link">
      Read more about scaling GenAI
    </NuxtLink>

    <h2>My Experience with Large, Unpredictable Systems</h2>
    <p>In any large system, it's impossible for one person to know everything. The codebase is too large or changes too fast for anyone to follow completely. This environment breathe 'weird' behaviors, making the system feel almost alive. We see rules broken despite strict checks, impossible data combinations appearing at scale, and bugs that only surface when tracing is disabled.</p>
    <p>Witnessing these behaviors is like seeing a ghost, you almost don't believe it until you see it firsthand. Now, imagine trying to debug that system: a black box that responds differently with each interaction, offers no stack trace, and, even worse, can generate and evaluate new code on the fly. That unpredictable, hard-to-debug environment is exactly what we are creating with today's large autonomous agents.</p>
    <p>The market is talking non-stop about agents and how quickly we can create them. But what works for a one-off automation will be catastrophic when embedded into a long-term, scalable system. Building a large platform isn't about the speed of the first deployment; it's about building a system that can evolve, function, and scale reliably for years.</p>

    <img src="assets/posts/gen_ai_is_for_small_tasks-2.optimized.webp" alt="Productivity curve by Martin Fowler">
    <p><em>Image 2: Productivity curve by Martin Fowler</em></p>

    <p>It's a core principle in software development that we manage complexity by splitting it into layers, using established patterns like Hexagonal Architecture or DDD. This creates the eternal trade-off for software engineers. Splitting a problem into components that are too granular skyrockets maintenance overhead. Or, letting complexity grow unchecked creates monolithic systems where problems are impossible to trace, inviting the 'weird' behavior we seek to avoid. Our job is to navigate the chaos between these two extremes.</p>

    <h2>What is the right size?</h2>
    <p>GenAI adds a dangerous new dimension to the software right-sizing debate. It's dangerously convenient to add 'just one more rule,' because a new rule is just a single sentence. This seemingly minor act is the primary cause of untestable prompt bloat. Unlike with code, we can't apply TDD to a prompt, nor can we define a finite set of edge cases for a QA team to validate. This lack of engineering guardrails makes it immensely harder to build a GenAI feature that is testable, maintainable, and efficient.</p>
    <p>But 'harder' doesn't mean impossible. It just means we need to be more disciplined. The ideal places for GenAI are tasks that are inherently fuzzy or qualitative, the exact kinds of problems that are difficult to handle with traditional logic:</p>

    <h3>Measure Product Compliance</h3>
    <p>To ensure quality at scale, online marketplaces often create a painful user experience: forcing sellers to fill out endless forms with dozens of specific attributes. This friction is a major pain point, especially when a product doesn't fit neatly into predefined categories, leading to high rates of seller abandonment.</p>
    <p>The core engineering challenge is that the sheer number of product variations makes it impossible to capture all necessary data in structured forms. This difficulty is a direct cause of seller churn and reduced platform inventory.</p>
    <p>What if we could write a set of rules and discover the product quality, security or any other metric based on product description?</p>

    <RorizCode>
require 'active_genie'

product_description = "Sony WH-1000XM5 Wireless Noise-Canceling Headphones - Black - Excellent Condition Experience industry-leading noise cancellation with the Sony WH-1000XM5, designed for crystal-clear audio and immersive sound. These headphones feature adaptive noise-canceling technology, 30-hour battery life, and ultra-soft ear cushions for all-day comfort. This pair is in excellent condition, with minimal signs of wear and fully functional buttons, Bluetooth connectivity, and touch controls. Includes the original carrying case, charging cable, and 3.5mm audio cable for wired listening. Ships securely via USPS Priority Mail with tracking, and returns are accepted within 30 days if the item is not as described. A perfect choice for travelers, commuters, or audiophiles seeking premium sound quality, feel free to ask any questions before purchasing!"
marketplace_rules = &lt;&lt;~RULES
1. Details: Include brand, model, size, color, and key features.
2. Condition: Honestly state if new/used and note any defects.
3. Functionality: Confirm it works perfectly.
4. Accessories: Mention all included items (cables, manuals, etc.).
5. Logistics: Specify shipping method and return policy.
6. Tone: Be clear, professional, and engaging.
RULES

result = ActiveGenie::Scoring.call(product_description, marketplace_rules)
puts result  # { score: 73, reasoning: "item description clearly provides all necessary information: brand, model, color, key features, condition, functionality, accessories, shipping, and return policy. The language is professional and engaging, making the description buyer-friendly. Minor improvements could include more explicit sizing or warranty details but these are not critical omissions. The description is solid, trustworthy, and effective, warranting a high score in the good to great range." }
    </RorizCode>

    <h3>Recommending the Best Plan for a Lead</h3>
    <p>Choosing the right sales plan can drastically impact a lead's journey. Offer a plan that's too complex, and you risk scaring them off. Offer one that's too simple, and you might undersell your product's value. From a systems perspective, there often isn't enough structured data at the point of contact to make a perfect, deterministic choice.</p>
    <p>Instead, we can define a set of rules and priorities, allowing the AI to balance the options and make a recommendation.</p>

    <RorizCode>
require 'active_genie'

first_plan = "name: Team Starter Plan, price_per_user_per_month: 15, target_audience: Small teams (2-10 users) or startups, core_features: [Unlimited projects and tasks, Basic task management (assignees, due dates, statuses), File sharing (up to 2GB per user), Team collaboration (comments, @mentions), Standard support (email-based), Mobile app access (iOS & Android)], limitations: [Maximum 10 users, No advanced reporting or analytics, No time tracking features, No custom branding, Limited integrations (e.g., only basic Slack and Google Calendar)]"
second_plan = "name: Business Growth Plan, price_per_user_per_month: 30, target_audience: Growing SMBs or established departments (10-50 users), core_features: [All features from Team Starter Plan, Advanced task management (dependencies, custom fields, Gantt charts), Time tracking and timesheets, Advanced reporting and analytics dashboard, File sharing (up to 10GB per user), Priority support (dedicated account manager, phone support), Custom branding options, Workflow automation (e.g., rule-based task creation), Expanded integrations (e.g., Salesforce, Jira, Zapier)], limitations: [Maximum 50 users (custom enterprise plans available beyond this), Some highly specialized features (e.g., resource management, budgeting) might be part of higher tiers]"
criteria = "Determine the most suitable plan to offer the lead. Sales priority: prioritize offering the Gold Plan to any company classified as an SMB; Client: Innovatech Solutions is a rapidly growing digital marketing agency currently with 8 full-time employees. They specialize in SEO, content marketing, and social media campaigns for small to medium-sized businesses. Over the past year, their client base has doubled, and they are struggling to manage the increasing number of projects and deliverables effectively. They project hiring at least 5-7 more people in the next 12-18 months; Meeting transcript: {last_meet_transcription}"

ActiveGenie::Battle.call(first_plan, second_plan, criteria)
puts result  # {"winner"=&gt;"Business Growth Plan", "reasoning"=&gt; "While Team Starter is currently suitable and cost-effective for Innovatech's present size, the anticipated growth to 13-15 employees soon will surpass its 10-user maximum. Business Growth Plan offers scalability, advanced features, and support essential for managing increasing complexity and workforce. Prioritizing scalability and future readiness aligns with the sales priority towards the Gold Plan for SMBs. Hence, Business Growth Plan better fits Innovatech's growth trajectory and needs."}
    </RorizCode>
    <p>These examples show that the most reliable place for GenAI isn't in replacing an entire system, but in solving one specific task with clear inputs and predictable, structured outputs. This is the core principle: treat GenAI as a powerful, specialized component, not an oracle. The ideal task lives inside a larger system, triggered by software, and feeding its results back into an automated workflow. This disciplined integration of GenAI with classic software engineering is the real gold mine of opportunity.</p>

    <h2>AI + Engineering</h2>
    <p>Historically, software engineers hit a wall when dealing with incomplete data, measuring the quality of user-generated content, or making subjective decisions for users. When a programmatic solution was unavailable or too expensive to build, the system would default to a human-in-the-loop to keep the process moving.</p>
    <img src="assets/posts/gen_ai_is_for_small_tasks-3.optimized.webp" alt="Usual system diagram">
    <p><em>Image 3: Usual system diagram</em></p>

    <p>With a list of expectations, clear input and output, GenAI could potentially replace the human in the loop partially or even totally in that specific task. This could involve creating summaries, simulating another department's perspective, debating ideas, or ranking content based on nuanced criteria. The goal isn't to build a massive agent that replaces an entire recruiting or legal department, but to use GenAI to resolve or assist with a very specific, isolated task within their workflow.</p>
    <p>These new capabilities are powerful. While automating tasks that feed into a human workflow is valuable, the real gold mine is system-to-system integration. True value is unlocked when one AI-powered component can feed structured, reliable output directly into the next automated process, creating a chain of value. The complex, emergent value that arises from chaining these small, intelligent tasks is where the next wave of innovation lies.</p>

    <img src="assets/posts/active_genie.optimized.webp" alt="ActiveGenie, the lodash for LLMs" />
    <p><em>ActiveGenie, the lodash for LLMs</em></p>
    <p>ActiveGenie is a project I'm building to streamline LLM integration, aiming to be like a "lodash for LLMs" by providing reusable components for these common challenges, allowing teams to focus more on business value. Exploring projects like <a href="https://github.com/Roriz/active_genie">ActiveGenie</a> can offer practical insights into implementing these concepts.</p>
  </section>
</template>

<script setup>
import RorizCode from '@/components/roriz_code.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  isPreview: {
    type: Boolean,
    default: false
  }
})

if (!props.isPreview) {
  useHead({
    title: 'GenAI is for small tasks, not fully autonomous systems',
    meta: [
      {
        name: 'description',
        content: `Stop trying to build fully autonomous agents with GenAI. The current state of the technology excels at executing small, well-defined, and isolated tasks, not at handling the complexity of large, open-ended problems. The path to leveraging GenAI effectively is to think like a software builder: break down large challenges into a series of smaller, predictable functions that can be powered by a model. The real power isn't in a single, all-knowing AI, but in the software that orchestrates these small, intelligent steps.`
      },
      { name: 'keywords', content: 'Agent, autonomous, autonomous agent, autonomous system, GenAI, AI, Blog, Radamés Roriz' },
      { name: 'author', content: 'Radamés Roriz' },
      { property: 'og:title', content: 'GenAI is for small tasks, not fully autonomous systems' },
      { property: 'og:description', content: props.post.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: props.post.url },
      { property: 'og:image', content: props.post.cover },
    ]
  })
}
</script>
