import num1 from "../assets/number1.png";
import num2 from "../assets/number2.png";
import num4 from "../assets/number4.png";
import num3 from "../assets/number3.png";

export const HERO_CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const ABOUT_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const EXPERIENCES = [
  {
    year: "Mar. 2023 - Jul. 2023",
    role: "Fellow, Application Development",
    company: "Year Up",
    description: ` Practiced and implemented the use of Java, SpringBoot, OOP, Git/Github, MySql databases, and ran unit
 test to verify code through live demos(400+ hours of training).`,
    technologies: ["Java", "Git/Github", "MySQL", "Springboot"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: num1,
    description: "A site from me, about me!, what did you learn? :)",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "DataVise",
    image: num2,
    description:
      "A discord bot for the CS students at Queens College. It can be their job tracker or provide resources when they need it!.",
    technologies: ["JavaScript", "PostgreSQL", "Node.js", "Discord.js"],
  },
  {
    title: "E-Commerce Backend",
    image: num3,
    description:
      "The backend of a e-commerce site was built to allow user to search  and filter through items on the site.",
    technologies: ["Java", "SpringBoot", "MySQL"],
  },
  {
    title: "Bloomberg Tech Lab",
    image: num4,
    description:
      "One of 30 students selected to collaborate with Bloomberg engineers in a small group setting to build an application using RabbitMQ and Docker.",
    technologies: ["Python", "RabbitMQ", "Docker"],
  },
];

export const CONTACT = {
  address: "New york city ",
  email: "iamdanielj@outlook.com",
};
