"use client";
import Image from "next/image"
import { MapPin, FileText, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="/images/profile-photo.jpg"
              alt="Ayodele David Ayooluwa"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Profile</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">Education</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full" onClick={() => setOpen(true)}>Contact Me</Button>
          <a href="/resume.pdf" download>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">Download Resume</Button>
          </a>
        </div>
      </nav>

      {/* Contact Modal (Dialog) - only rendered when open is true */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Me</h2>
              <div className="mb-4 flex flex-col gap-2">
                <a href="mailto:davidayo2603@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Mail className="w-5 h-5" /> davidayo2603@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/david-ayodele-ayo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
              <form action="https://formspree.io/f/xanbdqko" method="POST" className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded px-3 py-2" />
                <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded px-3 py-2" />
                <textarea name="message" placeholder="Your Message" required className="w-full border rounded px-3 py-2" rows={4}></textarea>
                <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full w-full">Send Email</Button>
              </form>
              <Button className="mt-4 w-full" variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Status Badges */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Available for Work</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Based in Lagos, Nigeria</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Profile Image */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="aspect-square relative overflow-hidden rounded-xl">
              <Image
                src="/images/profile-photo.jpg"
                alt="Ayodele David Ayooluwa"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ayodele David Ayooluwa</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-6">
              Backend & DevOps Engineer | Microservices | Cloud Infrastructure
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="mailto:davidayo2603@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">davidayo2603@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-ayodele-ayo"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/davidx345"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Computer Science student with hands-on experience in microservices, CI/CD pipelines, and cloud infrastructure. 
              Built 22+ microservices with 50+ API endpoints using Python, FastAPI, Docker, and AWS. 
              Reduced deployment cycles by 60% and maintained 85% uptime through automated DevOps practices. 
              Specialized in building scalable backend systems and robust cloud infrastructure solutions.
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <FileText className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">REST APIs</Badge>
                <Badge variant="secondary">Microservices</Badge>
                <Badge variant="secondary">JWT/OAuth</Badge>
                <Badge variant="secondary">WebSockets</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">GitHub Actions</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Terraform</Badge>
                <Badge variant="secondary">CI/CD</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">Database Design</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Tools & AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Prometheus</Badge>
                <Badge variant="secondary">Grafana</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">OpenAI APIs</Badge>
              </div>
            </div>
          </div>
        </div>


        {/* Education Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16" id="education">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-600 font-medium">Covenant University, Nigeria | Expected 2027 | GPA: 4.83/5.0</p>
              <p className="text-sm text-gray-600 mt-2">
                Relevant Coursework: Data Structures, Distributed Systems, Software Engineering, AI, Cloud Computing
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Certifications (In Progress)</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• AWS CLOUD PRACTITIONER</li> 
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16" id="experience">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps Intern | HNG Internship</h3>
              <p className="text-blue-600 font-medium mb-4">Remote | 2024-2025</p>
              <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
                <li>• Built CI/CD pipelines with GitHub Actions for 6+ microservices, reducing deployment time by 60%</li>
                <li>• Managed cloud infrastructure with Docker and Kubernetes, maintaining 99.9% uptime</li>
                <li>• Implemented monitoring with Prometheus, Grafana, and Nginx for proactive issue detection</li>
                <li>• Collaborated in Agile teams using Git workflows and Jira for sprint management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="mb-16" id="projects">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Highlights</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* SchemaSage */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="https://schemasage.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Live Demo</Button>
                </a>
                <a href="https://github.com/davidx345/schemasage-showcase" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-4 py-1 rounded-full text-xs">GitHub</Button>
                </a>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SchemaSage</h3>
              <p className="text-gray-600 mb-4">Enterprise API Schema & Database Management Platform</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                AI-powered platform for database schema design, code generation, and migration with enterprise collaboration features.
                Architected 8 FastAPI microservices with OAuth/JWT, AI chat, real-time WebSocket, and database migration capabilities.
                Built AI-powered schema analysis with OpenAI/Gemini for relationship discovery and code generation in 9+ formats.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Redis</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">OpenAI</Badge>
              </div>
            </div>

            {/* Ignitch */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="https://ignitch.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Live Demo</Button>
                </a>
                <a href="https://github.com/davidx345/ignitch" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-4 py-1 rounded-full text-xs">GitHub</Button>
                </a>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ignitch</h3>
              <p className="text-gray-600 mb-4">AI-Powered Digital Advertising & Billboard Marketplace</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Production platform connecting advertisers with digital billboards using AI-powered content generation and multi-platform social media automation.
                Built FastAPI services for authentication, payments, social media integration, and IoT billboard control with GPT-4 powered content generation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">OpenAI</Badge>
                <Badge variant="outline">WebSockets</Badge>
              </div>
            </div>

            {/* EduNerve */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://github.com/Oluiy/education" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button variant="outline" className="px-4 py-1 rounded-full text-xs">GitHub</Button>
              </a>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">EduNerve</h3>
              </div>
              <p className="text-gray-600 mb-4">Multi-Tenant Educational Management SaaS</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Multi-tenant platform for school management with AI-powered content generation and student analytics.
                Built 9-microservice architecture with complete tenant isolation and role-based access for 5 user types.
                Developed 30+ REST APIs for course/quiz management, bulk CSV imports, and progress tracking.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Redis</Badge>
                <Badge variant="outline">OpenAI</Badge>
                <Badge variant="outline">Docker</Badge>
              </div>
            </div>

            {/* SoliVault */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="https://www.solivolt.live" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Live Demo</Button>
                </a>
                <a href="https://github.com/davidx345/smart-contract-rewriter" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-4 py-1 rounded-full text-xs">GitHub</Button>
                </a>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SoliVault</h3>
              <p className="text-gray-600 mb-4">Smart Contract Security Platform</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Smart contract generation and security analysis platform with enterprise DevOps infrastructure.
                Built 5 microservices architecture for AI-powered smart contract generation with security vulnerability detection and OWASP compliance auditing.
                Implemented CI/CD with GitHub Actions, AWS infrastructure (VPC, RDS, S3, EC2), and Terraform IaC.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">GitHub Actions</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Terraform</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Solidity</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* AI/ML Specialized Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">AI/ML Specialized Projects</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* AI Stock Predictor */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://web-production-ef8d0.up.railway.app/" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Stock Predictor</h3>
              <p className="text-gray-600 mb-4">LSTM + Sentiment Engine</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Developed an AI-driven stock predictor leveraging LSTM neural networks, achieving 85% directional
                accuracy in market movement forecasting with integrated sentiment analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">LSTM</Badge>
                <Badge variant="outline">Sentiment Analysis</Badge>
                <Badge variant="outline">Financial ML</Badge>
              </div>
            </div>

            {/* FashionLens */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://fashionlens.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <h3 className="text-xl font-bold text-gray-900 mb-4">FashionLens</h3>
              <p className="text-gray-600 mb-4">AI Fashion Analysis Engine</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                FashionLens is an AI-powered fashion analysis and recommendation engine that helps users identify clothing styles, 
                detect fashion trends, and receive outfit suggestions. Leveraging computer vision and machine learning, 
                it analyzes garments, textures, and styles to generate personalized recommendations for styling and shopping.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Fashion AI</Badge>
                <Badge variant="outline">Recommendation Systems</Badge>
              </div>
            </div>

            {/* Email Spam Detection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://davidx345-email-spam.onrender.com" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Spam Classifier</h3>
              <p className="text-gray-600 mb-4">ML-Powered Text Classification</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Advanced machine learning classifier for email and SMS spam detection using natural language processing 
                techniques. Features multiple algorithms including Naive Bayes and SVM with 95% accuracy in identifying 
                spam messages through feature extraction and text preprocessing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NLP</Badge>
                <Badge variant="outline">Text Classification</Badge>
                <Badge variant="outline">Machine Learning</Badge>
              </div>
            </div>

            {/* Customer Churn Prediction */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://david345-customerchurn.onrender.com" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Churn Predictor</h3>
              <p className="text-gray-600 mb-4">Predictive Analytics Platform</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Comprehensive customer churn prediction system using ensemble learning methods to identify customers 
                at risk of leaving. Features advanced data preprocessing, feature engineering, and model interpretability 
                to help businesses proactively retain customers and optimize retention strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Predictive Analytics</Badge>
                <Badge variant="outline">Ensemble Learning</Badge>
                <Badge variant="outline">Business Intelligence</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" id="about">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">About</h2>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              My journey in Backend and DevOps engineering is driven by a passion for building scalable, intelligent systems
              that solve real-world problems. With expertise spanning cloud infrastructure, microservices architecture,
              and machine learning, I specialize in creating robust solutions that can handle massive scale while
              maintaining reliability and performance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing my BSc in Computer Science at Covenant University with a 4.83/5.0 GPA, I combine academic knowledge with
              hands-on experience in deploying production systems. Whether it's architecting enterprise-grade microservices
              serving thousands of users or building AI-powered platforms, I'm committed to leveraging technology for meaningful impact.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}