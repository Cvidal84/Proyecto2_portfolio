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
      <h2>My Qualifications</h2>
      <ul>
        <li>🎓 Degree in Administration and Finance</li>
        <li>🏫 High School Diploma</li>
        <li>🗣 English Certification</li>
        <li>📜 Professional Training in Administration and Finance</li>
      </ul>
    </section>`;
};


