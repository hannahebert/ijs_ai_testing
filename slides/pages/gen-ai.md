---
layout: image-right
image: ./img/gen-ai-2.png
css: ./styles/colors.css
---

# What is Gen AI?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Generative Artificial Intelligence</b> refers to algorithms that <b style="color: #bf1f83">create</b> new content such as text, images, or music based on existing data.</li>
<li v-click style="margin-bottom: 1rem;">It identifies and imitates <b style="color: #bf1f83">patterns</b> in the data.</li>
<li v-click>These AI models are often based on <b style="color: #bf1f83">neural networks</b>.</li>
</ul>



---
layout: center
---

# GenAI Architectures

<table>
  <thead>
    <tr>
      <th><b>Architecture</b></th>
      <th><b>Example Tasks</b></th>
      <th><b>Output Formats/Examples</b></th>
      <th><b>Year Introduced</b></th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <td><b style="color: #bf1f83">VAEs</b> (Variational Autoencoders)</td>
      <td>
        - Image reconstruction<br>
        - Data compression (e.g., in medicine)
      </td>
      <td>
        - Enhanced or compressed images<br>
        - Medical imaging
      </td>
      <td>2013</td>
    </tr>
    <tr v-click>
      <td><b style="color: #bf1f83">GANs</b> (Generative Adversarial Networks)</td>
      <td>
        - Generate realistic images (Deepfakes)<br>
        - Create artificial artworks
      </td>
      <td>
        - Photorealistic images<br>
        - Deepfake videos
      </td>
      <td>2014</td>
    </tr>
    <tr v-click>
      <td><b style="color: #bf1f83">Transformer Architectures</b></td>
      <td>
        - Text generation (e.g., chatbots like GPT)<br>
        - Language translation<br>
        - Text summarization
      </td>
      <td>
        - Automatic texts (blog posts, stories)<br>
        - Translated texts (e.g., in global communication)
      </td>
      <td>2017</td>
    </tr>
  </tbody>
</table>


---
layout: image-right
image: ./img/networks.png
---

# What are Transformer-based LLMs?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>LLM</b> = Large Language Model</li>
<li v-click style="margin-bottom: 1rem;">Based on <b style="color: #bf1f83">Deep Neural Networks (DNNs)</b> (special neural networks with more complex pattern recognition)</li>
<li v-click style="margin-bottom: 1rem;">Understand and generate <b style="color: #bf1f83">human language</b></li>
<li v-click style="margin-bottom: 1rem;">Provide <b style="color: #bf1f83">context-aware</b> responses</li>
<li v-click>Used in <b style="color: #bf1f83">Natural Language Processing (NLP)</b></li>
</ul>


---
layout: image-right
image: ./img/workshop.jpg
---

# What is a Natural Language Task?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Summarizing <b style="color: #bf1f83">texts</b></li>
<li v-click style="margin-bottom: 1rem;">Writing <b style="color: #bf1f83">poems</b></li>
<li v-click style="margin-bottom: 1rem;">Telling <b style="color: #bf1f83">stories</b></li>
<li v-click style="margin-bottom: 1rem;">Translating <b style="color: #bf1f83">texts</b></li>
<li v-click style="margin-bottom: 1rem;">Recognizing <b style="color: #bf1f83">entities</b></li>
<li v-click>Etc.</li>
</ul>


---
layout: center
class: text-center
---

# Is Writing/Analyzing Unit Tests an NLP Task?

<div v-click style="margin-top: 2rem; font-size: 2.5rem; color: #bf1f83;">
  <b>❌ No!</b>
</div>

<hr v-click style="margin: 1.5rem auto; border: 1px solid #bf1f83; width: 50%;">

<div v-click style="margin-top: 1.5rem; font-size: 1.5rem;">
  <b>BUT:</b>
</div>

<ul style="padding: 0; list-style: none; margin-top: 1rem; text-align: left; display: inline-block;">
  <li v-click style="margin-bottom: 1rem; display: flex; align-items: center;">
    <span style="font-size: 1.5rem; margin-right: 0.5rem;">💡</span>
    LLMs <b style="color: #bf1f83">&nbsp;CAN&nbsp;</b> generate or analyze unit tests
  </li>
  <li v-click style="margin-bottom: 1rem; display: flex; align-items: center;">
    <span style="font-size: 1.5rem; margin-right: 0.5rem;">📚</span>
    They are trained on vast amounts of programming and text data
  </li>
  <li v-click style="display: flex; align-items: center;">
    <span style="font-size: 1.5rem; margin-right: 0.5rem;">🛠️</span>
    They understand the <b>structure of code</b>, <b>test patterns</b>, and <b>common practices</b>
  </li>
</ul>

---
level: 2
layout: image
image: ./img/transformer.jpg
class: text-white
---

# Transformer architecture


---
layout: image-right
image: ./img/books.jpg
---

# Transformer Architectures: Encoder

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Purpose:</b> Understanding content</li>
<li v-click style="margin-bottom: 1rem;"><b>Focus:</b> Capturing the meaning of words in context</li>
<li v-click><b>Example:</b> BERT (Bidirectional Encoder Representations from Transformers)</li>
</ul>


---
layout: image-right
image: ./img/typewriter.jpg
---

# Transformer Architectures: Decoder

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Unidirectional:</b> Processes input in one direction</li>
<li v-click style="margin-bottom: 1rem;"><b>Autoregressive:</b> Predicts one word at a time</li>
<li v-click style="margin-bottom: 1rem;">Generates <b>text</b> based on previous input</li>
<li v-click style="margin-bottom: 1rem;">Focuses on <b>word prediction</b></li>
<li v-click><b>Example:</b> GPT models</li>
</ul>


---
layout: image-right
image: ./img/workshop.jpg
---

# Transformer Architectures: Encoder-Decoder

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>Seq2Seq:</b> Combines encoder and decoder</li>
<li v-click style="margin-bottom: 1rem;"><b>Encoder:</b> Understands and summarizes input</li>
<li v-click style="margin-bottom: 1rem;"><b>Decoder:</b> Builds upon the encoded input</li>
<li v-click><b>Example:</b> T5 (Text-to-Text Transfer Transformer)</li>
</ul>

---
layout: center
---

# Self-Attention: Key Concepts

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>What is Self-Attention?</b>
  <ul>
    <li>Analyzes the relationship of a word to all other words in a sentence.</li>
    <li>Helps models understand context and dependencies between words.</li>
  </ul>
</li>
<li v-click style="margin-bottom: 1rem;"><b>Why is it Important?</b>
  <ul>
    <li>Captures long-range dependencies in text.</li>
    <li>Enables context-aware understanding of language.</li>
  </ul>
</li>
</ul>

<div v-click style="margin-top: 2rem;">
  🔍 <b>Example</b>
  <div style="margin-top: 1rem;">
    <b>Sentence:</b> “The rabbit didn’t cross the street because it was too tired.”
  </div>
  <div style="margin-top: 1rem;">
    <b>Explanation:</b> The pronoun <b>it</b> refers to <b>the animal</b>. Self-attention allows the model to connect the words despite the distance between them.
  </div>
</div>


---
layout: center
---

# Multi-Headed Attention: Key Concepts

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;"><b>What is Multi-Headed Attention?</b>
  <ul>
    <li>Extends self-attention by using multiple attention mechanisms ("heads").</li>
    <li>Each head focuses on different aspects of the input (e.g., syntax, semantics).</li>
  </ul>
</li>
<li v-click style="margin-bottom: 1rem;"><b>Why is it Important?</b>
  <ul>
    <li>Improves the model's ability to capture diverse relationships in the data.</li>
    <li>Enables parallel processing of different features.</li>
  </ul>
</li>
</ul>

<div v-click style="margin-top: 2rem;">
  🔍 <b>Example</b>
  <div style="margin-top: 1rem;">
    <b>Sentence:</b> “The rabbit didn’t cross the street because it was too tired.”
  </div>
  <div style="margin-top: 1rem;">
    <b>Explanation:</b> One head might focus on the relationship between <b>rabbit</b> and <b>it</b>, while another head analyzes the connection between <b>street</b> and <b>cross</b>. This parallel attention helps the model understand the sentence more comprehensively.
  </div>
</div>


---
layout: center
---

# Attention Mechanisms in Transformer Architectures

<table>
  <thead>
    <tr>
      <th><b>Architecture</b></th>
      <th><b>Attention Mechanism Used</b></th>
      <th><b>Description</b></th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <td><b>Encoder</b></td>
      <td>Self-Attention</td>
      <td>Captures the context of a word within the entire sentence.</td>
    </tr>
    <tr v-click>
      <td><b>Decoder</b></td>
      <td>Self-Attention & Multi-Headed Attention</td>
      <td>
        - Self-Attention: Understands the relationship between generated words.<br>
        - Multi-Headed Attention: Considers the encoder output to predict the next word.
      </td>
    </tr>
    <tr v-click>
      <td><b>Encoder-Decoder</b></td>
      <td>Self-Attention & Multi-Headed Attention</td>
      <td>
        - Encoder: Uses Self-Attention to analyze the input.<br>
        - Decoder: Combines Self-Attention and Multi-Headed Attention to incorporate context.
      </td>
    </tr>
  </tbody>
</table>

---
layout: center
---

# Transformer-Architekturen Overview

<table>
  <thead>
    <tr>
      <th><b>Architektur-Stil</b></th>
      <th><b>Modell</b></th>
      <th><b>Ersteller</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Encoder</td>
      <td>BERT, ALBERT, ELECTRA</td>
      <td>Google</td>
    </tr>
    <tr>
      <td>Encoder</td>
      <td>DistilBERT</td>
      <td>Hugging Face</td>
    </tr>
    <tr>
      <td>Decoder</td>
      <td>GPT-3, GPT-4</td>
      <td>OpenAI</td>
    </tr>
    <tr>
      <td>Decoder</td>
      <td>GPT-J, GPT-Neo</td>
      <td>EleutherAI</td>
    </tr>
    <tr>
      <td>Decoder</td>
      <td>LLaMA</td>
      <td>Meta (Facebook)</td>
    </tr>
    <tr>
      <td>Encoder-Decoder</td>
      <td>T5</td>
      <td>Google</td>
    </tr>
    <tr>
      <td>Encoder-Decoder</td>
      <td>BART, mBART</td>
      <td>Facebook AI Research</td>
    </tr>
    <tr>
      <td>Encoder-Decoder</td>
      <td>MarianMT, ProphetNet</td>
      <td>Microsoft</td>
    </tr>
  </tbody>
</table>



---
layout: center
---

# How does a transformer-based LLM learn to code?



---
layout: image-right
image: ./img/training.jpg
---

# Pre-training

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Learning from scratch (general "fitness")</li>
<li v-click style="margin-bottom: 1rem;">Learns fundamental patterns and relationships</li>
<li v-click>Trained on large, general datasets (e.g., Wikipedia, Common Crawl)</li>
</ul>



---
layout: image-right
image: ./img/fine-tuning.jpg
---

# Fine-tuning

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">A pre-trained model is further trained for a specific task or domain</li>
<li v-click style="margin-bottom: 1rem;">Uses more specific data (text, images, audio, video, user feedback)</li>
<li v-click>Improves performance for particular tasks or domains</li>
</ul>


---
layout: center
---

# How can I use transformer-based LLMs for unit testing?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Integrated IDE tools for code completion</li>
<li v-click style="margin-bottom: 1rem;">Connect the model directly to prompt from the IDE</li>
<li v-click>Use the model with an existing user interface for prompting</li>
</ul>


---
layout: center
---

# Prompt Engineering – What is it?

<ul style="padding: 0;">
<li v-click style="margin-bottom: 1rem;">Designing and optimizing inputs (prompts) for AI models</li>
<li v-click style="margin-bottom: 1rem;">Techniques for guiding language models effectively</li>
<li v-click>Goal: Obtain precise and relevant responses</li>
</ul>


