import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const AboutMe = () => {
    const main = document.querySelector("main");
    cleanPage(main);

    main.innerHTML = `
<section class="about-me">
  <div class="about-header">
    <img src="/images/carlos.jpg" alt="Profile Picture" class="profile-pic">
    <h1>About Me</h1>
  </div>
  ${Divider()}
  <p>
    Hello everyone, this is my portfolio.
  Besides my studies and professional background, I’d like to describe myself a little.

  I consider myself a hardworking and responsible person. I like to stay positive and always see the glass half full. I also enjoy sports activities—I'm really into mountain biking, and I like going to the gym to stay in shape. I prefer peaceful environments—countryside, small towns—I’m definitely more of a mountain person than a beach person.

  I also love video games and anything related to computers. Building PCs is no mystery to me! Traveling is another passion of mine; I enjoy exploring new towns and discovering new places.

  Food is one of life’s great pleasures, and I truly enjoy good meals. 
  </p>

  <div class="lists">
    <div class="list-container">
      <h2>My Qualifications</h2>
      <ul>
        <li>🎓 Degree in Finance</li>
        <li>🏫 High School Diploma</li>
        <li>🗣 English Certification</li>
        <li>💻 13 years teaching IT.</li>
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


