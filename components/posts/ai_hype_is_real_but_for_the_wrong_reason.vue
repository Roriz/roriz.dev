<template>
  <div class="post">
    <header>
      <p><strong>TLDR;</strong> AI is not intelligent, <strong>doesn't think</strong>, it doesn't understand, and it's not about to become some super-intelligent being. GenAI can <strong>transform chaos into well-defined data</strong>, and that is huge! With multimodal LLMs, <strong>anything can become input</strong> to a system that previously only accepted specific and limited data types. It's not as fancy as the talk about a super-intelligent being, but it will change everything. <strong>Welcome to the structured data revolution</strong>.</p>
    </header>
    <hr>
    <section>
      <h2>The Origins of Structure</h2>
      <p>Our world is <strong>pure chaos</strong>. It's an endless flow of unstructured data from everywhere: conversations, sights, experiences. The history of technological revolutions is the story of imposing structure on this chaos. Take the Industrial Revolution: it turned freeform manual labor into <strong>defined processes</strong>. People went from crafting entire products to pulling a lever or assembling a single part repeatedly.</p>
      <img src="assets/posts/ai_hype_is_real_but_for_the_wrong_reason_1.optimized.webp" alt="Illustration of structured processes" width="300">
      <p>The Internet did it once again. It took the messy, organic way humans interact and turned it into <strong>structured units</strong>: likes, comments, tweets. It reshaped human communication, reducing complex social exchanges into metrics and predefined actions. The beauty and utility of this transformation lie in its simplicity, even as it sacrifices nuance. By framing interactions in a structured, predictable format, the Internet made them <strong>programmable and scalable</strong>.</p>
      <img src="assets/posts/ai_hype_is_real_but_for_the_wrong_reason_2.optimized.webp" alt="Example of structured interactions online">
    </section>
    <hr>
    <section>
      <h2>The Software Paradigm</h2>
      <p>Building <strong>modern software</strong> is the same idea: take the complexity of the real world and hammer it into rigid, specific use cases.</p>
      <p>It’s not just about coding; it’s about abstraction. Every feature in an app or system represents a decision to carve out one sliver of reality and freeze it into logic. Behind every “save” button, there’s a set of <strong>assumptions</strong> about workflows, data types, and user behavior. The challenge of modern software development is deciding <strong>which parts of reality</strong> to model and which to ignore. This deliberate reduction is what makes systems useful.</p>
      <img src="assets/posts/ai_hype_is_real_but_for_the_wrong_reason_3.optimized.jpg" alt="random example of use case diagram" width="300">
      <p>But this approach has its limits. Real-world <strong>complexity</strong> often resists such reduction. Think of edge cases, inconsistencies, or unforeseen scenarios, things that don’t neatly fit into predefined boxes. This is where AI steps in, not to replace structured software but to extend its reach. AI can handle the <strong>ambiguous, the unstructured</strong>, and the irregular, the parts of reality traditional software couldn’t tame.</p>
    </section>
    <hr>
    <section>
      <h2>The Structured Data Revolution</h2>
      <p>The revolution AI is bringing isn’t about replacing these well-known processes. It’s about expanding them. AI <strong>transforms unstructured</strong> content into structured data and, crucially, back again. This isn’t a substitute for the way we’ve built technology; it’s the next layer. It’s about reaching places <strong>technology</strong> couldn’t touch before.</p>
      <p>I’m incredibly <strong>optimistic</strong> about the future because this breaks down the barrier between “online” and “offline.” For decades, we’ve spent billions trying to drag businesses and people into the <strong>digital world</strong>. Now, we don’t have to; AI can bridge that gap for us.</p>
      <p>The power to connect anything into the system is too powerful. That enables or scales a lot more possible business cases.</p>
    </section>
    <hr>
    <section>
      <h2>New Power</h2>
      <p>Let's try thinking about a couple of problems that before were <strong>impossible to scale</strong> or measure. Focusing on cases where we only need a human to understand the context, but now we can have a clue or at least prioritize before the human checks.</p>
      <ol>
        <li>
          <p>Do you want to measure the <strong>call metrics</strong>? With the meeting transcription, you can extract the key metrics that are important for your company.</p>
          <pre><code class="lang-rb">transcript = <<~TRANSCRIPT
salesperson: Hi there! ...
lead: Hello, my name is ...
salesperson: Nice to meet you, ...
...
TRANSCRIPT
puts ActiveAI::DataExtractor.call(
  transcript,
  {
    salesperson_demonstrates_active_listening: {
      type: 'Integer',
      description: 'The salesperson demonstrates active listening? The salesperson demonstrates ...',
      max: 10,
      min: 1
    },
    next_clear_step: {
      type: 'String',
      description: 'What are the next clear steps? Example: sign up for a free trial, schedule a demo, etc.',
    }
  }
) # => { salesperson_demonstrates_active_listening: 8, next_clear_step: "Schedule a demo" }</code></pre>
        </li>
        <li>
          <p>Want to create an inventory without a system? Ok, take a photo every day of a paper with the notes.</p>
          <pre><code class="lang-rb">inventory_notes = File.open('inventory_notes.jpg')
markdown = ActiveAI::ImageTranscribe.call(picture)
puts ActiveAI::DataExtractor.call(
  markdown,
  { quantity_of_apples: { type: 'Integer', min: 0 } }
) # => { quantity_of_apples: 3 }</code></pre>
        </li>
        <li>
          <p>Do you have tons of <strong>1:1 reports</strong>, and need to see all, but if prioritized?</p>
          <pre><code class="lang-rb">one_on_one_reports = [
  { score: nil, transcript: 'Overall, it\\'s been all good...' },
  { score: nil, transcript: 'I noticed that you have been struggling...' },
  { score: nil, transcript: 'Last week I was on the beach...' },
]
criteria = <<~CRITERIA
Evaluate the internal NPS score based on the one-on-one report.
Score 10 for positive and promoter employee and 0 for negative and detractor employee.
CRITERIA
one_on_one_reports.each_with_index do |report, index|
  one_on_one_reports[index][:score] = ActiveAI::Scorer.call(report, criteria)
end

prioritized_reports = one_on_one_reports.sort_by { |report| report[:score] }</code></pre>
        </li>
        <li>
          <p><strong>Rank a list of shipping fees</strong> that shows first the cheapest or fastest? Ranking:</p>
          <pre><code class="lang-rb">shipping_fees = [
  { name: 'Standard', price: 0, days: 5 },
  { name: 'Express', price: 10, days: 2 },
]
criteria = <<~CRITERIA
Choose the shipping option, act like a real customer and make a fair guess.
The shipping is for a pen priced at $1.
CRITERIA
ranked_items = ActiveAI::EloRanking.call(shipping_fees, criteria)
puts ranked_items # => [{ name: 'Standard', score: 1600 }, { name: 'Express', score: 1000 }]

criteria = <<~CRITERIA
Choose the shipping option, act like a real customer and make a fair guess.
The shipping is for a MacBook priced at $1000.
CRITERIA
ranked_items = ActiveAI::EloRanking.call(shipping_fees, criteria)
puts ranked_items # => [{ name: 'Express', score: 1580 }, { name: 'Standard', score: 1020 }]</code></pre>
        </li>
      </ol>
      <p>I can continue on for a lot more, but I think you understand. We gain a <strong>superpower</strong> for working with the abstract, creating determinism in places where it was not possible before. It is of course <strong>not perfect</strong>, and can hallucinate in some contexts. But this should not be a problem, the best place for GenAI is exactly when the answer is not explicitly clear.</p>
    </section>
    <hr>
    <section>
      <h2>Embrace the Flexibility</h2>
      <p>AI is going to eat the world, not because it’s intelligent, but because it’s <strong>flexible</strong>. We will generate and consume far more data from all places, even offline markets.</p>
      <p>The revolution isn’t as glamorous as the media often portrays. Autonomous machines producing everything for us sounds amazing, but that’s not the reality. The <strong>transformer algorithm</strong> powering GenAI are, by design, incapable of being “intelligent” or alive.</p>
      <p>What they can do is enormous: create structured data from anything. This is already generating a profound impact on society, and I believe <strong>it’s for the better</strong>. I want to be part of that, which is why I’m producing this kind of content and creating open-source libraries to help other engineers.</p>
      <p><strong>Welcome to the structured data revolution!</strong></p>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

useHead({
  title: 'AI Hype is real but for the wrong reason',
  meta: [
    {
      name: 'description',
      content: `AI is not intelligent. It doesn't think, it doesn't understand, and it's not about to become some super-intelligent being. GenAI can transform chaos into well-defined structured data, and that is huge! With multimodal LLMs, anything can become input to a system that previously only accepted specific and limited data types. It's not as fancy as the talk about a super-intelligent being, but it will change everything. Welcome to the structured data revolution.`
    },
    { name: 'keywords', content: 'AI, Data Extraction, Structured Data, GenAI' },
    { name: 'author', content: 'Radamés Roriz' },
    { property: 'og:title', content: 'AI Hype is real but for the wrong reason' },
    { property: 'og:description', content: props.post.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: props.post.url },
    { property: 'og:image', content: props.post.cover },
  ]
})
</script>
