<template>
  <div v-if="isPreview" class="post-preview">
    <img src="assets/posts/scaling_genAI_by_engineer_vision_02.optimized.webp" alt="A realistic, iterative view of GenAI development" />
    <span>{{ post.title }}</span>
  </div>
  <section v-else class="post">
    <div class="tldr">
      <p><strong>Scaling Generative AI (GenAI)</strong> features presents unique challenges. While creating an initial proof-of-concept might seem straightforward, managing the inherent <strong>complexity</strong> of a growing GenAI feature in production is significantly harder. Once live, applications inevitably encounter <strong>edge cases</strong>, <strong>performance bottlenecks</strong>, and <strong>unexpected costs</strong>. Estimating these factors pre-launch is difficult; predicting how a feature might degrade after several iterations is even more challenging.</p>

      <p>This necessitates continuous, close <strong>monitoring</strong> of GenAI features post-deployment. This article explores techniques to build and maintain <strong>confidence</strong> in evolving GenAI applications amidst this complexity. We'll draw upon principles from <strong>DevOps</strong>, software engineering, product management, and <strong>science</strong>, layering practices that ensure present <strong>stability</strong> and prepare for future advancements.</p>
    </div>

    <h2>The Challenge of Scaling GenAI</h2>

    <p>Currently, there isn't a universally accepted roadmap for building production-grade GenAI features. While pioneering companies are emerging, their specific methodologies often remain proprietary. <strong>OpenAI</strong> offers guidance on optimizing LLM accuracy, suggesting a progression from prompting to Retrieval-Augmented Generation (RAG), fine-tuning, and potentially combining these methods.</p>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_01.optimized.webp" alt="OpenAI's suggested path: Prompting -> RAG -> Finetuning" />

    <p><em>OpenAI's suggested path: Prompting -> RAG -> Finetuning</em></p>

    <p>However, practical experience reveals pitfalls. Teams can get lost in endless prompt engineering debates, struggle with choosing the right model, or face unexplained performance degradation even without new deployments. The linear path suggested by OpenAI often feels more complex in <strong>reality</strong>, perhaps better represented as an iterative, sometimes chaotic, cycle:</p>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_02.optimized.webp" alt="A more realistic, iterative view of GenAI development" />

    <p><em>A more realistic, iterative view of GenAI development</em></p>

    <p>A significant hurdle is establishing a reliable foundation, particularly in prompt construction. Without this <strong>solid base</strong>, scaling attempts falter, and subsequent additions can trigger cascading failures due to the system's inherent fragility. While simple use cases are easy to build initially, frustration often mounts as features evolve.</p>

    <p>Therefore, the core focus when scaling AI must be <strong>tracking improvements and regressions rigorously</strong>. This seems simple, but requires monitoring from multiple angles. There's no single silver bullet; instead, we rely on a combination of processes, each testing different aspects, collectively generating the confidence needed to move forward.</p>

    <h2>Techniques for Sustainable Growth</h2>

    <h2>1. Observability</h2>

    <p>Fundamental to managing any production system, observability is crucial for GenAI features. At a minimum, track these key metrics:</p>

    <ul>
      <li><strong>Usage Rate (e.g., <i>uses_per_minute</i>):</strong> Detect anomalies like sudden traffic spikes (potential DDoS) or drops (feature outage or declining usage).</li>
      <li><strong>Failure/Retry Rate (e.g., <i>retry_count</i>, <i>fail_count</i>):</strong> Monitor the frequency of errors. Exceeding a defined threshold should trigger downtime or degradation alerts.</li>
      <li><strong>Token Consumption (e.g., <i>tokens_used</i>):</strong> Track usage to monitor costs. Set alerts if <i>tokens_used * price_per_token</i> exceeds budget thresholds.</li>
    </ul>

    <p>These metrics can be captured through various means:</p>

    <ul>
      <li><strong>Logs:</strong> Ideal for <i>uses_per_minute</i>, as many logging platforms (e.g., Coralogix) offer built-in anomaly detection.</li>
      <li><strong>Bug Tracking Providers:</strong> Suitable for <i>retry_count</i>/<i>fail_count</i>, allowing configured alerts (e.g., on 1st, 10th, 100th occurrence) with associated stack traces and payloads.</li>
      <li><strong>Databases:</strong> Useful for <i>tokens_used</i>, facilitating dashboard integration and cost analysis sharing.</li>
    </ul>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_03.optimized.webp" alt="Example observability dashboard showing key metrics" />

    <p><em>Example observability dashboard showing key metrics</em></p>

    <p>While these operational metrics confirm the feature is running and within budget, they don't guarantee it's delivering the <strong>intended value</strong>.</p>

    <h2>2. Success Metrics</h2>

    <p>The more directly your <strong>success metric</strong> relates to the GenAI's function, the better. If a direct metric is elusive, use a combination of indirect metrics that collectively build confidence. For example, if an AI feature assists users in filling out forms, success could be measured by a decrease in average form completion time *and* an increase in form submission conversion rates.</p>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_04.optimized.webp" alt="Example A/B test comparing metrics with and without the AI feature" />

    <p><em>Example A/B test comparing metrics with and without the AI feature</em></p>

    <p>Standard methodologies like <strong>A/B testing</strong>, canary releases, gradual <strong>rollouts</strong>, or qualitative user interviews can be employed to evaluate these success metrics.</p>

    <p>If the AI operates in a domain where historical data exists (e.g., reviewing past actions, performing analyses), powerful evaluation techniques become possible. One could simulate the AI's task on <strong>historical inputs</strong> and compare its output ("blind" prediction) against the actual recorded outcome.</p>

    <p>Regardless of the method, <strong>ensure you have at least one clear success metric</strong>, tied as directly as possible to the AI's purpose.</p>

    <p>There is not news in both topics, thats exactly I keep it short, but we can thinking in the future without even the basics like theses topics. These first two steps ensure the feature is running and providing business value. But how do we <strong>maintain confidence</strong> when refactoring prompts, changing models, or modifying surrounding code *before* risking a production deployment?</p>

    <h2>3. Benchmarking: Ensuring Consistent Behavior</h2>

    <p>The GenAI landscape evolves rapidly. Changing the underlying LLM version or provider is often necessary to stay competitive or leverage new capabilities. However, simply <strong>swapping models</strong> isn't safe; even upgrading from a cheaper to a more expensive model can sometimes lead to <strong>worse performance</strong> on specific tasks.</p>

    <p>No single model excels universally; each reflects its training data and post-training alignment. Therefore, <strong>benchmarking is essential</strong> to verify that critical behaviors remain consistent across different models or prompt versions.</p>

    <p>Numerous public benchmarks exist (e.g., HELM, MT-Bench), and specialized platforms like Arena Intelligence Inc. (LMArena) are emerging. Public benchmarks are valuable but have a key limitation: they likely don't cover your specific use case, data nuances, or proprietary know-how.</p>

    <p>If your GenAI feature provides a competitive advantage, relying solely on public benchmarks is insufficient. You need to <strong>create your own benchmark suite</strong>. Fortunately, if you've implemented success metrics and logging (steps 1 & 2), this becomes much easier.</p>

    <p>For engineers, a benchmark is essentially an <strong>integration test</strong>: given specific inputs, expect specific outputs or behaviors. Gather diverse examples from your production logs, particularly those flagged with your success metric, and codify them into automated tests.</p>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_05.optimized.webp" alt="Conceptual representation of benchmark tests with input/output pairs" />

    <p><em>Conceptual representation of benchmark tests with input/output pairs</em></p>

    <p>However, there's a catch: LLMs are often <strong>non-deterministic</strong>. The same input can yield different responses. How can we build reliable tests around this inherent variability?</p>

    <h2>4. Ensuring Consistent</h2>

    <p>LLMs naturally exhibit variability and can "hallucinate". Trying to eliminate this entirely fundamentally changes the nature of the technology. Instead, we must embrace this dynamism and develop techniques to manage the associated uncertainty. Drawing inspiration from scientific validation methods can help build confidence:</p>

    <h4>4.1 Replication</h4>

    <p><em>Scientific Principle: Repeating experiments under identical conditions multiple times.</em></p>

    <p><strong>Application:</strong> Run each benchmark test case multiple times (e.g., 5-10 times). Adopt a pessimistic stance: if the test fails even once, consider the overall test run a failure for that specific input.</p>

    <p>- <strong>Tip:</strong> Avoid running identical requests consecutively. LLM providers might return cached responses while still charging for computation. Introduce randomization or delays (e.g., 30 seconds) between identical requests.</p>

    <h4>4.2 External Replication</h4>

    <p><em>Scientific Principle: Independent labs reproducing the same work.</em></p>

    <p><strong>Application:</strong> Leverage the abundance of LLM providers. Since different models (even those with similar capabilities) are trained differently, they act as somewhat independent "labs." Send the same input to multiple providers or models. Here, an optimistic view can be useful: if *at least one* provider produces the desired successful outcome for a specific test case, it indicates that the task is achievable, potentially identifying the best model for that case. The test for that input could pass if any provider succeeds.</p>

    <h4>4.3 Controlled Variation</h4>

    <p><em>Scientific Principle: Testing the same hypothesis across different, slightly modified scenarios.</em></p>

    <p><strong>Application:</strong> Remember that LLMs operate on tokens. Minor changes to input text can drastically alter output. Research (like Apple's 2023 paper on LLM robustness) shows that simple modifications like using synonyms or rephrasing questions (e.g., passive voice) can significantly impact performance on standardized tests.</p>

    <p><em>Illustration showing how small input changes affect LLM outputs</em></p>

    <p>This sensitivity poses a production challenge. Mitigate it by applying controlled variations to your benchmark tests. Take existing test inputs and automatically generate variations: change the tone, rephrase sentences, substitute synonyms, while preserving the core meaning.</p>

    <p>- <strong>Caution:</strong> This can exponentially increase test volume and cost. Apply this technique judiciously, perhaps focusing on core feature tests and running them less frequently (e.g., only for major releases) primarily to detect regressions in robustness.</p>

    <h4>4.4 Statistical Validation</h4>

    <p>Once you have a sufficiently large and diverse set of test results (from replication, external replication, and controlled variation), you can apply statistical methods. Calculate aggregate success rates, confidence intervals, p-values, or Bayesian credible intervals to quantify the confidence level in a new model version or prompt strategy compared to the baseline.</p>

    <h2>Resilience Techniques: Handling Failures Gracefully</h2>

    <h2>1. Preparing for Critical Errors</h2>

    <p>LLM providers and even self-hosted models can face stability and scaling challenges. Predicting load and ensuring consistent performance is difficult. Therefore, applications integrating LLMs must be resilient to transient issues like provider downtime or intermittent response failures. Implement standard distributed system resilience patterns:</p>

    <ul>
      <li><strong>Retries:</strong> Automatically retry failed requests (with exponential backoff and jitter).</li>
      <li><strong>Timeouts:</strong> Set reasonable timeouts for API calls to prevent indefinite hangs.</li>
      <li><strong>Asynchronous Processing:</strong> Use background jobs or queues for non-critical LLM tasks to avoid blocking user requests.</li>
      <li><strong>Rate Limiting:</strong> Implement client-side rate limiting to avoid exceeding provider quotas and handle <code>429 Too Many Requests</code> errors gracefully.</li>
      <li><strong>Trackable Requests:</strong> Assign unique IDs to each request for easier debugging and tracing across systems.</li>
    </ul>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_07.optimized.webp" alt="Print of error 500" />

    <p><em>Print of error 500</em></p>

    <h2>2. Guardrails: Preventing Undesirable Behavior</h2>

    <p>LLMs excel in tasks requiring nuanced understanding or subjective judgment, often replacing tasks previously needing human intervention. However, LLMs can be susceptible to manipulation ("prompt injection") or exhibit biases. Engineers must implement guardrails to mitigate these risks.</p>

    <h4>2.1 Prompt Injection</h4>

    <p>Prompt injection, where malicious user input alters the LLM's intended behavior, is a real threat. Since LLM inputs are often derived from user-generated text, this vulnerability is inherent. Defense strategies include:</p>

    <ul>
      <li><strong>Input Size Limits:</strong> Restrict the length of user-provided input to reduce the surface area for injection attacks.</li>
      <li><strong>Keyword/Phrase Filtering:</strong> Block known malicious patterns or keywords.</li>
      <li><strong>NLP-Based Detection:</strong> Use pre-trained Natural Language Processing models to identify suspicious input patterns (e.g., instructions hidden within text).</li>
      <li><strong>Using an LLM to Protect an LLM:</strong> Employ a separate, simpler LLM call specifically designed to sanitize or analyze user input for potential threats before passing it to the main task LLM.</li>
    </ul>

    <h4>2.2 Output Validation and Control</h4>

    <p>Don't blindly trust LLM outputs. Implement checks and constraints:</p>

    <ul>
      <li><strong>Templating:</strong> Instead of asking the LLM to generate fully formed text containing sensitive data, ask it to return a template string with placeholders (e.g., `"Hi #{user_name}, your order #{order_number} is confirmed."`). Then, populate the template with verified data from your system. This can also mitigate biases (e.g., tone variations based on inferred gender from names).</li>
      <li><strong>Business Logic Validation:</strong> Apply domain-specific rules to the LLM's output. If extracting a salary from a job description, validate that the extracted value is within an expected range, non-negative, not null, etc.</li>
    </ul>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_08.optimized.webp" alt="image.png" />

    <h2>3. Chaos Monkey for LLMs</h2>

    <p>Inspired by Netflix's Chaos Monkey for infrastructure, intentionally inject failures into your LLM integration during testing. Simulate scenarios like:</p>

    <ul>
      <li>Artificially low rate limits.</li>
      <li>Intermittent API errors (5xx responses).</li>
      <li>High latency responses.</li>
      <li>Injecting known prompt injection patterns into simulated user inputs.</li>
    </ul>

    <p>This proactively tests the effectiveness of your retry mechanisms, timeouts, guardrails, and overall system resilience under adverse conditions.</p>

    <h2>Preparing for the Future</h2>

    <h2>1. Fine-tuning Preparedness</h2>

    <p>Fine-tuning may become necessary as your feature matures, typically to achieve a minimal acceptable success rate unattainable with general models or to significantly boost performance on a highly specific, critical task. If you're unsure whether you need fine-tuning, you probably don't yet.</p>

    <p>Preparing for potential fine-tuning is straightforward: <strong>log relevant data diligently</strong>. Store the inputs provided to the LLM, the outputs received, and the corresponding success flag (determined by your success metrics). An example structure (used in ActiveGenie) might look like this:</p>

    <img src="assets/posts/scaling_genAI_by_engineer_vision_09.optimized.webp" alt="image.png" />

    <p><em>Example data structure logging input, output, and success status</em></p>

    <p>Choose a consistent structure that makes sense for your application. The key is capturing the context (input), the result (output), and the evaluation (success/failure).</p>

    <h2>2. Local Development Environment</h2>

    <p>Ensure new developers and teams can easily maintain and contribute to the feature. A heavy reliance on live LLM APIs for local development isn't scalable or cost-effective. Use the logged <strong>historical input/output pairs</strong> to create realistic mocks or stubs for local testing, enabling meaningful development cycles without constant external dependencies.</p>

    <h2>3. Provider Decoupling</h2>

    <p>The AI provider landscape changes weekly. A competitor might release a breakthrough model, or your current provider could change pricing or terms. Build your application to be resilient to these shifts. Use abstraction layers, like open-source tools (e.g., <strong>LiteLLM</strong>) that provide a unified interface across multiple providers, or build your own internal adapter layer. This allows switching providers with minimal code changes.</p>

    <h2>Conclusion</h2>

    <p>Building and scaling <strong>GenAI features is complex</strong>, especially in these early days without established best practices and mature tooling. The techniques outlined here: observability, success metrics, benchmarking, rigorous validation, resilience patterns, and future-proofing, provide a layered approach to managing this complexity.</p>

    <p>This layered strategy is the philosophy behind <a href="https://github.com/Roriz/active_genie">ActiveGenie</a>, an open-source project I'm building to streamline LLM integration, aiming to be like a "lodash for LLMs" by providing reusable components for these common challenges, allowing teams to focus more on business value. Exploring projects like <a href="https://github.com/Roriz/active_genie">ActiveGenie</a> can offer practical insights into implementing these concepts.</p>

    <img src="assets/posts/active_genie.optimized.webp" alt="ActiveGenie, the lodash for LLMs" />
    <p><em>ActiveGenie, the lodash for LLMs</em></p>

    <p>Ultimately, when releasing new versions of GenAI features, we may never achieve the deterministic precision of traditional code coverage metrics. However, by systematically applying these techniques, we can generate a quantifiable <strong>confidence value</strong> an assessment of whether a new release is likely better, worse, or inconclusive compared to the previous one. This iterative improvement, is a powerful approach for navigating the evolving world of Generative AI.</p>

    <p><strong><em>We should focus on being "less wrong" each day rather than striving for an elusive "perfectly right".</em></strong></p>
  </section>
</template>

<script setup>
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
    title: 'Scaling GenAI by Engineer vision',
    meta: [
      {
        name: 'description',
        content: `Scaling Generative AI (GenAI) features presents unique challenges. While creating an initial proof-of-concept might seem straightforward, managing the inherent complexity of a growing GenAI feature in production is significantly harder. Once live, applications inevitably encounter edge cases, performance bottlenecks, and unexpected costs. Estimating these factors pre-launch is difficult; predicting how a feature might degrade after several iterations is even more challenging.\nThis necessitates continuous, close monitoring of GenAI features post-deployment. This article explores techniques to build and maintain confidence in evolving GenAI applications amidst this complexity. We'll draw upon principles from DevOps, software engineering, product management, and science, layering practices that ensure present stability and prepare for future advancements.`
      },
      { name: 'keywords', content: 'Scaling, GenAI, devops, science, engineering, AI, Blog, Radamés Roriz' },
      { name: 'author', content: 'Radamés Roriz' },
      { property: 'og:title', content: 'Scaling GenAI by Engineer vision' },
      { property: 'og:description', content: props.post.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: props.post.url },
      { property: 'og:image', content: props.post.cover },
    ]
  })
}
</script>
