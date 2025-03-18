import myImage from "../images/my-image.jpg";

const AboutMe=()=>{
    return(
        <div className="content">
            <div className="my-image">
        <img src={myImage}></img></div>
        <div className="about-me">
            <h4> A Bit About Me</h4>
            <p>
            I am a Full Stack Developer with 2 years of experience, currently working at Capgemini. 
My expertise spans both front-end and back-end development, allowing me to build scalable,
 high-performing, and user-friendly web applications.
<br/><br/>
I am passionate about crafting interactive, responsive, and efficient applications that enhance user experience. With a problem-solving mindset and a keen eye for detail, I constantly strive to improve my skills and stay updated with the latest industry trends.
             </p>
        </div>
       </div>
    )
}

export default AboutMe;