/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "MARS",
  title: "Hi all, I'm Muhammad Arif Rahmad S",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and Cyber Security🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mhdarif09",
  linkedin: "https://www.linkedin.com/in/",
  gmail: "arifgaming2124@gmail.com",
  gitlab: "https://gitlab.com/",
  instagram: "https://www.instagram.com/mhdarif.09",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Bina Darma",
      logo: require("./assets/images/binadarma.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - April 2026",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cyber Security",
      progressPercentage: "90%"
    },
    {
      Stack: "Network",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "MI DARUSSALAM PALEMBANG",
      companylogo: require("./assets/images/midarussalam.png"),
      date: "June 2018 – Present",
      descBullets: [
        "Contributing to the Development of Information Systems for the MI Darussalam Palembang Foundation",
        "Participate in the process of developing, testing web-based applications",
        "Optimizing application performance by analyzing and solving technical problems",
        "Continue to learn and improve skills in the field of software engineering to be better at contributing to the Mi Darussalam foundation"
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "Umiversity Bina Darma",
      companylogo: require("./assets/images/binadarma.png"),
      date: "May 2022 – July 2023",
      descBullets: [
        "Contribute to the implementation of corporate network and system security through the use of technology",
        "Analyze and report potential security threats, including malware attacks and network intrusions",
        "Provide training and education on cyber security practices to company staff and employees",
      ]
    },
     {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Saaya Employee Assistance Program (EAP) A digital employee assistance program, apted to the needs of your team.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sriwijayacyber.png"),
      projectName: "Sriwijaya Cyber",
      projectDesc: "Bootcamp for Cyber Security, Programming and Networking ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://sriwijayacyber.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Indonesia Digital Trabe Finalist",
      subtitle:
        "Venue for the Competition Establishing startups organized by state-owned enterprises and supported by Najwa Shihab etc.",
      image: require("./assets/images/idt.jpg"),
      imageAlt: "IDT Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1q_NQAHaFct43tt_qYL_9t9ycCtb2hpjL/view?usp=share_link"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1q_NQAHaFct43tt_qYL_9t9ycCtb2hpjL/view?usp=share_link"
        },
        {
          name: "Blog",
          url: "https://drive.google.com/file/d/1q_NQAHaFct43tt_qYL_9t9ycCtb2hpjL/view?usp=share_link"
        }
      ]
    },
    {
      title: "Shoppe Code Languange",
      subtitle:
        "National Data Science Challange 2020.",
      image: require("./assets/images/SHOPPE.jpg"),
      imageAlt: "Shoppe Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kmFgGAs1_gOhzxdwQD9J0v8SPDU13vwX/view?usp=sharing"
        }
      ]
    },

    {
      title: "Web App Developer",
      subtitle: "Completed Certifcation from PGRI for ME",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://bangsin.id/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://bangsin.id/category/bug/information-disclosure/",
      title: "Mengenal Bug Information Disclosure",
      description:
        "Information Disclosure, juga dikenal sebagai kebocoran informasi, adalah ketika sebuah situs web secara tidak sengaja mengungkapkan informasi sensitif kepada penggunanya"
    },
    {
      url: "https://bangsin.id/mengenal-percabangan-di-python/",
      title: "Mengenal Percabangan di Python",
      description:
        "Percabangan if adalah struktur kontrol yang memungkinkan program untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisi bernilai benar, program akan mengeksekusi satu atau lebih pernyataan."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/muhammad-arif709/embed/episodes/Cyber-Security-Podcast-e1ukma6"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6283178623789",
  email_address: "arifgaming2124@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
