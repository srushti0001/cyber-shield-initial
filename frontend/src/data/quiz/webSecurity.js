const webQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What does HTTPS provide?",
    options: [
      "Faster internet speed",
      "Encrypted communication between browser and website",
      "Free antivirus",
      "Website hosting"
    ],
    answer: 1,
    explanation: "HTTPS encrypts data exchanged between the browser and the web server.",
    tip: "Always check for HTTPS before entering sensitive information."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "Which icon usually indicates a secure website?",
    options: [
      "Padlock icon",
      "Star icon",
      "Cloud icon",
      "Folder icon"
    ],
    answer: 0,
    explanation: "A padlock icon indicates that the website uses HTTPS.",
    tip: "Click the padlock to view certificate details."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "Which website is most likely legitimate?",
    options: [
      "https://accounts.google.com",
      "http://google-login.xyz",
      "https://g00gle-login.net",
      "http://secure-google-login.com"
    ],
    answer: 0,
    explanation: "Always verify the domain name, not just the page appearance.",
    tip: "Attackers often create look-alike domains."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "What is Cross-Site Scripting (XSS)?",
    options: [
      "A method of speeding up websites",
      "An attack that injects malicious scripts into web pages",
      "A password manager",
      "A web browser feature"
    ],
    answer: 1,
    explanation: "XSS allows attackers to execute malicious JavaScript in a user's browser.",
    tip: "Validate and sanitize all user input."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "What is SQL Injection?",
    options: [
      "Adding records to a database",
      "Injecting malicious SQL queries into user input",
      "Updating software",
      "Encrypting databases"
    ],
    answer: 1,
    explanation: "SQL Injection exploits poorly validated database queries.",
    tip: "Always use parameterized queries."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "Which practice improves website security?",
    options: [
      "Using outdated software",
      "Ignoring security patches",
      "Keeping software updated",
      "Disabling HTTPS"
    ],
    answer: 2,
    explanation: "Updates fix vulnerabilities that attackers often exploit.",
    tip: "Enable automatic security updates whenever possible."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "Why are cookies used on websites?",
    options: [
      "To damage computers",
      "To store user session and preference data",
      "To increase internet speed",
      "To block malware"
    ],
    answer: 1,
    explanation: "Cookies help websites remember users and maintain sessions.",
    tip: "Avoid storing sensitive information directly in cookies."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "Which HTTP status code indicates 'Page Not Found'?",
    options: [
      "200",
      "301",
      "403",
      "404"
    ],
    answer: 3,
    explanation: "404 indicates that the requested page does not exist.",
    tip: "Knowing common HTTP status codes helps with web troubleshooting."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "Which attack tricks users into clicking invisible buttons on a webpage?",
    options: [
      "Clickjacking",
      "Phishing",
      "Smishing",
      "Spoofing"
    ],
    answer: 0,
    explanation: "Clickjacking overlays invisible elements to trick users into unintended actions.",
    tip: "Modern browsers and security headers help prevent clickjacking."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "What is the primary purpose of a Web Application Firewall (WAF)?",
    options: [
      "Increase website speed",
      "Filter and block malicious HTTP requests",
      "Store passwords",
      "Manage databases"
    ],
    answer: 1,
    explanation: "A WAF protects web applications by filtering malicious traffic.",
    tip: "A WAF is an additional security layer, not a replacement for secure coding."
  }
];

export default webQuestions;