import { Icons,whatsapp } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
// import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
// import { Golang } from "@/components/ui/svgs/golang";
// import { Postgresql } from "@/components/ui/svgs/postgresql";
// import { Docker } from "@/components/ui/svgs/docker";
// import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import html from "@/components/ui/svgs/html";
import css from "@/components/ui/svgs/css";
import javascript from "@/components/ui/svgs/javascript";
import bootstrap from "@/components/ui/svgs/bootstrap";
import sql from "@/components/ui/svgs/sql";

export const DATA = {
  name: "Ritesh Samanta",
  initials: "RS",
  url: "https://riteshsamanta.dev",
  location: "West Bengal, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Focused on building a strong foundation in core computer science concepts | Crafting Tomorrow with Tech | AI & ML @ B.Tech CSE",
  summary:
    "I'm a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, maintaining a strong academic record with an SGPA of 9.17 . My passion lies in leveraging technologies to build solutions that create meaningful impact in people's lives. Recently, I have secured 1st position at a hackathon with a Campus Issue Tracking project . One of my best project is FastCare — a healthcare platform designed to deliver medical services at the speed of life. ",
  avatarUrl: "/1.png",
  skills: [
    { name: "C", icon: Csharp },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
     { name: "SQL", icon: sql },
     { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "BootStrap", icon: bootstrap },
    { name: "Next.js", icon: NextjsIconDark },
    // { name: "Typescript", icon: Typescript },
 
    
    // { name: "Go", icon: Golang },
    // { name: "Postgres", icon: Postgresql },
    // { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
   
    // { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/coming-soon", icon: NotebookIcon, label: "Coming-soon" },
  ],
  contact: {
    email: "riteshsamanta268@gmail.com",
    tel: "7478316149",
    social: {

      GitHub: {
        name: "GitHub",
        url: "https://github.com/Riteshsamanta03",
        icon: Icons.github,
        navbar: true,
      },
      
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritesh-samanta/",
        icon: Icons.linkedin,

        navbar: true,
      },
      instagram: {
       url: "https://instagram.com/iamritesh_03",
       icon: Icons.instagram,
       navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      whatsapp: {
         url: "https://wa.me/+917478316149",
         icon: whatsapp.whatsapp,
         navbar: true,
      },
    },
  },



  work: [
    {
      company: "PRCEPTRON'26 CodeCraft (RKMVERI)",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Hackathon Winner",
      logoUrl: "/hack.png",
      start: "January 12th , 2026",
      description:
        "Developed an app & web based Campus Issue Tracking System named - FIXVERSITY",
    },
    {
      company: "Intel Unnati program",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Industrial Training",
      logoUrl: "/intel.png",
      start: "August 13th , 2025",
      description:
        "45 Hours Training program from 31st July 2025 to 13th August 2025 on Artifical Intelligence Machine Learning & Deep learning consistent with changes.",
    },
    {
      company: "NIELIT KOLKATA",
      href: "https://nvidia.com/",
      badges: [],
      location: "ONLINE",
      title: "BOOTCAMP PROGRAM",
      logoUrl: "/blockchain.jpg",
      start: "September 30th , 2025",
      description:
        "Completed a virtual bootcamp program on 'Big Data & Data Scicence' & 'Blockchain Technology' from NIELIT KOLKATA.",
    },
    {
      company: "TCS",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "ESG Virtual Experience program",
      logoUrl: "/tcs.jpg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Understanding and analyzing client requirements to identify key needs and challenges.Evaluating sustainability solutions through comparative analysis and presenting a clear fitment matrix to support decision-making.",
    },
    {
      company: "Typing.com",
      href: "https://li.me/",
      badges: [],
      location: "Online",
      title: "43 WPM Typing Certification",
      logoUrl: "/type.jpg",
      start: "",
      description:
        "43 words per minutes with 99% of accuracy.",
    },
    
  ],



  education: [
    {
      school: "BRAINWARE UNIVERSITY",
      href: "https://www.brainwareuniversity.ac.in/" ,
      degree: "BTech in Computer Science & Engineering (AI & ML)",
      logoUrl: "/BRAINWARE.png",
      percentage: "86.22% (SGPA - 9.17)",
      start: "2022",
      end: "Present",
    },
    {
      school: "NATSHAL HIGH SCHOOL(H.S.)",
      href: "#",
      degree: "West Bengal Council of Higher Secondary Education",
      logoUrl: "/WBCHSE.png",
       percentage: "89.2%",
      start: "2022",
      end: "2022",
    },
    {
      school: "NATSHAL HIGH SCHOOL",
      href: "#",
      degree: "West Bengal Board of Secondary Education",
      logoUrl: "/WBBSE.png",
       percentage: "85.8%",
      start: "2020",
      end: "2020",
    },
  ],



  projects: [
    {
      title: "FastCare",
      href: "https://fastcare.pages.dev",
      dates: "November 2025",
      active: true,
      description:
        "FastCare brings quality healthcare to your fingertips. Whether you’re booking an appointment, consulting a doctor online, or accessing your health records, FastCare gives you control and convenience—all in one place.",
      technologies: [
        "React",
        "Node.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://fastcare.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "./fastcare.png",
    },
    {
      title: "Simon Game",
      href: "https://simon-game-eln.pages.dev",
      dates: "August 2024",
      active: true,
      description:
        "Built a Simon Game using HTML, CSS, and JavaScript to test and improve memory through pattern recognition. Features interactive UI, color-coded buttons, and real-time game logic with increasing difficulty levels. ",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://simon-game-eln.pages.dev",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/simon-game.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],



  hackathons: [
    {
      title: "PERCEPTRON'26 RKMVERI",
      dates: "January 12th , 2026",
      location: "Belur Math, Howrah, West Bengal",
      description:
        "Developed an app & web based applications for Campus Issue Tracking System named - FIXVERSITY to efficiently report, manage, and resolve campus problems, emphasizing real-world impact, clean architecture, and collaborative development.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "",
      links: [
       
      ],
    },
  ],
} as const;
