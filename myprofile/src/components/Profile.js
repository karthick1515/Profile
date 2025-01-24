import React from 'react';
import profileImage from './karthick.jpg';

const Profile = () => {
  return (
    <div className="container">
      {/* Profile Section */}
      <div className="profile">
        <img src={profileImage} alt="Profile" />
        <div>
          <h1>Karthick S</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>

      {/* Contact Information */}
      <section>
        <h3>Contact Information</h3>
        <ul>
          <li>Email: karthicksasikumar15@gmail.com</li>
          <li>Phone: 9715219743</li>
        </ul>
      </section>

      {/* About Me */}
      <section>
        <h3>About Me</h3>
        <p>
          I am a passionate Full Stack Developer with expertise in both front-end
          and back-end web development. I enjoy building interactive and user-friendly web applications.
        </p>
      </section>

      {/* Education */}
      <section>
        <h3>Education</h3>
        <p>B.Tech Information Technology</p>
        <p>VIT University, Graduated in 2022</p>
      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        <ul>
          <li>Core Java</li>
          <li>Spring Boot</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>HTML/CSS</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/karthick1515/Home-Loan-Application.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1: Home Loan Application
            </a>
            - This Project is about applying for a loan online.
          </li>
          <li>
            <a
              href="https://github.com/karthick1515/university-course-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2: Course Selection
            </a>
            - This Project is about applying for courses in college.
          </li>
          <li>
            <a
              href="https://github.com/karthick1515/university-course-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 3: Wallet App
            </a>
            - This Project is about money transactions without using banking services.
          </li>
        </ul>
      </section>

      {/* Work Experience */}
      <section>
        <h3>Work Experience</h3>
        <p>Working in Capgemini as Full Stack Developer for 10 months</p>
      </section>

      {/* Certifications */}
      <section>
        <h3>Certifications</h3>
        <ul>
          <li>MICROSOFT AZURE - AZ 900</li>
          <li>GOOGLE - Google Cloud Certified Cloud Digital Leader</li>
        </ul>
      </section>

      {/* Connect with Me */}
      <section>
        <h3>Connect with Me</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/karthicks1508"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/karthick1515"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
