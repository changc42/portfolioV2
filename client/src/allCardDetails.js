import skills from "./skillTypes";

let givMonies = {
  title: "Giv Monies",
  image: "givmonies_thumbnail_sqr.png",
  description: "Give me 10 dollars",
  skillsUsed: [skills.NodeJS, skills.ExpressJS, skills.Stripe],
  subdomain_prefix: `givmonies`,
  github_url: "https://https://github.com/changc42/giv_monies",
};

let bookfastDetails = {
  title: "Bookfast",
  image: "bookfast.png",
  description: "Search for your favorite books and rate them",
  skillsUsed: [
    skills.ReactJS,
    skills.PassportJS,
    skills.NodeJS,
    skills.ExpressJS,
  ],
  subdomain_prefix: `bookfast`,
  github_url: "https://github.com/changc42/bookfast",
};

let calculatorDetails = {
  title: "Calculator",
  image: "calculator.png",
  description: "State management and algorithms",
  skillsUsed: [skills.ReactJS],
  subdomain_prefix: `calculator`,
  github_url:
    "https://github.com/changc42/personalPortfolio/tree/master/projects/calculator",
};

let dragNDropDetails = {
  title: "drag-n-drop",
  image: "drag-n-drop.png",
  description:
    "State management and drag-and-drop (cursor clicks only. Not for mobile)",
  skillsUsed: [skills.ReactJS],
  subdomain_prefix: `dragndrop`,
  github_url:
    "https://github.com/changc42/personalPortfolio/tree/master/projects/dragndrop",
};

let emailRaterDetails = {
  title: "Email Rater",
  image: "emailRater.PNG",
  description: "HTTP/REST APIs and cookie-session management",
  skillsUsed: [skills.ReactJS, skills.NodeJS, skills.HTTP_REST],
  subdomain_prefix: `emailrater`,
  github_url:
    "https://github.com/changc42/personalPortfolio/tree/master/projects/emailrater",
};

let emailyDetails = {
  title: "Emaily",
  image: "emaily.png",
  description:
    "Automate the email sending process! Collect data from your users",
  skillsUsed: [
    skills.ReactJS,
    skills.NodeJS,
    skills.PassportJS,
    skills.Stripe,
    skills.ExpressJS,
  ],
  subdomain_prefix: `emaily`,
  github_url: "https://github.com/changc42/node-react-course",
};

let weatherappDetails = {
  title: "Weather App",
  image: "newWeatherPic.png",
  description: "What's the weather in your local area?",
  skillsUsed: [skills.HTML, skills.CSS, skills.JavaScript, skills.HTTP_REST],
  subdomain_prefix: `weatherapp`,
  github_url: "https://github.com/changc42/weatherapp",
};

let pokemonwarDetails = {
  title: "Pokemon War",
  image: "pokemonwar.PNG",
  description: "State management and responsive design",
  skillsUsed: [skills.ReactJS],
  subdomain_prefix: `pokemonwar`,
  github_url:
    "https://github.com/changc42/personalPortfolio/tree/master/projects/pokemonwar",
};

let personalPortfolioDetails = {
  title: "Personal Portfolio",
  image: "CClogo.png",
  description: "Host sub react app in bigger react app",
  skillsUsed: [skills.ReactJS, skills.NodeJS, skills.ExpressJS],
  github_url: "https://github.com/changc42/personalPortfolio",
};

export default [
  givMonies,
  pokemonwarDetails,
  calculatorDetails,
  // emailyDetails,
  // bookfastDetails,
  // emailRaterDetails,
  dragNDropDetails,
  // cpuSchedulerDetails,
  // memoryAllocatorDetails,
  // semanticAnalyzerDetails,
  personalPortfolioDetails,

  // weatherappDetails,
];
