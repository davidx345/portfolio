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
              DevOps & AI Engineer | Cloud Infrastructure | Scalable Microservices
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="davidayo2603@gmail.com"
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
              Full-stack AI & DevOps Engineer and founder with hands-on experience in backend architecture, AI systems, and developer platforms.
              I build production grade tools using FastAPI, microservices, and CI/CD automation including SchemaSage, 
              an AI-powered schema and API generator, and EduNerve, an LMS transforming WAEC learning currently being built for over 1000 students.
               My work spans intelligent automation, data-driven systems, scalable infrastructure, and AI powered products that solve real-world problems.
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
              <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Bash</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">GitHub Actions</Badge>
                <Badge variant="secondary">DigitalOcean</Badge>
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">Terraform</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">scikit-learn</Badge>
                <Badge variant="secondary">OpenCV</Badge>
                <Badge variant="secondary">LLMs</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">RESTful APIs</Badge>
                <Badge variant="secondary">Nginx</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="mb-16" id="projects">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Highlights</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* SchemaSage */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://schemasage.vercel.app" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">SchemaSage</h3>
                <Badge variant="secondary" className="text-xs">In Progress</Badge>
              </div>
              <p className="text-gray-600 mb-4">7-Microservice Backend</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Designed and implemented 7 FastAPI microservices containerized with Docker, built to support 10,000+ monthly
                active users with 99.9% uptime. Reduced deployment time by 60% through automated CI/CD workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">GitHub Actions</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
            </div>

            {/* EduNerve */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900">EduNerve LMS</h3>
                <Badge variant="secondary" className="text-xs">In Progress</Badge>
              </div>
              <p className="text-gray-600 mb-4">Learning Platform being built for 1000+ Students</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Engineered an offline-first Learning Management System serving 1000+ students across West Africa,
                integrating GPT-4 API for personalized learning recommendations with 40% improvement in engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">GPT-4 API</Badge>
                <Badge variant="outline">Microservices</Badge>
                <Badge variant="outline">Real-time Analytics</Badge>
              </div>
            </div>

            {/* SoliVolt */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
              <a href="https://smart-contract-rewriter.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-4 py-1 rounded-full text-xs">Visit Site</Button>
              </a>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SoliVolt</h3>
              <p className="text-gray-600 mb-4">AI Smart Contract Rewriter</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Engineered an assistant tool for analyzing and rewriting Solidity smart contracts with risk flagging system for
                vulnerability detection, enhancing security audit processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Solidity</Badge>
                <Badge variant="outline">AI Analysis</Badge>
                <Badge variant="outline">Security Auditing</Badge>
              </div>
            </div>

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
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16" id="experience">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">HNG Internship – DevOps Intern [Stage 3]</h3>
              <p className="text-blue-600 font-medium mb-4">Remote</p>
              <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
                <li>• Automated CI/CD pipelines for 6+ microservices using GitHub Actions, reducing deployment time by 60% and increasing release frequency from weekly to daily.</li>
                <li>• Worked on provisioning and managing cloud infrastructure on Azure, implementing infrastructure as code and containerization using Docker.</li>
                <li>• Contributed to Agile workflows using Jira and Git for ticketing and version control, and actively participated in stand-ups and sprint reviews.</li>
                <li>• Ensured seamless deployment with Nginx and implemented monitoring practices using Prometheus and Grafana.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI/ML Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">AI/ML Specialized Projects</h2>
          <div className="grid lg:grid-cols-2 gap-6">
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

        

        {/* Education Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" id="education">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">BSc. Computer Science</h3>
              <p className="text-blue-600 font-medium">Covenant University (Expected 2027)</p>
              <p className="text-sm text-gray-600 mt-2">
                Relevant Coursework: Software Engineering, AI Fundamentals, Databases, Data Structures & Algorithms,
                Operating Systems, Cloud Computing, Distributed Systems
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
      </main>
    </div>
  )
}
