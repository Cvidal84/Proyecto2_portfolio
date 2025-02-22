import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/github.jpeg", "GitHub", "https://github.com/Cvidal84")}
${Button("/icons/in.jpeg", "LinkedIn", "https://www.linkedin.com/in/carlos-vidal-puigcerver ")}
${Button("/icons/telegram.png", "Telegram", "https://www.t.me/Carlosvidal")}
${Button("/icons/instagram.jpg", "Instagram", "https://www.instagram.com/carlosvidalpuigcerver/")}
</div>
`;