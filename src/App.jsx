
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import AdmissionsSection from './components/AdmissionsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ConsultingSection from './components/ConsultingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    heardFrom: ''
  });
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const courses = [
    {
      title: "Web Development",
      subtitle: "Frontend and Fullstack",
      description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build modern web applications.",
      duration: "12 Weeks",
      certification: "Included",
      icon: "💻"
    },
    {
      title: "Graphic Design",
      subtitle: "CorelDRAW, Photoshop, Illustrator",
      description: "Create stunning visual content with industry-standard design tools and techniques.",
      duration: "8 Weeks",
      certification: "Portfolio Development",
      icon: "🎨"
    },
    {
      title: "Video Editing",
      subtitle: "PowerDirector, Premiere Pro",
      description: "Learn professional video editing, transitions, effects, color grading, and sound sync.",
      duration: "6 Weeks",
      certification: "Final Project: Showreel",
      icon: "🎬"
    },
    {
      title: "Microsoft Office Suite",
      subtitle: "Word, Excel, PowerPoint, Access",
      description: "Master essential office productivity tools for admins, managers, and entrepreneurs.",
      duration: "4 Weeks",
      certification: "Certificate of Proficiency",
      icon: "📊"
    },
    {
      title: "Computer Engineering & Hardware Maintenance",
      subtitle: "PC Assembly & Troubleshooting",
      description: "Learn to assemble, troubleshoot, upgrade computers and understand networking basics.",
      duration: "8 Weeks",
      certification: "Hands-on Lab Access",
      icon: "🔧"
    },
    {
      title: "Data Analysis and Excel",
      subtitle: "Advanced Excel & Power BI",
      description: "Transform data into insights with advanced formulas, pivot tables, charts, and dashboards.",
      duration: "6 Weeks",
      certification: "Industry-Recognized Badge",
      icon: "📈"
    },
    {
      title: "Digital Marketing and SEO Basics",
      subtitle: "Google Ads, Facebook, Analytics",
      description: "Build and run real marketing campaigns with SEO fundamentals and analytics tools.",
      duration: "6 Weeks",
      certification: "Certification + Free Tools Access",
      icon: "📱"
    },
    {
      title: "AutoCAD and Engineering Design",
      subtitle: "2D/3D Drafting & Design",
      description: "Create architectural and mechanical designs with industry-standard CAD software.",
      duration: "10 Weeks",
      certification: "Autodesk Certified Curriculum",
      icon: "📐"
    }
  ];

  const advantages = [
    {
      title: "16+ Years of Excellence",
      description: "Proven track record since 2008, trusted by thousands of students and corporate clients."
    },
    {
      title: "Experienced Instructors",
      description: "Learn from certified professionals with real industry experience, not just teachers."
    },
    {
      title: "Hands-On Practical Training",
      description: "80% lab work, 20% theory — learn by doing with real-world projects."
    },
    {
      title: "Industry-Standard Certifications",
      description: "Globally recognized credentials to boost your resume and career prospects."
    },
    {
      title: "Strong Career Support",
      description: "CV workshops, interview preparation, and job referral services included."
    },
    {
      title: "Flexible Schedules",
      description: "Weekend, evening, and fast-track options to fit your busy lifestyle."
    }
  ];

  const consultingServices = [
    {
      title: "IT Consulting",
      description: "Infrastructure audit & optimization, cybersecurity assessment, cloud migration strategy."
    },
    {
      title: "Software Solutions",
      description: "Custom web & mobile app development, database design & automation, ERP & CRM implementation."
    },
    {
      title: "Corporate Training",
      description: "Tailored programs for your team, delivered onsite or virtually with employee certifications."
    }
  ];

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactFormChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      heardFrom: ''
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'admissions', 'why', 'consulting', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <HighlightsSection />
      <AboutSection />
      <CoursesSection courses={courses} scrollToSection={scrollToSection} />
      <AdmissionsSection
        courses={courses}
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
      <WhyChooseUsSection advantages={advantages} />
      <ConsultingSection consultingServices={consultingServices} scrollToSection={scrollToSection} />
      <ContactSection
        contactFormData={contactFormData}
        handleContactFormChange={handleContactFormChange}
        handleContactSubmit={handleContactSubmit}
      />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
