function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">🎓 Learn • Grow • Succeed</span>

          <h1>Build Your Future With Our Courses</h1>

          <p>
            Explore quality courses, learn new skills, and take the next
            step toward your goals.
          </p>

          <button className="hero-button">
            Explore Courses →
          </button>
        </div>

        <div className="hero-card">
          <div className="hero-icon">📚</div>
          <h3>Learn New Skills</h3>
          <p>Discover courses designed to help you grow.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Courses?</h2>

        <p className="section-text">
          Everything you need to learn and improve your skills.
        </p>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Quality Courses</h3>
            <p>
              Learn from carefully organized and useful course content.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Learn Your Way</h3>
            <p>
              Explore different courses and learn at your own pace.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Grow Your Skills</h3>
            <p>
              Build knowledge and develop skills for your future.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;