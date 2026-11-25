import { useState } from "react";

import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  Activity,
  CloudSun,
  ScanSearch,
  Leaf,
  Menu,
  X,
  Upload,
  CheckCircle2,
  TrendingUp,
  Microscope,
  HeartPulse,
  ChevronRight
} from "lucide-react";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image.");
        return;
      }

      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="website">

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="brand">
          <div className="brand-icon">
            <Sprout size={25} />
          </div>
          <span>CropCare<span className="brand-ai">.AI</span></span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#detection" onClick={() => setMenuOpen(false)}>Disease Detection</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        </div>

        <a href="#detection" className="nav-cta">
          Get Started <ArrowRight size={16} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </nav>


      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-left">

          <div className="hero-label">
            <span className="live-dot"></span>
            INTELLIGENT AGRICULTURE PLATFORM
          </div>

          <h1>
            Smarter Farming.
            <br />
            <span>Healthier Crops.</span>
            <br />
            Better Tomorrow.
          </h1>

          <p className="hero-description">
            Protect your crops with Artificial Intelligence.
            Detect plant diseases early, monitor crop health
            and get intelligent recommendations for better farming.
          </p>

          <div className="hero-actions">

            <a href="#detection" className="btn-primary">
              Analyze Your Crop <ArrowRight size={18} />
            </a>

            <a href="#features" className="btn-secondary">
              Explore Platform
            </a>

          </div>

          <div className="hero-trust">
            <ShieldCheck size={19} />
            <span>AI-powered crop protection and monitoring</span>
          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-right">

          <div className="hero-image-container">

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200"
              alt="Agricultural farmland"
              className="hero-image"
            />

            <div className="image-overlay"></div>

            <div className="image-content">
              <span>SMART AGRICULTURE</span>
              <h3>Growing a healthier future.</h3>
            </div>

            <div className="health-card">

              <div className="health-icon">
                <HeartPulse size={23} />
              </div>

              <div>
                <small>Crop Intelligence</small>
                <h4>AI Health Monitoring</h4>
                <span>Early detection technology</span>
              </div>

              <CheckCircle2 className="health-check" />

            </div>

          </div>

          <div className="floating-stat">
            <div className="stat-icon">
              <TrendingUp size={21} />
            </div>

            <div>
              <h3>Early Detection</h3>
              <p>Prevent crop damage</p>
            </div>
          </div>

        </div>

      </section>


      {/* TRUST BAR */}

      <section className="trust-bar">

        <div>
          <ScanSearch />
          <span>AI Disease Detection</span>
        </div>

        <div>
          <Activity />
          <span>Crop Health Analysis</span>
        </div>

        <div>
          <CloudSun />
          <span>Weather Intelligence</span>
        </div>

        <div>
          <Sprout />
          <span>Smart Recommendations</span>
        </div>

      </section>


      {/* FEATURES */}

      <section className="features section-padding" id="features">

        <div className="section-top">

          <div>
            <span className="section-label">OUR CAPABILITIES</span>

            <h2>
              Everything Your Crops
              <br />
              Need to <span>Thrive.</span>
            </h2>
          </div>

          <p>
            Powerful AI-driven technology to help farmers
            make smarter decisions and protect their crops.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card featured-card">

            <div className="feature-icon">
              <ScanSearch size={27} />
            </div>

            <span className="feature-number">01</span>

            <h3>AI Disease Detection</h3>

            <p>
              Upload crop images and identify potential plant
              diseases using computer vision technology.
            </p>

            <a href="#detection">
              Explore detection <ArrowRight size={16} />
            </a>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Activity size={27} />
            </div>

            <span className="feature-number">02</span>

            <h3>Crop Health Monitoring</h3>

            <p>
              Analyse crop conditions and assess disease
              severity for better crop management.
            </p>

            <a href="#detection">
              Learn more <ArrowRight size={16} />
            </a>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <CloudSun size={27} />
            </div>

            <span className="feature-number">03</span>

            <h3>Weather Intelligence</h3>

            <p>
              Understand environmental conditions and
              identify weather-related crop risks.
            </p>

            <a href="#about">
              Learn more <ArrowRight size={16} />
            </a>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <Microscope size={27} />
            </div>

            <span className="feature-number">04</span>

            <h3>Smart Recommendations</h3>

            <p>
              Receive preventive measures and treatment
              suggestions based on AI analysis.
            </p>

            <a href="#detection">
              Learn more <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* DISEASE DETECTION */}

      <section className="detection-section" id="detection">

        <div className="detection-wrapper">

          <div className="detection-info">

            <span className="section-label light-label">
              AI POWERED ANALYSIS
            </span>

            <h2>
              One Image.
              <br />
              <span>Smarter Decisions.</span>
            </h2>

            <p>
              Upload a photograph of your crop leaf.
              Our AI-powered system will analyse it to
              help identify possible plant diseases.
            </p>

            <div className="detection-points">

              <div>
                <CheckCircle2 />
                <span>Crop image analysis</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Disease identification</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Smart treatment recommendations</span>
              </div>

            </div>

          </div>


          <div className="upload-card">

            <div className="upload-heading">
              <div className="upload-icon">
                <ScanSearch size={25} />
              </div>

              <div>
                <h3>Crop Disease Scanner</h3>
                <p>Upload your crop leaf image</p>
              </div>
            </div>


            <label className="upload-area">

              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected crop"
                  className="preview-image"
                />
              ) : (
                <>
                  <div className="upload-circle">
                    <Upload size={27} />
                  </div>

                  <h4>Choose a crop image</h4>

                  <p>
                    Click to browse an image from your device
                  </p>

                  <span>JPG, JPEG or PNG</span>
                </>
              )}

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImage}
                hidden
              />

            </label>

            {selectedImage && (
              <div className="selected-message">
                <CheckCircle2 size={17} />
                Image selected successfully
              </div>
            )}

            <button
              className="analyze-btn"
              disabled={!selectedImage}
              onClick={() => alert(
                "Image preview is ready. AI backend integration is the next step."
              )}
            >
              Analyze Crop Image <ArrowRight size={18} />
            </button>

            <small className="upload-note">
              Your crop analysis will be powered by our AI model.
            </small>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section section-padding" id="about">

        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=900"
            alt="Healthy green agricultural crops"
          />

          <div className="about-badge">
            <Leaf size={24} />
            <div>
              <h4>Smart Agriculture</h4>
              <p>Technology for farmers</p>
            </div>
          </div>
        </div>


        <div className="about-content">

          <span className="section-label">ABOUT CROPCARE.AI</span>

          <h2>
            Technology That
            <span> Protects Every Harvest.</span>
          </h2>

          <p>
            CropCare-AI is an intelligent agriculture platform
            designed to support farmers through Artificial
            Intelligence, Machine Learning and Computer Vision.
          </p>

          <p>
            Our mission is to help identify crop diseases early,
            reduce unnecessary pesticide usage and support
            healthier agricultural practices.
          </p>

          <a href="#detection" className="about-link">
            Discover Our Platform <ChevronRight size={19} />
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <a href="#home" className="brand footer-logo">
              <div className="brand-icon">
                <Sprout size={24} />
              </div>

              <span>CropCare<span className="brand-ai">.AI</span></span>
            </a>

            <p>
              Empowering farmers with intelligent crop
              monitoring and AI-powered disease detection.
            </p>

          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#features">Features</a>
            <a href="#detection">Disease Detection</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h4>Technology</h4>
            <a href="#features">Artificial Intelligence</a>
            <a href="#features">Computer Vision</a>
            <a href="#features">Smart Agriculture</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 CropCare-AI. All rights reserved.</p>
          <span>Smart Agriculture. Better Tomorrow.</span>
        </div>

      </footer>

    </div>
  );
}

export default App;