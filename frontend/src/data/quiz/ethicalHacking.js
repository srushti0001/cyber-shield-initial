const ethicalHackingQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is ethical hacking?",
    options: [
      "Hacking systems with permission to improve security",
      "Stealing passwords",
      "Creating computer viruses",
      "Deleting company data"
    ],
    answer: 0,
    explanation: "Ethical hackers are authorized professionals who identify security weaknesses before attackers can exploit them.",
    tip: "Always obtain written permission before performing security testing."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "What is the primary goal of an ethical hacker?",
    options: [
      "Steal confidential information",
      "Improve an organization's cybersecurity",
      "Spread malware",
      "Disable websites"
    ],
    answer: 1,
    explanation: "Ethical hackers help organizations discover and fix vulnerabilities.",
    tip: "Security testing should always lead to stronger defenses."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "Which of the following is commonly used to scan a network for devices and services?",
    options: [
      "Nmap",
      "Microsoft Word",
      "Calculator",
      "Paint"
    ],
    answer: 0,
    explanation: "Nmap is a widely used network scanning tool for discovering hosts, ports, and services.",
    tip: "Scanning should only be performed on systems you are authorized to test."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "What is vulnerability assessment?",
    options: [
      "Installing antivirus software",
      "Identifying and evaluating security weaknesses",
      "Formatting a hard drive",
      "Changing a desktop wallpaper"
    ],
    answer: 1,
    explanation: "A vulnerability assessment identifies weaknesses that could be exploited by attackers.",
    tip: "Regular assessments reduce the risk of successful cyber attacks."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "What is penetration testing?",
    options: [
      "A simulated cyberattack to evaluate security",
      "Increasing internet speed",
      "Creating user accounts",
      "Backing up files"
    ],
    answer: 0,
    explanation: "Penetration testing safely simulates attacks to identify exploitable vulnerabilities.",
    tip: "Penetration testing should always follow an approved scope."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "Why is documentation important after a security assessment?",
    options: [
      "To make reports longer",
      "To record findings and recommend improvements",
      "To slow down the system",
      "To delete vulnerabilities automatically"
    ],
    answer: 1,
    explanation: "Security reports help organizations understand risks and prioritize remediation.",
    tip: "Good documentation is as important as discovering vulnerabilities."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "An organization hires a security professional to test its web application using a signed agreement. This activity is an example of:",
    options: [
      "Cybercrime",
      "Ethical hacking",
      "Identity theft",
      "Phishing"
    ],
    answer: 1,
    explanation: "Security testing performed with authorization is ethical hacking.",
    tip: "Permission distinguishes ethical hacking from illegal hacking."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "What is the principle of responsible disclosure?",
    options: [
      "Publishing vulnerabilities immediately",
      "Privately reporting vulnerabilities so they can be fixed before public disclosure",
      "Selling vulnerabilities online",
      "Ignoring discovered security issues"
    ],
    answer: 1,
    explanation: "Responsible disclosure allows organizations time to fix vulnerabilities before attackers learn about them.",
    tip: "Always follow the organization's vulnerability disclosure policy."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "Which type of hacker uses their skills without authorization for malicious purposes?",
    options: [
      "White Hat Hacker",
      "Black Hat Hacker",
      "Blue Team Analyst",
      "Security Auditor"
    ],
    answer: 1,
    explanation: "Black hat hackers perform illegal activities for personal gain or malicious intent.",
    tip: "Ethical hackers always work within legal and organizational boundaries."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "During a penetration test, you discover a critical vulnerability that could expose customer data. What should you do first?",
    options: [
      "Post it on social media",
      "Report it immediately to the authorized client following the agreed reporting process",
      "Exploit it further without permission",
      "Ignore it because the test is complete"
    ],
    answer: 1,
    explanation: "Critical vulnerabilities should be reported promptly through the approved communication channel so they can be addressed quickly.",
    tip: "Professional ethics, confidentiality, and responsible reporting are essential in ethical hacking."
  }
];

export default ethicalHackingQuestions;