import React, { Component } from "react";
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinkedin, FaGithub, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaExternalLinkAlt,
  FaJava, FaPython, FaJs, FaAngular, FaChevronDown, FaCode,
  FaYoutube, FaFilm, FaHeadphones, FaBook, FaBars, FaTimes,
  FaMedium, FaClock, FaCalendarAlt
} from 'react-icons/fa';
import {
  SiRedux, SiTypescript, SiKubernetes, SiApachekafka,
  SiRubysinatra, SiFlask, SiJenkins, SiReduxsaga
} from 'react-icons/si';
import { DiRuby, DiPython } from 'react-icons/di';
import { LiaDocker } from 'react-icons/lia';
import { GiRam } from 'react-icons/gi';

// Import profile image - place your image at assets/profile/pic123.png
let profileImage;
try {
  profileImage = require('../../../assets/profile/pic123.png');
} catch (e) {
  profileImage = null;
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
  name: "Shreenath Chakinala",
  title: "Senior Software Engineer",
  tagline: "Crafting scalable web applications with clean, readable code",
  location: "Dallas, Texas",
  email: "chakinalasreenath@gmail.com",
  phone: "+1 945-272-6273",
  linkedin: "https://www.linkedin.com/in/shreenath-chakinala/",
  github: "https://github.com/sreenathch",
  resumeUrl: "https://drive.google.com/file/d/1rCR3kqyeEZ4snGqiNZA413bBP5o6d5ld/view?usp=sharing",
  careerStartYear: 2014
};

const getYearsOfExperience = () => new Date().getFullYear() - CONFIG.careerStartYear;

const SKILLS = [
  { name: 'JavaScript', level: 90, icon: FaJs, color: '#f7df1e' },
  { name: 'React', level: 90, icon: FaReact, color: '#61dafb' },
  { name: 'React Native', level: 80, icon: FaReact, color: '#61dafb' },
  { name: 'Angular', level: 75, icon: FaAngular, color: '#dd0031' },
  { name: 'Redux', level: 85, icon: SiRedux, color: '#764abc' },
  { name: 'Saga', level: 80, icon: SiReduxsaga, color: '#89d96d' },
  { name: 'TypeScript', level: 80, icon: SiTypescript, color: '#3178c6' },
  { name: 'Ramda', level: 80, icon: GiRam, color: '#ad6cbe' },
  { name: 'Python', level: 70, icon: DiPython, color: '#3776ab' },
  { name: 'Java', level: 65, icon: FaJava, color: '#007396' },
  { name: 'Ruby', level: 70, icon: DiRuby, color: '#cc342d' },
  { name: 'Sinatra', level: 65, icon: SiRubysinatra, color: '#000000' },
  { name: 'Flask', level: 65, icon: SiFlask, color: '#000000' },
  { name: 'Docker', level: 75, icon: LiaDocker, color: '#2496ed' },
  { name: 'Kubernetes', level: 70, icon: SiKubernetes, color: '#326ce5' },
  { name: 'Kafka', level: 65, icon: SiApachekafka, color: '#231f20' },
  { name: 'Jenkins', level: 70, icon: SiJenkins, color: '#d24939' },
  { name: 'Git', level: 85, icon: FaGitAlt, color: '#f05032' },
];

const EXPERIENCE = [
  {
    year: '2023 - Present',
    role: 'Senior Software Engineer',
    company: 'Walmart',
    description: 'Building scalable e-commerce solutions serving millions of customers.',
    tech: ['React', 'Node.js', 'Kafka', 'Kubernetes'],
    type: 'work'
  },
  {
    year: '2020 - 2023',
    role: 'Senior Software Engineer',
    company: 'Copart Inc',
    description: 'Led frontend architecture for online auction platform.',
    tech: ['React', 'Redux', 'Ruby', 'Docker'],
    type: 'work'
  },
  {
    year: '2017 - 2020',
    role: 'Software Engineer',
    company: 'Copart',
    description: 'Developed responsive web applications and component libraries.',
    tech: ['React', 'Angular', 'Python', 'Flask'],
    type: 'work'
  },
  {
    year: '2015 - 2017',
    role: 'Jr. Software Engineer',
    company: 'Study Field Technologies',
    description: 'Started career building web applications.',
    tech: ['JavaScript', 'React', 'Node.js'],
    type: 'work'
  },
  {
    year: '2015 - 2017',
    role: 'MSc. Information & Communication Technology',
    company: 'VNSGU',
    description: '',
    tech: [],
    type: 'education'
  },
  {
    year: '2012 - 2015',
    role: "Bachelor's in Computer Application",
    company: 'C.B.P.C.C',
    description: '',
    tech: [],
    type: 'education'
  }
];

const NPM_PACKAGES = [
  {
    name: 'direct-drop-area',
    description: 'Lightweight drag & drop file upload component for React',
    url: 'https://www.npmjs.com/package/direct-drop-area'
  },
  {
    name: 'get-detailed-location',
    description: 'Get detailed location information from coordinates',
    url: 'https://www.npmjs.com/package/get-detailed-location'
  }
];

const BLOG_POSTS = [
  {
    title: 'Angular vs React in 2025: Which One Should You Actually Pick?',
    description: 'A practical, no-BS comparison of Angular and React in 2025. Covering signals, server components, and when to use each framework.',
    url: 'https://medium.com/@chakinalasreenath/angular-vs-react-in-2025-which-one-should-you-actually-pick-57f0629c3fda',
    date: 'Dec 2024',
    readTime: '8 min read',
    tags: ['Angular', 'React', 'JavaScript']
  }
];

const HOBBIES = [
  { name: 'Coding', icon: FaCode, color: '#61dafb' },
  { name: 'Reading', icon: FaBook, color: '#ad6cbe' },
  { name: 'YouTube', icon: FaYoutube, color: '#ff0000' },
  { name: 'Movies', icon: FaFilm, color: '#333333' },
  { name: 'Music', icon: FaHeadphones, color: '#1db954' },
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'home',
      scrolled: false,
      menuOpen: false
    };

    this.sectionRefs = {
      home: React.createRef(),
      about: React.createRef(),
      skills: React.createRef(),
      experience: React.createRef(),
      blog: React.createRef(),
      packages: React.createRef(),
      contact: React.createRef()
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 50;
    const scrollPosition = window.scrollY + 150;

    let activeSection = 'home';
    Object.keys(this.sectionRefs).forEach((section) => {
      const ref = this.sectionRefs[section];
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection = section;
        }
      }
    });

    this.setState({ scrolled, activeSection });
  };

  scrollTo = (section) => {
    const ref = this.sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({ menuOpen: false });
  };

  toggleMenu = () => {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  };

  handleFormSubmit = (e) => {
      e.preventDefault();

      const { formName, formEmail, formMessage } = this.state;

      const subject = `Portfolio Contact from ${formName}`;
      const body = `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`;

      const mailtoLink = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Method: Create a temporary link and click it
      const link = document.createElement('a');
      link.href = mailtoLink;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      this.setState({ formSubmitted: true });

      // Reset form after 5 seconds
      setTimeout(() => {
        this.setState({
          formName: '',
          formEmail: '',
          formMessage: '',
          formSubmitted: false
        });
      }, 5000);
    };


  render() {
    const { activeSection, scrolled, menuOpen } = this.state;
    const navItems = ['home', 'about', 'skills', 'experience', 'blog', 'packages', 'contact'];

    return (
      <div className="portfolio">
        {/* Navbar */}
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
          <div className="nav__container">
            <div className="nav__logo" onClick={() => this.scrollTo('home')}>
              <span>SC</span>
            </div>

            <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`nav__link ${activeSection === item ? 'nav__link--active' : ''}`}
                  onClick={() => this.scrollTo(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <a
                href={CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav__resume"
              >
                <FaDownload /> Resume
              </a>
            </div>

            <button className="nav__toggle" onClick={this.toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={this.sectionRefs.home} className="hero">
          <div className="hero__particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="hero__particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          <div className="hero__content">
            <p className="hero__greeting fadeInUp">Hello, I'm</p>
            <h1 className="hero__name fadeInUp delay-1">{CONFIG.name}</h1>
            <h2 className="hero__title fadeInUp delay-2">{CONFIG.title}</h2>
            <p className="hero__tagline fadeInUp delay-3">
              {getYearsOfExperience()}+ years {CONFIG.tagline}
            </p>

            <div className="hero__buttons fadeInUp delay-4">
              <button className="btn btn--primary" onClick={() => this.scrollTo('contact')}>
                Get In Touch
              </button>
              <button className="btn btn--outline" onClick={() => this.scrollTo('about')}>
                Learn More
              </button>
            </div>

            <div className="hero__social fadeInUp delay-5">
              <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={`mailto:${CONFIG.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero__scroll" onClick={() => this.scrollTo('about')}>
            <span>Scroll Down</span>
            <FaChevronDown className="hero__scroll-icon" />
          </div>
        </section>

        {/* About Section */}
        <section ref={this.sectionRefs.about} className="about">
          <div className="container">
            <h2 className="section__title">About Me</h2>

            <div className="about__grid">
              <div className="about__image">
                <div className="about__image-box">
                  {profileImage ? (
                    <img src={profileImage} alt="Shreenath Chakinala" />
                  ) : (
                    <div className="about__image-placeholder">SC</div>
                  )}
                </div>
              </div>

              <div className="about__content">
                <p>
                  With <strong>{getYearsOfExperience()}+ years</strong> of software development experience,
                  I build scalable web applications across e-commerce, online auctions, automotive,
                  and education industries.
                </p>
                <p>
                  My expertise centers on modern frontend development with <strong>React and React Native</strong>,
                  designing robust state management using Redux, Saga, Thunk, XState, and Hooks.
                </p>
                <p>
                  I bring full-stack capabilities with backend experience in Ruby Sinatra, Python Flask,
                  and Java. My toolkit extends to distributed systems (Kafka), containerization (Docker),
                  orchestration (Kubernetes), and CI/CD pipelines (Jenkins).
                </p>
                <p>
                  I've contributed to platforms serving <strong>millions of users</strong>, built component
                  libraries adopted across teams, and established practices that improve code quality
                  and delivery speed.
                </p>
              </div>
            </div>

            <div className="about__info">
              <a href={`tel:${CONFIG.phone}`} className="about__info-item">
                <FaPhone />
                <span>{CONFIG.phone}</span>
              </a>
              <a href={`mailto:${CONFIG.email}`} className="about__info-item">
                <FaEnvelope />
                <span>{CONFIG.email}</span>
              </a>
              <div className="about__info-item">
                <FaMapMarkerAlt />
                <span>{CONFIG.location}</span>
              </div>
              <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="about__info-item">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="about__info-item">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>

            <div className="about__hobbies">
              <h3>Things I Love</h3>
              <div className="about__hobbies-grid">
                {HOBBIES.map((hobby) => (
                  <div key={hobby.name} className="hobby-card">
                    <hobby.icon style={{ color: hobby.color }} />
                    <span>{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={this.sectionRefs.skills} className="skills">
          <div className="container">
            <h2 className="section__title">Skills & Technologies</h2>
            <p className="section__subtitle">Technologies I work with daily</p>

            <div className="skills__grid">
              {SKILLS.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="skill-card__icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h3 className="skill-card__name">{skill.name}</h3>
                  <div className="skill-card__bar">
                    <div
                      className="skill-card__progress"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                      }}
                    />
                  </div>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={this.sectionRefs.experience} className="experience">
          <div className="container">
            <h2 className="section__title">Experience & Education</h2>
            <p className="section__subtitle">My professional journey</p>

            <div className="timeline">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className={`timeline__item timeline__item--${exp.type}`}>
                  <div className="timeline__dot" />
                  <div className="timeline__content">
                    <span className="timeline__year">{exp.year}</span>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <h4 className="timeline__company">{exp.company}</h4>
                    {exp.description && <p className="timeline__desc">{exp.description}</p>}
                    {exp.tech.length > 0 && (
                      <div className="timeline__tags">
                        {exp.tech.map((t) => (
                          <span key={t} className="timeline__tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section ref={this.sectionRefs.blog} className="blog">
          <div className="container">
            <h2 className="section__title">Blog</h2>
            <p className="section__subtitle">Thoughts and tutorials</p>

            <div className="blog__grid">
              {BLOG_POSTS.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card"
                >
                  <div className="blog-card__header">
                    <FaMedium className="blog-card__icon" />
                    <FaExternalLinkAlt className="blog-card__link" />
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__desc">{post.description}</p>
                  <div className="blog-card__meta">
                    <span className="blog-card__date">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="blog-card__read">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  <div className="blog-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-card__tag">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}

              {/* Follow on Medium Card */}
              <a
                href="https://medium.com/@chakinalasreenath"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card blog-card--cta"
              >
                <div className="blog-card__cta-content">
                  <FaMedium className="blog-card__cta-icon" />
                  <h3>Follow me on Medium</h3>
                  <p>Read more articles about React, Angular, and modern web development</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* NPM Packages Section */}
        <section ref={this.sectionRefs.packages} className="packages">
          <div className="container">
            <h2 className="section__title">NPM Packages</h2>
            <p className="section__subtitle">Open source contributions</p>

            <div className="packages__grid">
              {NPM_PACKAGES.map((pkg) => (
                <a
                  key={pkg.name}
                  href={pkg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-card"
                >
                  <div className="package-card__header">
                    <span className="package-card__icon">📦</span>
                    <FaExternalLinkAlt className="package-card__link" />
                  </div>
                  <h3 className="package-card__name">{pkg.name}</h3>
                  <p className="package-card__desc">{pkg.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={this.sectionRefs.contact} className="contact">
          <div className="container">
            <h2 className="section__title">Get In Touch</h2>
            <p className="section__subtitle">Let's work together</p>

            <div className="contact__grid">
              <div className="contact__info">
                <h3>Let's talk about your project</h3>
                <p>
                  I'm currently available for freelance work and full-time positions.
                  If you have a project that needs some creative work, I'd love to hear about it.
                </p>

                <div className="contact__links">
                  <a href={`mailto:${CONFIG.email}`} className="contact__link">
                    <FaEnvelope />
                    <span>{CONFIG.email}</span>
                  </a>
                  <a href={`tel:${CONFIG.phone}`} className="contact__link">
                    <FaPhone />
                    <span>{CONFIG.phone}</span>
                  </a>
                  <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                    <FaLinkedin />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                    <FaGithub />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              <form className="contact__form" onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    required
                    value={this.state.formName}
                    onChange={(e) => this.setState({ formName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    required
                    value={this.state.formEmail}
                    onChange={(e) => this.setState({ formEmail: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="contactMessage"
                    placeholder="Your Message"
                    rows="5"
                    required
                    value={this.state.formMessage}
                    onChange={(e) => this.setState({ formMessage: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
                {this.state.formSubmitted && (
                  <p className="contact__success">
                    ✓ Opening your email client...
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer__content">
              <p>&copy; {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
              <div className="footer__social">
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={`mailto:${CONFIG.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}