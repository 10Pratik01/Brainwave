<h1 align="center">🧠 Brainwave - AI Landing Page</h1>
<p align="center">
  A cutting-edge AI-powered landing page built with <b>React</b>, <b>GSAP</b>, and <b>react-just-parallax</b>. Experience stunning animations, parallax effects, and modern UI/UX design showcasing the future of artificial intelligence.
</p>
<p align="center">
  <a href="https://brainwave-lilac.vercel.app/" target="_blank">🌐 Live Demo</a> |
  <a href="https://github.com/10Pratik01/Brainwave" target="_blank">📂 Repository</a>
</p>

<h2>🚀 Features</h2>
<ol>
  <li>🤖 <strong>AI-Focused Design</strong>: Modern landing page showcasing AI capabilities</li>
  <li>✨ <strong>Smooth Animations</strong>: Powered by GSAP for fluid transitions and micro-interactions</li>
  <li>🎭 <strong>Parallax Scrolling</strong>: Immersive scrolling experience with react-just-parallax</li>
  <li>📱 <strong>Fully Responsive</strong>: Optimized for all devices and screen sizes</li>
  <li>⚡ <strong>Lightning Fast</strong>: Built with Vite for optimal performance</li>
  <li>🎨 <strong>Modern UI/UX</strong>: Clean, intuitive design with gradient backgrounds</li>
  <li>🔧 <strong>Reusable Components</strong>: Modular component architecture</li>
</ol>

<h2>🌐 Live Demo</h2>
<p align="center">
  <a href="https://brainwave-lilac.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-blue?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
</p>
Check out the live version: brainwave-lilac.vercel.app

<h2>🛠️ Tech Stack</h2>
<ol>
  <li>⚛️ <strong>Frontend:</strong> React 18, HTML5, CSS3</li>
  <li>🎬 <strong>Animations:</strong> GSAP (GreenSock Animation Platform)</li>
  <li>🌊 <strong>Parallax Effects:</strong> react-just-parallax</li>
  <li>⚙️ <strong>Build Tool:</strong> Vite</li>
  <li>🚀 <strong>Deployment:</strong> Vercel</li>
  <li>📦 <strong>Package Manager:</strong> npm</li>
</ol>

<h2>📁 Project Structure</h2>
<pre>
Brainwave/
├── src/
│   ├── assets/                    # Static assets (images, icons, etc.)
│   ├── components/                # React components
│   │   ├── design/               # Design-related components
│   │   │   ├── Benefits.jsx      # Benefits showcase section
│   │   │   ├── Button.jsx        # Reusable button component
│   │   │   ├── Collaboration.jsx # Collaboration features
│   │   │   ├── CompanyLogos.jsx  # Company logos carousel
│   │   │   ├── Footer.jsx        # Footer component
│   │   │   ├── Generating.jsx    # AI generation animation
│   │   │   ├── Header.jsx        # Navigation header
│   │   │   ├── Heading.jsx       # Section headings
│   │   │   ├── Hero.jsx          # Hero landing section
│   │   │   ├── Notification.jsx  # Notification components
│   │   │   ├── Pricing.jsx       # Pricing section
│   │   │   ├── PricingList.jsx   # Pricing plans list
│   │   │   ├── Roadmap.jsx       # Development roadmap
│   │   │   ├── Section.jsx       # Section wrapper
│   │   │   ├── Services.jsx      # Services showcase
│   │   │   └── Tagline.jsx       # Tagline component
│   ├── constants/                # Application constants
│   │   └── index.js              # Constants and configuration
│   ├── utils/                    # Utility functions
│   │   └── animation.js          # GSAP animation utilities
│   ├── App.jsx                   # Main App component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── public/                       # Public assets
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
</pre>

<h2>📦 Getting Started</h2>
<h3>🔧 Prerequisites</h3>
<ul>
  <li>Node.js (v16 or later)</li>
  <li>npm or yarn package manager</li>
  <li>Git</li>
</ul>
<h3>📥 Installation</h3>
<ol>
  <li>Clone the repository:
    <pre>git clone https://github.com/10Pratik01/Brainwave.git
cd Brainwave</pre>
  </li>
  <li>Install dependencies:
    <pre>npm install</pre>
  </li>
  <li>Start the development server:
    <pre>npm run dev</pre>
  </li>
  <li>Open your browser and navigate to:
    <pre>http://localhost:5173</pre>
  </li>
</ol>

<h2>🎨 Key Sections</h2>
<ul>
  <li><strong>Hero Section:</strong> Eye-catching landing with AI-themed animations</li>
  <li><strong>Benefits:</strong> Showcase of AI capabilities and advantages</li>
  <li><strong>Collaboration:</strong> Team collaboration features with interactive elements</li>
  <li><strong>Services:</strong> AI services with parallax scrolling effects</li>
  <li><strong>Pricing:</strong> Flexible pricing plans with hover animations</li>
  <li><strong>Roadmap:</strong> Development timeline with scroll-triggered reveals</li>
  <li><strong>Company Logos:</strong> Trusted partners carousel</li>
</ul>

<h2>⚡ Animation Features</h2>
<ul>
  <li><strong>GSAP Timelines:</strong> Complex animation sequences and staggered effects</li>
  <li><strong>ScrollTrigger:</strong> Scroll-based animations and reveals</li>
  <li><strong>Parallax Scrolling:</strong> Multi-layered depth effects</li>
  <li><strong>Hover Interactions:</strong> Button and card hover animations</li>
  <li><strong>Loading States:</strong> Smooth page and component transitions</li>
  <li><strong>Micro-interactions:</strong> Subtle UI feedback animations</li>
</ul>

<h2>📜 Available Scripts</h2>
<ul>
  <li><code>npm run dev</code> – Start development server with hot reload</li>
  <li><code>npm run build</code> – Build optimized production bundle</li>
  <li><code>npm run preview</code> – Preview production build locally</li>
  <li><code>npm run lint</code> – Run ESLint for code quality</li>
</ul>

<h2>🎯 Code Examples</h2>
<h3>GSAP Animation Implementation:</h3>
<pre>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Hero section fade-in animation
gsap.timeline()
.from('.hero-title', {
duration: 1.2,
y: 100,
opacity: 0,
ease: 'power3.out'
})
.from('.hero-subtitle', {
duration: 1,
y: 50,
opacity: 0,
ease: 'power2.out'
}, '-=0.5');
</pre>
<h3>Parallax Scrolling:</h3>
<pre>
import { Parallax } from 'react-just-parallax';
<Parallax speed={-0.3}>
<div className="floating-element">
<img src="/ai-graphic.png" alt="AI Graphic" />
</div>
</Parallax>
</pre>

<h2>🌟 Performance Optimizations</h2>
<ul>
  <li><strong>Code Splitting:</strong> Dynamic imports for better loading</li>
  <li><strong>Asset Optimization:</strong> Compressed images and lazy loading</li>
  <li><strong>Animation Cleanup:</strong> Proper GSAP timeline management</li>
  <li><strong>Bundle Analysis:</strong> Optimized build size</li>
  <li><strong>Caching Strategy:</strong> Efficient resource caching</li>
</ul>

<h2>📱 Browser Support</h2>
<ul>
  <li>✅ Chrome (latest)</li>
  <li>✅ Firefox (latest)</li>
  <li>✅ Safari (latest)</li>
  <li>✅ Edge (latest)</li>
  <li>✅ Mobile browsers (iOS Safari, Chrome Mobile)</li>
</ul>

<h2>🚀 Deployment</h2>
This project is deployed on Vercel. To deploy your own version:
<ol>
  <li>Fork this repository</li>
  <li>Connect your Vercel account to GitHub</li>
  <li>Import your forked repository</li>
  <li>Configure build settings (Vite preset)</li>
  <li>Deploy! 🎉</li>
</ol>

<h2>🤝 Contributing</h2>
Contributions are welcome! Please follow these steps:
<ol>
  <li>Fork the repository</li>
  <li>Create your feature branch: <code>git checkout -b feature/AmazingFeature</code></li>
  <li>Commit your changes: <code>git commit -m 'Add some AmazingFeature'</code></li>
  <li>Push to the branch: <code>git push origin feature/AmazingFeature</code></li>
  <li>Open a Pull Request</li>
</ol>

<h2>📄 License</h2>
This project is licensed under the MIT License - see the LICENSE file for details.

<h2>👨‍💻 Author</h2>
Pratik - GitHub Profile

<h2>⭐ Show Your Support</h2>
If you like this project, please consider giving it a ⭐ on GitHub! Your support helps me create more amazing projects.
<p align="center">
  <a href="https://github.com/10Pratik01/Brainwave">
    <img src="https://img.shields.io/github/stars/10Pratik01/Brainwave?style=social" alt="GitHub Stars">
  </a>
</p>

<h2>📬 Contact</h2>
Have questions or suggestions? Feel free to reach out or open an issue on GitHub!
