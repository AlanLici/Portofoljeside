<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="#home" class="nav-logo">
          <span class="logo-icon">◆</span> Alan Lici
        </a>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#case-studies" class="nav-link">Case Studies</a></li>
          <li><a href="#documents" class="nav-link">Documents</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Hi, I'm Alan Lici</h1>
          <p class="subtitle">
            <span class="accent-hero">Data Science & Full Stack Developer</span> — Master's student passionate about leveraging data for insight and building modern web applications that solve real-world problems.
          </p>
          <div class="cta-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div class="hero-image">
          <img :src="`${baseUrl}profile.jpg`" alt="Profile Picture" class="profile-pic" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section section-light">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">
          I'm a Master's student in Data Science at the University of Stavanger with a Bachelor's in Computer Engineering. Through studies and three summer positions as a fullstack developer, I've built strong skills in collaboration, problem-solving, and developing testable, efficient code. I have experience in fullstack development, data analysis, and machine learning.
        </p>
        <div class="about-grid">
          <div class="about-card">
            <div class="about-icon">💻</div>
            <h3>Full Stack Development</h3>
            <p>Vue.js, Node.js, .NET, C# — building complete web applications</p>
          </div>
          <div class="about-card">
            <div class="about-icon">📊</div>
            <h3>Data Science & ML</h3>
            <p>Python, Apache Spark, TensorFlow, PyTorch — turning data into insights</p>
          </div>
          <div class="about-card">
            <div class="about-icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>AWS, Azure, Docker, Kubernetes </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid">
          <article class="project-card">
            <h3>Music Recommendation System</h3>
            <p>Full-stack music recommendation system with semantic search over song lyrics using Elasticsearch and LLM integration for natural language playlist generation and personalized recommendations.</p>
            <div class="tech-tags">
              <span class="tag">React</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Node.js</span>
              <span class="tag">Flask</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Elasticsearch</span>
              <span class="tag">LLM</span>
            </div>
          </article>
          <article class="project-card">
            <h3>Deepfake Detection Challenge</h3>
            <p>Developed and compared deep learning models (MobileNetV3, EfficientNet, CNN, LSTM) for classifying real/fake videos. Implemented image processing with frame extraction and SSIM masking for improved training data.</p>
            <div class="tech-tags">
              <span class="tag">Python</span>
              <span class="tag">TensorFlow</span>
              <span class="tag">PyTorch</span>
              <span class="tag">Spark</span>
            </div>
            <div class="project-actions">
              <a href="Deepfake_Detection.pdf" target="_blank" class="project-link">Read Report →</a>
              <a href="#case-studies" class="project-link project-link-secondary">Read Case Study →</a>
            </div>
          </article>
          <article class="project-card">
            <h3>Temperature Prediction Pipeline</h3>
            <p>Data ingestion pipeline collecting weather data from Norwegian Meteorological Institute's API using MapReduce in Spark. Implemented prediction algorithm with MLlib for future temperature forecasting.</p>
            <div class="tech-tags">
              <span class="tag">Apache Spark</span>
              <span class="tag">Python</span>
              <span class="tag">MLlib</span>
              <span class="tag">MapReduce</span>
            </div>
            <div class="project-actions">
              <a href="Temperature_Forecasting.pdf" target="_blank" class="project-link">Read Report →</a>
              <a href="#case-studies" class="project-link project-link-secondary">Read Case Study →</a>
            </div>
          </article>
          <article class="project-card">
            <h3>Food Ordering Application</h3>
            <p>Food ordering platform inspired by Foodora and Wolt, where users can order food and add their own recipes. Built with .NET 7.0, C#, and deployed on Microsoft Azure.</p>
            <div class="tech-tags">
              <span class="tag">.NET</span>
              <span class="tag">C#</span>
              <span class="tag">Azure</span>
            </div>
          </article>
          <article class="project-card">
            <h3>Twitter-Style Blog Application</h3>
            <p>Social blog application where users can post entries, add contacts, like and comment on posts. Supports deployment with both Docker and Kubernetes for scalability.</p>
            <div class="tech-tags">
              <span class="tag">Node.js</span>
              <span class="tag">Vue.js</span>
              <span class="tag">Express</span>
              <span class="tag">SQL</span>
              <span class="tag">AWS</span>
              <span class="tag">Docker</span>
            </div>
          </article>
          <article class="project-card">
            <h3>Master's Thesis – Predicting Falls in Parkinson's Disease</h3>
            <p>Predicting fall risk in Parkinson's patients using survival analysis and sequential ML models (Cox Proportional Hazards, LSTM) on longitudinal clinical data to identify high-risk patients.</p>
            <div class="tech-tags">
              <span class="tag">Python</span>
              <span class="tag">PyTorch</span>
              <span class="tag">Pandas</span>
              <span class="tag">Lifelines</span>
              <span class="tag">Survival Analysis</span>
            </div>
            <a href="#case-studies" class="project-link">Read Case Study →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section id="case-studies" class="section section-light">
      <div class="container">
        <h2 class="section-title">Case Studies</h2>
        <p class="section-subtitle">
          In-depth exploration of selected projects, challenges faced, and solutions implemented.
        </p>
        
        <div class="case-studies-container">
          <!-- Master's Thesis Case Study -->
          <article class="case-study-card">
            <h3 class="case-study-title">Master's Thesis – Predicting Falls in Parkinson's Disease Patients</h3>
            
            <div :class="['case-study-preview-wrapper', { 'expanded': expandedCaseStudies[0] }]">
              <div class="case-study-content">
                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Problem
                  </h4>
              <p>
                Falls are a common and serious complication in Parkinson's disease, making early identification of high-risk patients critical for prevention and treatment planning. The challenge was to develop a predictive system that could analyze longitudinal clinical data to identify patients at risk of future falls. Traditional approaches often failed to capture the temporal dynamics of disease progression and how clinical features evolve over time to influence fall risk.
              </p>
            </div>

              <div class="case-study-section">
                <h4 class="case-study-subtitle">
                  Solution
                </h4>
              <p>
                I implemented a comprehensive approach combining survival analysis and sequential machine learning models. A time-varying Cox Proportional Hazards model was applied to estimate risk factors and understand how clinical features influence fall risk over time. Additionally, I explored recurrent neural networks (LSTM) to capture temporal patterns in patient progression across multiple visits. The models analyzed longitudinal patient data to learn patterns that indicate increasing fall risk, leveraging the sequential nature of clinical visits to make predictions about future fall events.
              </p>
            </div>

              <div class="case-study-section">
                <h4 class="case-study-subtitle">
                  Result
                </h4>
              <p>
                The system successfully outputs risk scores and predicted probabilities of future fall events based on patient history. These predictions enable healthcare providers to identify patients with increasing fall risk early and provide insights into which clinical features contribute most to that risk. The combination of survival analysis and deep learning approaches provided both interpretable risk factors and accurate predictions, offering a practical tool for clinical decision support in Parkinson's disease management.
              </p>
            </div>

              <div class="tech-stack">
                <strong>Technologies:</strong>
                <div class="tech-tags">
                  <span class="tag">Python</span>
                  <span class="tag">Pandas</span>
                  <span class="tag">NumPy</span>
                  <span class="tag">PyTorch</span>
                  <span class="tag">Lifelines</span>
                  <span class="tag">Jupyter</span>
                  <span class="tag">Matplotlib</span>
                  <span class="tag">Seaborn</span>
                </div>
              </div>
            </div>
            <div v-if="!expandedCaseStudies[0]" class="fade-overlay"></div>
          </div>
          <button @click="toggleCaseStudy(0)" class="toggle-btn-bottom">
            {{ expandedCaseStudies[0] ? 'See Less ▲' : 'See More ▼' }}
          </button>
        </article>

          <!-- Temperature Prediction Pipeline Case Study -->
          <article class="case-study-card">
            <h3 class="case-study-title">Temperature Forecasting with Distributed Computing and Deep Learning</h3>
            
            <div :class="['case-study-preview-wrapper', { 'expanded': expandedCaseStudies[1] }]">
              <div class="case-study-content">
                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Problem
                  </h4>
                  <p>
                    Accurate temperature forecasting is challenging due to complex seasonal patterns and long-term temporal dependencies in weather data. Traditional approaches struggle to efficiently process large-scale datasets while capturing both short-term and long-term trends in time series data. The project therefore explores how distributed computing and machine learning models can be combined to build a scalable system for predicting future temperatures.
                  </p>
                </div>

                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Solution
                  </h4>
                  <p>
                    To address this, an end-to-end data processing pipeline was built using Apache Spark and Hadoop following the Medallion Architecture (bronze, silver, and gold layers). Weather data was collected from the Norwegian Meteorological Institute's Frost API, processed and cleaned using distributed Spark transformations, and stored in HDFS. Several machine learning models were implemented and compared, including Linear Regression as a baseline, Long Short-Term Memory (LSTM) networks for capturing temporal dependencies, and Convolutional Neural Networks (CNN) for detecting localized patterns in time series data.
                  </p>
                </div>

                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Result
                  </h4>
                  <p>
                    The experiments showed that distributed processing with Apache Spark enabled efficient handling of large datasets and scalable model training. Among the tested models, LSTM achieved the best predictive performance for shorter forecasting horizons, outperforming both CNN and linear regression in terms of error metrics such as MAE and RMSE. The results demonstrate that combining distributed data pipelines with deep learning models can provide an effective and scalable approach for temperature forecasting.
                  </p>
                </div>

                <div class="tech-stack">
                  <strong>Technologies:</strong>
                  <div class="tech-tags">
                    <span class="tag">Apache Spark</span>
                    <span class="tag">Hadoop</span>
                    <span class="tag">HDFS</span>
                    <span class="tag">Python</span>
                    <span class="tag">LSTM</span>
                    <span class="tag">CNN</span>
                    <span class="tag">Frost API</span>
                  </div>
                </div>
              </div>
              <div v-if="!expandedCaseStudies[1]" class="fade-overlay"></div>
            </div>
            <button @click="toggleCaseStudy(1)" class="toggle-btn-bottom">
              {{ expandedCaseStudies[1] ? 'See Less ▲' : 'See More ▼' }}
            </button>
          </article>

          <!-- Deepfake Detection Challenge Case Study -->
          <article class="case-study-card">
            <h3 class="case-study-title">Deepfake Detection Challenge</h3>
            
            <div :class="['case-study-preview-wrapper', { 'expanded': expandedCaseStudies[2] }]">
              <div class="case-study-content">
                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Problem
                  </h4>
                  <p>
                    Deepfakes are AI-generated videos that manipulate facial content and are increasingly difficult for humans to detect. This project explores how deep learning models can automatically identify manipulated videos by detecting subtle visual inconsistencies in video frames.
                  </p>
                </div>

                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Solution
                  </h4>
                  <p>
                    A deep learning pipeline was developed that extracts frames from videos, detects faces using MTCNN, and analyzes them using several neural network architectures, including Meso-4, MobileNetV3Small, EfficientNetB0, and Vision Transformers. Structural Similarity Index (SSIM) features were also incorporated to capture temporal inconsistencies between consecutive frames.
                  </p>
                </div>

                <div class="case-study-section">
                  <h4 class="case-study-subtitle">
                    Result
                  </h4>
                  <p>
                    The best-performing model was Meso-4 combined with SSIM features, achieving an AUC of 0.965. The results showed that lightweight CNN architectures focusing on local visual artifacts can outperform larger, more complex models in deepfake detection tasks.
                  </p>
                </div>

                <div class="tech-stack">
                  <strong>Technologies:</strong>
                  <div class="tech-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Meso-4</span>
                    <span class="tag">MobileNetV3</span>
                    <span class="tag">EfficientNet</span>
                    <span class="tag">Vision Transformers</span>
                    <span class="tag">MTCNN</span>
                    <span class="tag">SSIM</span>
                  </div>
                </div>
              </div>
              <div v-if="!expandedCaseStudies[2]" class="fade-overlay"></div>
            </div>
            <button @click="toggleCaseStudy(2)" class="toggle-btn-bottom">
              {{ expandedCaseStudies[2] ? 'See Less ▲' : 'See More ▼' }}
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- Documents Section -->
    <section id="documents" class="section">
      <div class="container">
        <h2 class="section-title">Documents</h2>
        <p class="section-subtitle">
          Download my resume and letters of recommendation.
        </p>
        
        <div class="documents-grid">
          <div class="document-card">
            <h3>Resume / CV</h3>
            <p>Complete overview of my education, experience, and skills</p>
            <a href="AlanLici_CV.pdf" target="_blank" class="btn btn-primary">Download PDF</a>
          </div>
          
          <div class="document-card">
            <h3>Letter from Gurusoft AS</h3>
            <p>Work attestation from my summer positions as a fullstack developer</p>
            <a href="Arbeidsattest_Gurusoft.pdf" target="_blank" class="btn btn-primary">Read Letter →</a>
          </div>
          
          <div class="document-card">
            <h3>Letter from ISI</h3>
            <p>Recommendation from academic supervisor</p>
            <a href="Attest_ISI_Alan_Lici.pdf" target="_blank" class="btn btn-primary">Read Letter →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section section-dark">
      <div class="container">
        <h2 class="section-title text-white">Get In Touch</h2>
        <p class="section-subtitle text-white">
          Send me a message and I'll get back to you soon.
        </p>
        
        <div class="contact-wrapper">
          <div class="contact-form-card">
            <form @submit.prevent="handleContactSubmit" class="contact-form">
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  v-model="contactData.subject"
                  placeholder="What is this about?"
                  required
                  aria-label="Message subject"
                />
                <span v-if="errors.subject" class="error-msg">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="contactData.message"
                  placeholder="Your message..."
                  rows="5"
                  required
                  aria-label="Your message"
                ></textarea>
                <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
              </div>

              <button type="submit" class="btn btn-primary btn-large" :disabled="isSubmittingForm">
                {{ isSubmittingForm ? 'Opening email client...' : 'Send Message' }}
              </button>

              <div v-if="toastMessage" :class="['toast', toastType]">
                {{ toastMessage }}
              </div>
            </form>

            <div class="contact-fallback">
              <p>Or copy my email address:</p>
              <div class="email-copy-box">
                <span class="email-text">{{ userEmail }}</span>
                <button @click="copyEmail" class="btn btn-copy" title="Copy email to clipboard">
                  📋 Copy
                </button>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <p>Connect elsewhere:</p>
            <div class="social-links">
              <a href="https://github.com/AlanLici" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/alan-lici-00b6862b0" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a :href="`mailto:${userEmail}`" aria-label="Send email">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>© {{ year }} Alan Lici. Built with Vue 3 & Vite.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const baseUrl = import.meta.env.BASE_URL

const year = new Date().getFullYear()

// Replace with your email address
const userEmail = 'alanlici0@gmail.com'

// Contact form state
const contactData = ref({
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmittingForm = ref(false)
const toastMessage = ref('')
const toastType = ref('')

// Case studies expansion state
const expandedCaseStudies = ref([false, false, false]) // Array for multiple case studies

// Toggle case study expansion
const toggleCaseStudy = (index) => {
  expandedCaseStudies.value[index] = !expandedCaseStudies.value[index]
}

// Validate form
const validateForm = () => {
  errors.value = {}
  
  if (!contactData.value.subject.trim()) {
    errors.value.subject = 'Subject is required'
  }
  if (!contactData.value.message.trim()) {
    errors.value.message = 'Message is required'
  }
  
  return Object.keys(errors.value).length === 0
}

// Show toast notification
const showToast = (msg, type = 'success') => {
  toastMessage.value = msg
  toastType.value = type
  setTimeout(() => {
    toastMessage.value = ''
  }, 4000)
}

// Generate mailto link and open email client
const handleContactSubmit = () => {
  if (!validateForm()) {
    showToast('Please check the form for errors', 'error')
    return
  }

  isSubmittingForm.value = true

  // Build mailto link with subject and message
  const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(contactData.value.subject)}&body=${encodeURIComponent(contactData.value.message)}`
  
  // Open user's default email client
  window.location.href = mailtoLink
  
  // Reset form and show success message
  setTimeout(() => {
    showToast('Email client opened! Complete and send the message in your email app.', 'success')
    contactData.value = { subject: '', message: '' }
    isSubmittingForm.value = false
  }, 500)
}

// Copy email to clipboard
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(userEmail)
    showToast('Email copied to clipboard!', 'success')
  } catch (err) {
    showToast('Failed to copy email', 'error')
  }
}
</script>
