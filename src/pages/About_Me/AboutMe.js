import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const AboutMe = () => {
    const main = document.querySelector("main");
    cleanPage(main);

    main.innerHTML = `
<section class="about-me">
  <h1>About Me</h1>
  ${Divider()}
  <p>
    I am a web development student currently pursuing a Full-Stack Master's degree.
    With over 13 years of experience in administration and as an IT instructor,
    I have a strong background in both business and technology.
  </p>

  <div class="lists">
    <div class="list-container">
      <h2>My Qualifications</h2>
      <ul>
        <li>🎓 Degree in Administration and Finance</li>
        <li>🏫 High School Diploma</li>
        <li>🗣 English Certification</li>
        <li>💻 13 years teaching computer science at a private academy.</li>
      </ul>
    </div>
    <div class="list-container">
      <h2>My hobbies and interests</h2>
      <ul>
        <li>🎮 Technology & Gaming</li>
        <li>🚵‍♂️ Cycling and gym💪</li>
        <li>🌍 Travel & Culture</li>
        <li>🍳 Food & Cooking</li>
      </ul>
    </div>
  </div>
</section>`;
};


