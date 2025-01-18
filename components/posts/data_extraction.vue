<template>
  <section class="post">
    <div class="tldr">
      <p><strong>TL;DR</strong> Software has traditionally been <strong>overly deterministic</strong>, even in cases where businesses don’t require it. Being more <strong>flexible</strong> and creating new way to input is how AI has transformed software development. I demonstrate this through a series of articles discussing the possibilities offered by LLMs.</p>
      <p>I’ll explore how the <strong>data extraction</strong> capabilities of LLMs enable categorization, moderation, and easily data transform, among other tasks. Integrating <strong>AI+Engineer</strong> can significantly impact industries like social media and marketplaces. Every technique has its <strong>ideal time and place</strong>, and I’ll provide examples and discuss <strong>trade-offs</strong> to highlight effective applications.</p>
    </div>

    <h2>The Old Way vs. The New</h2>
    <p>Before LLMs, data extraction relied heavily on tools like <strong>regex</strong>, specialized machine learning models, and <strong>keyword</strong> searches. Businesses often marked <strong>text fields</strong> as unreliable and difficult to process, often calling them "<strong>garbage in, garbage out</strong>." Businesses that rely heavily on user content often establish <strong>human moderation</strong>, like those at Glassdoor and Facebook.</p>
    <img src="assets/posts/data_extraction-1.optimized.jpg" alt="Diagram showing text with some highlighted words, being converted into structured data" />
    <p><em>Image 1: Diagram showing text with some highlighted words, being converted into structured data.</em></p> 


    <p>Another common strategy involved leveraging strong <strong>community</strong> involvement for content moderation. Platforms like Reddit use dedicated moderators, while League of Legends fosters an <strong>honor system</strong>. Despite their effectiveness, these methods have been expensive, challenging, and <strong>far from perfect</strong>.</p>
    <p>With <strong>LLMs</strong>, achieving results comparable to those of moderation teams is now possible reach for almost anyone. Moderation has become much <strong>more accessible</strong> with simple prompting, opening doors to new business opportunities. By integrating structured workflows and robust ETL processes, the quality and scalability of moderation can <strong>greatly improve</strong>.</p>
    <p>However, there’s still <strong>much to learn</strong> about optimizing prompts and workflows for effective data extraction, as this isn’t a native behavior of LLMs. Still, today’s results are remarkable, and <strong>specialized LLMs</strong> for data extraction will simplify these tasks even further in the future.</p>
    
    <h3><strong>Cheaper Content Moderation - Social Media Industry</strong></h3>
    <p>Social media companies <strong>depends on</strong> user-generated content, including <strong>text</strong>, images, and audio. They face challenges in filtering harmful material like violence, sexual content, threats, illicit activities, and spam, while simultaneously encouraging user engagement.</p>
    <p>Historically, <strong>keyword searches</strong> have been a simple, cost-effective moderation tool. However, users often find creative ways to <strong>bypass</strong> these filters. For instance, mental health discussions rely on context-sensitive language, making detection by keyword systems ineffective.</p>
    <RorizCode>
uri = URI('https://api.openai.com/v1/chat/completions')
headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer #{api_key}"
}

prompt = &lt;&lt;-PROMPT
You are a content moderator reviewing a post to determineif has Mental Health Struggles or not.
Provide the reasoning behind your score and rate it on a scale from 1 to 10,
where 1 indicates it is probably not discussing , and 10 indicates it is likely discussing.
Return the json object: {score: Number, reasoning: String}
PROMPT
user_message = 'Feeling stuck in a dark place'

data = {
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: prompt },
    { role: 'user', content: user_message }
  ],
  response_format: { type: 'json_object' }
}

response = Net::HTTP.post(uri, data.to_json, headers)
puts JSON.parse(response.body)['choices'][0]['message']['content']
# {
  score: 8,
  reasoning: "The phrase 'stuck in a dark place' typically indicates a feeling of being trapped..." }
    </RorizCode>
    
    <h2>Categorization by Product Description - Marketplace Industry</h2>
    <p>In any marketplace, the products displayed on the platform serve as its showcase. <strong>poorly written</strong>, miscategorized, or inadequately presented products can negatively impact conversion rates or, even worse, damage the marketplace’s overall reputation. To address this issue, many platforms use an approval process or <strong>reputation system</strong> to reduce low-quality content.</p>
    <p>For generic marketplaces like Amazon or Facebook, product listings cover a vast range. This variety often includes <strong>low-quality</strong> postings with generic titles, inaccurate descriptions, or all-uppercase text, or worst. Reviewing every listing manually would require significant resources, <strong>driving up costs</strong> and reducing the marketplace’s competitiveness.</p>
    <p>One alternative is to use existing data to <strong>cross-verify</strong> listings and generate consistent information. For example:</p>
    <RorizCode>
uri = URI('https://api.openai.com/v1/chat/completions')
headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer #{api_key}"
}

prompt = &lt;&lt;-PROMPT
You are a product classifier. Based on the product description, classify the product into any applicable categories
PROMPT
user_message = 'product description: Elevate your culinary experience with our Handcrafted Bamboo Cutting Board! Perfect for both novice cooks and seasoned chefs, this beautiful cutting board combines functionality with an eco-friendly design. Made from 100% natural bamboo, it’s not only sustainable but also adds a touch of elegance to your kitchen.'

data = {
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: prompt },
    { role: 'user', content: user_message }
  ],
  response_format: {
    type: 'json_schema',
    json_schema: {
      name: 'category_matcher',
      schema: {
        type: "object",
        properties: {
          category: {
            type: 'string',
            enum: ['kitchen', 'eletronic', 'house']
          },
          subCategory: {
            type: 'string',
            enum: ['Coffee Makers and Kettles', 'Pans', 'Household Utensils']
          }
        },
        required: ['category', 'subCategory'],
        additionalProperties: false
      },
      strict: true
    }
  }
}

response = Net::HTTP.post(uri, data.to_json, headers)
puts JSON.parse(response.body)['choices'][0]['message']['content']
# {"category":"kitchen","subCategory":"Household Utensils"}
</RorizCode>

    <h2>Data Extraction as a New Tool</h2>
    <p>This technique is <strong>not perfect</strong> accuracy and will require continuous reevaluation since its effectiveness can vary significantly depending on the LLM model version, <strong>prompt</strong>, and the quality of user inputs. Despite these inconsistencies, it already delivers <strong>real value</strong> to businesses.</p>
    <p>Data extraction often involves adjusting prompts, <strong>transforming user content</strong>, or, as a last resort, creating a fine-tuned version. These adjustments are simple to learn but <strong>hard</strong> to master. However, recent years have seen a significant <strong>drop in costs</strong> and a dramatic rise in accuracy, making the process far more easily.</p>
    <p>These examples barely scratch the surface. With substantial budgets, rich categorization, <strong>workflows</strong>, risk scoring, contextual analysis beyond user inputs, and fine-tuning, LLMs could potentially match or even surpass <strong>human-level accuracy</strong>. That is what I expect to see in the near future.</p>
    <p>It is evident that data extraction is a tool that is <strong>here to stay</strong>, but like any tool, it must be used appropriately. Misuse can undermine its effectiveness, causing the LLM to perform unpredictably, as random as a <strong>lottery</strong>. Success lies in understanding its <strong>limitations</strong> and leveraging it effectively.</p>

    <h2>Limitations</h2>
    <p>It’s well-known that LLMs can "<strong>hallucinate</strong>" and produce incorrect or inconsistent data. These issues are inherent to the technology; <strong>no LLM is immune</strong>, and it’s unlikely that one ever will be. Instead of overreacting or blaming the model, we can use specific techniques to achieve more consistent results:</p>
    <ul>
        <li><strong>Ask for Clarification</strong>: Request reasoning behind extracted data before presenting the final answer. This approach encourages the model to align future tokens with the reasoning provided.</li>
        <li><strong>Limit Context Overload</strong>: While LLMs now support larger context windows, providing too much context can create a "needle in a haystack" problem. Use minimal context whenever possible, and filter, summarize, or transform input text beforehand to improve results.</li>
        <li><strong>Avoid Extracting Too Much Data at Once</strong>: Attempting to extract large amounts of data in a single query can cause inaccuracies or bias, as one piece may influence another. Focus on related data groups, such as first and last names or categories and subcategories. Make multiple requests if needed, applying the single-responsibility principle leads to better accuracy.</li>
        <li><strong>Avoid Calculations</strong>: Do not rely on LLMs for calculations. Think of an LLM as similar to your phone’s keyboard; asking it to calculate is like typing "1+1" on your phone and accepting the next suggestion. Extract raw data and handle calculations externally. For example, if the text provides a price in another currency but you need it in dollars, extract the raw price and currency, then convert it outside the LLM. Avoid shortcuts, even if they seem to work at first.</li>
        <li><strong>Handle Empty Responses Carefully</strong>: Only extract data when you are confident it exists in the text. For instance, if you ask for the color of a car but no car is mentioned, the LLM might return a random color or "none." Verify that the data is present before extracting it, if possible.</li>
        <li><strong>Account for Values Outside Enum Lists</strong>: When working with enum lists, if the correct value is missing, the LLM might choose an incorrect option from the list. To prevent this, include alternatives like "other" or "none" to avoid overfitting and ensure more accurate responses.</li>
        <li><strong>Be Creative</strong>: Use preliminary prompts to extract simpler data before attempting to gather complex information. Rephrase user input to remove unnecessary details, and ask for the same information in different ways. There is no universally perfect approach, so experiment to find what works best for your needs and share your findings!</li>
    </ul>
    <p>If your problem cannot be addressed by these tips, you might not be using the <strong>right tool</strong>. LLMs have a wide range of effectiveness; they can be a perfect fit or result in disaster. Proper implementation and problem selection are what position LLMs for success. Remember, there is <strong>no silver bullet</strong> in technology.</p>
  
    <h2>The Role of Software in Scaling AI</h2>
    <p>We are just beginning to explore the potential of allying <strong>AI+Engineer</strong>. Right now, almost all solutions are closely tied to <strong>foundation models</strong>. While many companies are working on second-level solutions, including those that owns the foundation models, we have yet to see clear dominant players emerging in this space.</p>
    <p>As we go deeper into AI applications, the need for <strong>functionalities</strong>, consistency, integrations, and business rules becomes more evident. These are challenges that only <strong>software</strong> can fully address today.</p>
    <img src="assets/posts/agi_is_not_that_important-2.optimized.jpg" alt="Iceberg of potential AI fields, starting with 1. foundation models, 2. prompt wrappers, 3. intelligent software, and 4. autonomous software." />
    <p><em>Image 2: Iceberg of potential AI fields, starting with 1. foundation models, 2. prompt wrappers, 3. intelligent software, and 4. autonomous software.</em></p>
  </section>
</template>

<script setup>
import RorizCode from '@/components/roriz_code.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

useHead({
  title: 'AI reshaped software: Data Extraction',
  meta: [
    {
      name: 'description',
      content: `I'll explore how the data extraction capabilities of LLMs enable categorization, moderation, and easily data transform, among other tasks. Integrating AI+Engineer can significantly impact industries like social media and marketplaces. Every technique has its ideal time and place, and I'll provide examples and discuss trade-offs to highlight effective applications.`
    },
    { name: 'keywords', content: 'Data Extraction, AI, Blog, Radamés Roriz' },
    { name: 'author', content: 'Radamés Roriz' },
    { property: 'og:title', content: 'AI reshaped software: Data Extraction' },
    { property: 'og:description', content: props.post.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: props.post.url },
    { property: 'og:image', content: props.post.cover },
  ]
})
</script>
