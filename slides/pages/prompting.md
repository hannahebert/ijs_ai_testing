---
layout: center
---

# Prompt Engineering – What is it?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Designing and optimizing inputs (prompts) for AI models</li>
<li v-click style="margin-bottom: 1rem;">Techniques for guiding language models effectively</li>
<li v-click>Goal: Obtain precise and relevant responses</li>
</ul>


---
layout: center
---

# Example Function

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Code:</b>
  <pre><code>add(a: number, b: number) {
  return a + b;
}</code></pre>
</div>


---
layout: center
---

# Anatomy of a Prompt

A prompt contains the following elements:

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Instruction:</b> A specific task or instruction you want the model to perform.</li>
<li v-click style="margin-bottom: 1rem;"><b>Context:</b> External information or additional context to guide the model.</li>
<li v-click style="margin-bottom: 1rem;"><b>Input Data:</b> The input or question we want a response for.</li>
<li v-click><b>Output Indicator:</b> The type or format of the desired output.</li>
</ul>

---

# Example Prompt Breakdown

<div style="background-color: #f9f9f9; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px;">
<b>Prompt:</b>  
"Write a unit test using Jest for the following function. The test should cover typical values, edge cases, and invalid inputs.  
Function: `function add(a, b) { return a + b; }`  
Output: A Jest test file."
</div>

<ul style="padding: 0; margin-top: 1rem;">
<li v-click style="margin-bottom: 1rem;"><b>Instruction:</b> "Write a unit test using Jest for the following function."</li>
<li v-click style="margin-bottom: 1rem;"><b>Context:</b> "The test should cover typical values, edge cases, and invalid inputs."</li>
<li v-click style="margin-bottom: 1rem;"><b>Input Data:</b> "`function add(a, b) { return a + b; }`"</li>
<li v-click><b>Output Indicator:</b> "A Jest test file."</li>
</ul>

---
layout: center
---

# Prompt Components: Instructional

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Specifies what the model should do</li>
<li v-click style="margin-bottom: 1rem;">Clear and precise description of the task or question being asked</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>  
  <p>"Create a unit test with Jest for the function <code>add(a, b)</code> that returns the sum of <code>a</code> and <code>b</code>."</p>
</div>


---
layout: center
---

# Prompt Components: Context

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Provides background information or additional details relevant to the task</li>
<li v-click style="margin-bottom: 1rem;">Helps the model better understand the request</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>“The function <code>add(a, b)</code> is a simple JavaScript function <b  style="color: #bf1f83">that takes two numbers as parameters and returns their sum</b>. It is important to test various scenarios, including typical values, edge cases, and invalid inputs.”</p>
</div>


---
layout: center
---

# Prompt Components: Expectation

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Describes what is expected from the response, including content and type of information</li>
<li v-click style="margin-bottom: 1rem;">Focuses on the content and quality of the response</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example I:</b>
  <p>"Provide a complete test suite that covers at least the following scenarios: sum of two positive numbers, sum of two negative numbers, sum of a positive and a negative number, handling of zero as input, handling of invalid inputs (e.g., strings, undefined)."</p>
</div>

<div v-click style="margin-top: 1rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example II:</b>
  <p>"I expect 100% branch coverage."</p>
</div>



---
layout: center
---

# Prompt Components: Output Format

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Defines how the response should be structured or presented (e.g., plain text, JSON, YAML, etc.)</li>
<li v-click style="margin-bottom: 1rem;">Focuses on the appearance and format of the response</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"Present the test cases in the form of descriptive test blocks (describe and it blocks). Test descriptions should start with <code>it 'should'</code>, so that each test semantically begins with 'it should'."</p>
</div>



---
layout: center
---

# Prompt Components: Constraints

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Sets boundaries or conditions that must be considered when generating the response (e.g., text length)</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"Keep the test code simple and concise. Use only native Jest methods without external libraries. Test descriptions must not exceed 10 words."</p>
</div>


---
layout: center
---

# Prompt Components: Target Audience

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Defines who the response is intended for</li>
<li v-click style="margin-bottom: 1rem;">Helps adjust the tone or style of the response</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"The tests will later be reviewed by strict reviewers who will evaluate the quality and completeness of the tests. They expect the code to be clearly commented, and the intent behind each test case to be evident."</p>
</div>


---
layout: center
---

# Prompt Components: Examples (Shots)

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Shows the AI how a response could look or how the request should be interpreted</li>
<li v-click style="margin-bottom: 1rem;">Can help avoid misunderstandings</li>
<li v-click style="margin-bottom: 1rem;">Especially important for <b>In-Context Learning</b></li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Number of "Shots" in Prompts:</b>
  <ul style="padding: 0; list-style: none;">
    <li><b>Zero-Shot:</b> No examples, the AI must solve the task without context.</li>
    <li><b>One-Shot:</b> One example to clarify the task.</li>
    <li><b>Few-Shot:</b> Multiple examples to make the request clear.</li>
  </ul>
</div>


---
layout: center
---

# Prompt Components: Examples (Shots)

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"Here is an example of an existing unit test with Jest:</p>
  <p><b>Function:</b></p>
  <pre><code>multiply(a, b) { return a * b; }</code></pre>
  <p><b>Test:</b></p>
  <pre><code>describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toStrictEqual(6);
  });
});</code></pre>
  <p>Please follow this structure for the function:</p>
  <pre><code>add(a, b): number { return a + b; }</code></pre>
</div>



---
layout: center
---

# Prompt Components: Sectioning

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Breaks the prompt into meaningful units</li>
<li v-click style="margin-bottom: 1rem;">Helps the model extract information more easily</li>
<li v-click style="margin-bottom: 1rem;">Allows the AI model to focus better</li>
<li v-click style="margin-bottom: 1rem;">Reduces the likelihood of misunderstandings</li>
<li v-click style="margin-bottom: 1rem;">Makes the prompt easier for the user to read</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"### Target Audience ###"</p>
</div>



---
layout: center
---

# Advanced Prompting Strategies



---
layout: center
---

# Reflection & Self-Validation

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Reasoning:</b> "Explain what you are doing at each step."</li>
<li v-click style="margin-bottom: 1rem;"><b>Adopting another perspective:</b> "I am now a software architect reviewing the tests. What suggestions for improvement would I have?"</li>
<li v-click style="margin-bottom: 1rem;"><b>Content validation:</b> "List the F.I.R.S.T principles. Do all tests adhere to them?"</li>
</ul>


---
layout: center
---

# Prompt Chaining

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Breaks tasks into smaller subtasks</li>
<li v-click style="margin-bottom: 1rem;">Uses the output of previous subtasks as input for the next</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Advantages:</b>
  <ul style="padding: 0;">
    <li><b>Complexity Reduction:</b> Tasks are divided into smaller, manageable steps, making solutions simpler and more precise.</li>
    <li><b>Increased Precision:</b> Each step can focus on specific details, leading to more relevant results.</li>
    <li><b>Iterative Refinement:</b> Results can be adjusted and improved step by step to achieve optimal solutions.</li>
  </ul>
</div>


---
layout: center
---

# Chain-of-Thought Prompting

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">The model breaks the prompt into steps!</li>
<li v-click style="margin-bottom: 1rem;"><b>Step-by-step problem solving:</b> The model receives a structured prompt that guides it to solve the problem incrementally.</li>
<li v-click><b>Explanation:</b> The model explains the steps it takes to reach the solution.</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <p>"How can I test this file? Please explain it step by step."</p>
</div>


---
layout: center
---

# Chain-of-Thought Prompting: Advantages

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Step-by-step Thinking:</b> Encourages solving complex problems by breaking them into clear, structured steps.</li>
<li v-click style="margin-bottom: 1rem;"><b>Transparency in the Process:</b> Each step is explicitly explained, making it easier to follow the reasoning and learn from it.</li>
<li v-click><b>Error Reduction:</b> Clear division into substeps reduces the likelihood of logical errors or overlooked details.</li>
</ul>



---
layout: center
---

# Generative Knowledge Prompting

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Generate or retrieve relevant background knowledge</b> before tackling the task.</li>
<li v-click>Bases on the idea that a model, when properly "fed" with information and context, can generate precise and useful content.</li>
</ul>


---
layout: center
---

# Feeding Knowledge for Testing

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Test Goals:</b> Knowledge about unit tests, integration tests, or others.</li>
<li v-click style="margin-bottom: 1rem;"><b>Test Framework:</b> Understanding frameworks like Jest, Mocha, or Jasmine.</li>
<li v-click style="margin-bottom: 1rem;"><b>Best Practices:</b> What makes good unit tests?</li>
<li v-click>Testrunners, assertion libraries, mocks & spies, etc.</li>
</ul>

<div v-click style="margin-top: 2rem; padding: 1rem; border: 2px solid #bf1f83; border-radius: 8px; background-color: #f9f9f9;">
  <b>Example:</b>
  <ul style="padding: 0; list-style: none;">
    <li><b>Prompt 1:</b> "What Jest matchers are available and when should each be used?"</li>
    <li><b>Prompt 2 (Applying Knowledge):</b> "Have you always used the most appropriate matcher in all tests?"</li>
  </ul>
</div>


---
layout: center
---

# Generative Knowledge Prompting: Advantages

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Broad Expertise:</b> Provides more comprehensive and dynamic answers by leveraging stored knowledge from various domains.</li>
<li v-click style="margin-bottom: 1rem;"><b>Creative Solutions:</b> Offers suggestions that not only address the problem but also include optimizations, best practices, and alternative approaches.</li>
<li v-click><b>Contextual Depth:</b> Provides background information and enables deeper insights.</li>
</ul>


---
layout: center
---

# Prompt – Good to Know

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Tokens:</b></li>
<ul>
  <li v-click style="margin-bottom: 1rem;">100 tokens ≈ 75 words in English</li>
  <li v-click style="margin-bottom: 1rem;">Largest GPT models: 128,000 tokens (input + output) (GPT Turbo ≈ 240 pages => output limited to max 3,000 words)</li>
  <li v-click style="margin-bottom: 1rem;">ChatGPT-3: 3,000 words</li>
  <li v-click>Higher token limits are designed for maintaining context in longer, more complex conversations</li>
</ul>
</ul>