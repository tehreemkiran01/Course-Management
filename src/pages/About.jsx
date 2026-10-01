function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <span className="about-badge">
          🎓 About Our Platform
        </span>

        <h1>About Course Management</h1>

        <p>
          A simple and modern platform designed to make
          course management easier and more organized.
        </p>
      </div>

      <div className="about-container">

        <div className="about-card">
          <div className="about-icon">📚</div>

          <h2>Our Platform</h2>

          <p>
            Course Management System helps administrators
            create, update, and manage courses in one place.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🎯</div>

          <h2>Our Goal</h2>

          <p>
            Our goal is to provide a simple interface where
            courses can be organized and managed efficiently.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🚀</div>

          <h2>Easy Management</h2>

          <p>
            Add, edit, and remove courses easily while
            keeping important course information organized.
          </p>
        </div>

      </div>

      <div className="about-tech">

        <h2>Technology Used</h2>

        <div className="tech-list">
          <span>⚛️ React</span>
          <span>🛣️ React Router</span>
          <span>🎨 CSS</span>
          <span>💻 JavaScript</span>
        </div>

      </div>

    </div>
  );
}

export default About;