import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Carlos Vidal Puigcerver</h1>
    ${Divider()}
    <p>I'm a full-stack software engineering student based in Callosa d'en Sarrià, Spain, with a background in administration and finance. I have over 13 years of experience working in administration and as a computer science teacher.
    I enjoy building things for the web, whether it's websites, applications, or anything in between. Currently, I'm diving deep into both frontend and backend development, constantly learning and improving my skills.</p>
    <a href="mailto:carlosvidalpuigcerver@gmail.com">Send me an email →</a>
    </section>`;
};