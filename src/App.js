import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 🌟 NAVIGATION BAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 🏠 HOME SECTION */}
      <section id="home" className="home">
        {/* 👇 You can add your photo here later */}
        {/* <img src="/your-photo.jpg" alt="Venkatesh" className="profile-pic" /> */}
        <h1><span>Abburi Venkateswarlu</span></h1>
        <p>B.Tech Student | Web Developer | Java Programmer</p>
        <a href="#contact" className="btn">Hire Me</a>
      </section>

      {/* 👤 ABOUT SECTION */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a B.Tech student in Electrical and Electronics Engineering at
          RGUKT Ongole, passionate about web development and building
          interactive, user-friendly applications. I enjoy learning React and
          modern frontend technologies to design practical, responsive
          solutions.
        </p>
      </section>

      {/* 💻 SKILLS SECTION */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming: Java</li>
          <li>Web Development: HTML, CSS, JavaScript, Bootstrap, React (Basics)</li>
          <li>Database: Oracle SQL, PL/SQL</li>
          <li>Tools: Arduino, VS Code, Eclipse, Matlab</li>
          <li>Soft Skills: Problem Solving, Teamwork, Communication</li>
        </ul>
      </section>

      {/* 🚀 PROJECTS SECTION */}
      <section id="projects">
        <h2>Web Development Projects</h2>

        <div className="project">
          <h3>🛍️ E-Commerce Website (FakeStoreAPI)</h3>
          <p>
            Developed a React-based e-commerce website that fetches products
            from the FakeStoreAPI. Implemented product listings, cart management,
            and detailed product views using React state and components.
          </p>
          <a
            href="https://github.com/venkatesh-codes/ecommerce-fakestoreapi"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project">
          <h3>🌐 Portfolio Website</h3>
          <p>
            Designed and developed a personal portfolio using React.js to
            showcase my projects, skills, and certifications. Styled with modern
            CSS for a clean, professional design.
          </p>
          <a
            href="https://github.com/venkatesh-codes/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project">
          <h3>📰 News Web App</h3>
          <p>
            A responsive web app built using HTML, CSS, and JavaScript
            that fetches live news articles by category using a public API.
          </p>
          <a
            href="https://github.com/venkatesh-codes/newsapp"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project">
          <h3>📋 Student Management Dashboard</h3>
          <p>
            Built a React-based dashboard for managing student records with
            CRUD operations. Used Bootstrap for design and React hooks for
            dynamic state updates.
          </p>
          <a
            href="https://github.com/venkatesh-codes/student-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </section>

      {/* 🎓 CERTIFICATIONS SECTION */}
      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Introduction to Machine Learning and AI – Raspberry Pi Foundation</li>
          <li>Generative AI for Business Leaders – edX</li>
          <li>PV Energy Conversion – edX</li>
          <li>Excel for Beginners – edX</li>
        </ul>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section id="contact">
        <h2>Contact</h2>
        <p>📍 Bapatla, Andhra Pradesh</p>
        <p>
          📧 Email:{" "}
          <a href="mailto:abburivenkatesh.av@gmail.com">
            abburivenkatesh.av@gmail.com
          </a>
        </p>
        <p>📞 Phone: +91-8688244713</p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/venkateswarlu-abburi-982715353/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/venkateswarlu-abburi
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/venkatesh-codes"
            target="_blank"
            rel="noreferrer"
          >
            github.com/venkatesh-codes
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Abburi Venkateswarlu | Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
