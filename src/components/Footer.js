import React from "react";
// Importing images to use as icons
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import stackoverflow from "../assets/images/stackoverflow.png";
import discord from "../assets/images/discord.png";

const Footer = () => {
  return (
    <footer>
      <div id="logos">
        <a
          href="https://github.com/daveshouse44"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Github Logo" src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-tierney-652030214/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="LinkedIn Logo" src={linkedin} />
        </a>
        <a
          href="https://stackoverflow.com/users/16111199/david-tierney"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="StackOverflow Logo" src={stackoverflow} />
        </a>
        <a
          href="https://discordapp.com/users/daveshouse44#3785"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Discord Logo" src={discord} />
        </a>
      </div>
      <p>2022 © David Tierney</p>
    </footer>
  );
};

export default Footer;
