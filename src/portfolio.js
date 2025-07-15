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
  username: "Kamal Hussain",
  title: "Hi all, I'm Kamal",
  subTitle: emoji(
    "Passionate Data Scientist specializing in AI, Machine Learning, and predictive modeling. Skilled in Python, R, and Haskell, with expertise in developing energy-efficient IDS for IoT using Federated Learning and crafting data-driven solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1akLrpJ-jC8C8pUm7Cft1BT9xAMuHIBIw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nxtanalyst",
  linkedin: "https://www.linkedin.com/in/nxtanalyst/",
  // gmail: "kamalaly611@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~012d16f32bb5d6c53b",
  fiveer: "https://www.upwork.com/freelancers/~012d16f32bb5d6c53b",
  // gitlab: "https://gitlab.com/etopiyaaly611",
  facebook: "https://www.facebook.com/spencer.churchill.338/",
  medium: "https://medium.com/@etopiyaaly611",
  stackoverflow: "https://stackoverflow.com/users/19160767/kamal-hussain",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VERSATILE DEVELOPER PASSIONATE ABOUT DATA SCIENCE, AI, ML, AND WEB DEV",
  skills: [
    emoji(
      "Data Science & AI:📊 Expert in data analysis with Python, R, and statistical programming Proficient in AI and neural networks."
    ),
    
    emoji(
      "Machine Learning Enthusiast:🤖 Dedicated to creating predictive models for data-driven decision-making."
    ),

    emoji(
      "Web Development Expert:🌐 Specialized in crafting responsive websites using modern technologies like React JS, CSS, HTML, and Material UI"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
     {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SZABIST ISLAMABAD",
      logo: require("./assets/images/ccc.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - july 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Degree College GB",
      logo: require("./assets/images/eferere.jpeg"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2017 - May 2019",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & AI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning/Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Upwork",
      company: "Data Scinetist & Developer",
      companylogo: require("./assets/images/up1.PNG"),
      date: "June 2019 – Present",
      descBullets: [
        "Expert in: Data Science, AI, ML, Python.",
        "Skills: Responsive Web Design.",
        "Specializes in: Data-driven solutions, coding tutoring for web projects."
      ]
    },
    {
      role: " LinkedIn",
      company: "AI & Coding Expert",
      companylogo: require("./assets/images/linkedinfinal.png"),
      date: "June 2020 – Present",
      descBullets: [
        "Proficient in: Data Science, AI, Python.",
        "Masters: ML, Responsive Web Design.",
        "Passionate about: Data-driven solutions, coding tutoring for web projects."
      ]
      
    },
    {
      role: "fiverr.",
      company: "AI Integration Specialist",
      companylogo: require("./assets/images/fiverfinal.webp"),
      date: "June 2019 – Present",
      footerLink: [
      
        "https://github.com/kamalaly611/Breast-Cancer-Classfication-System"
      
      ],
      descBullets: [
        "Mastering: Data Science, AI, ML.",
        "Tech Skills: Python, Responsive Web Design.",
        "Dedicated to: Crafting data-driven solutions, coding tutoring for web projects."
        
      ]
    
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
  title: "My Projects",
  subtitle: "SOME PROJECTS THAT I HAVE CREATED",
  projects: [
    {
      image: require("./assets/images/classification.jpeg"),
      projectName: "Breast Cancer Prediction Application Using Machine Learning & Deep learning",
      projectDesc: "Developed a brief Breast Cancer Prediction App with ML.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/kamalaly611/Breast-Cancer-Classfication-System"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/senti.png"),
      projectName: "Speech Emotion Recognition using Recurrent Neural Networks (RNN) ",
      projectDesc: "A system that identifies and classifies human emotions .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ghazanfarhussain.netlify.app/"
        }
      ]
    },{
      image: require("./assets/images/abc.jpg"),
      projectName: "Computer Aided Diagnosis For Eczema And Psoriasis Through Deep Learning",
      projectDesc: "Developed a brief Skin Cancer Prediction App with ML.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/kamalaly611/Breast-Cancer-Classfication-System"
        }
        //  you can add extra buttons here.
      ]
    },
  
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
      title: "ML with Python",
      subtitle:
        "Learned to implement and apply machine learning algorithms using Python.",
      image: require("./assets/images/ml.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/KamalHussain611/machine-learning-with-python-v7"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Intermediate Python",
      subtitle:
        "Enhanced programming skills with advanced Python concepts and techniques.",
      image: require("./assets/images/certificate.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bfb34e4e49b2117bccc3a04963baa9f0293a8b09"
        }
      ]
    },

    {
      title: "Intro to Data Science",
      subtitle: " Learned the fundamentals of data science, including analysis, visualization.",
      image: require("./assets/images/ds.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/BPZNGV2BWYH5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-000 0000000",
  email_address: "etopiyaaly611@gmail.com"
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
