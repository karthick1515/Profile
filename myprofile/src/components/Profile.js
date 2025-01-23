import profileImage from './karthick.jpg';
const Profile = () => {
        return (
        
<html>
<head>
  <title>My Profile</title>
  <link rel="stylesheet" href="styling.css"></link>
</head>
<body>
  <table>
    <tr>
      <td>
        <div class="container">
          <div class="profile">
          <img src={profileImage} alt="Profile"></img>
            <div>
              <h1>Karthick S</h1>
              <p>Full Stack Developer</p>
            </div>
          </div>
          
          <h3>Contact Information</h3>
          <ul>
            <li>Email: karthicksasikumar15@gmail.com</li>
            <li>Phone: 9715219743</li>
          </ul>
          <h3>About Me</h3>

          <p >I am a passionate Full Stack Developer with expertise in both front-end and back-end web development. I enjoy building interactive and user-friendly web applications.</p>
          
          
        </div>

      </td>
      
    </tr>
    <tr>
        <td>
        <h3>Education</h3>
<p>B.Tech Information Technology</p>
<p>VIT University, Graduated in 2022</p>
        </td>
    </tr>
    <tr>
    <td>
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
      </td>
    </tr>
    <tr>
    <td>
    <h3>Projects</h3>
<ul>
  <li>
    <a href="https://github.com/karthick1515/Home-Loan-Application.git" target="_blank" rel="noopener noreferrer">
      Project 1: Home Loan Application
    </a>
    - This Project is about applying loan through online.
  </li>
  <li>
    <a href="https://github.com/karthick1515/university-course-project.git" target="_blank" rel="noopener noreferrer">
      Project 2: Course Selection
    </a>
    - This Project is about applying for course in college
  </li>
  <li>
    <a href="https://github.com/karthick1515/university-course-project.git" target="_blank" rel="noopener noreferrer">
      Project 3: Wallet App
    </a>
    - This Project is about money transaction without using bank service
  </li>
</ul>
      </td>
    </tr>
   <tr> <td>
    <h3>Work Experience</h3>
<p>Working in Capgemini as Full Stack Developer for 10 months</p>

</td>
</tr>
    <tr>
        <td>
        <h3>Certifications</h3>
<ul>
  <li>MICROSOFT AZURE -AZ 900</li>
  <li>GOOGLE- Google Cloud Certified Cloud Digital Leader</li>
 
</ul>

        </td>
    </tr>

    <tr>
        <td>
        <h3>Connect with Me</h3>
<ul>
  <li>
    <a href="https://www.linkedin.com/in/karthicks1508" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </li>
  <li>
    <a href="https://github.com/karthick1515" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </li>
  
</ul>

        </td>
    </tr>

  </table>
</body>
</html>

    );
    
};

export default Profile;

