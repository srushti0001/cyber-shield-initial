const emailQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Which email attachment should you avoid opening?",
    options: [
      "A PDF from your manager that you were expecting",
      "An unexpected .exe attachment from an unknown sender",
      "A timetable from your college",
      "A bill from a service you use"
    ],
    answer: 1,
    explanation: "Executable (.exe) files from unknown senders can install malware.",
    tip: "Never open unexpected attachments from unknown sources."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "Which feature helps identify spam emails?",
    options: [
      "Spam Filter",
      "Calculator",
      "VPN",
      "Firewall"
    ],
    answer: 0,
    explanation: "Spam filters automatically detect and separate suspicious emails.",
    tip: "Check your spam folder before marking emails as safe."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "A legitimate company asks you to email your password. What should you do?",
    options: [
      "Send the password immediately",
      "Ignore the request and report it",
      "Reply with your OTP",
      "Forward it to your friends"
    ],
    answer: 1,
    explanation: "Legitimate companies never ask for passwords through email.",
    tip: "Never share passwords or OTPs by email."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "What is the safest way to verify an email requesting account verification?",
    options: [
      "Click the email link immediately",
      "Visit the company's official website directly",
      "Reply with your account number",
      "Ignore browser warnings"
    ],
    answer: 1,
    explanation: "Open the official website manually instead of clicking email links.",
    tip: "Type the website address yourself."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "What is email spoofing?",
    options: [
      "Sending emails with a forged sender address",
      "Deleting emails",
      "Encrypting attachments",
      "Organizing your inbox"
    ],
    answer: 0,
    explanation: "Spoofing makes emails appear to come from someone else.",
    tip: "Always verify the sender's email address carefully."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "Which action is safest after receiving a suspicious email?",
    options: [
      "Open every attachment",
      "Delete or report the email",
      "Reply asking if it's genuine",
      "Disable antivirus"
    ],
    answer: 1,
    explanation: "Reporting suspicious emails helps protect others.",
    tip: "Use your email provider's 'Report Phishing' feature."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "What does 'BCC' stand for in email?",
    options: [
      "Blind Carbon Copy",
      "Backup Contact Copy",
      "Business Copy Channel",
      "Basic Carbon Connection"
    ],
    answer: 0,
    explanation: "BCC hides recipients from each other.",
    tip: "Use BCC when emailing large groups."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "Why should you avoid clicking the 'Unsubscribe' link in suspicious emails?",
    options: [
      "It may confirm your email address to attackers",
      "It deletes your account",
      "It installs antivirus",
      "It blocks spam forever"
    ],
    answer: 0,
    explanation: "Fake unsubscribe links may verify that your email account is active.",
    tip: "Only unsubscribe from trusted senders."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "Which email authentication protocol helps prevent spoofing?",
    options: [
      "SMTP",
      "SPF",
      "FTP",
      "HTTP"
    ],
    answer: 1,
    explanation: "SPF helps verify that an email was sent from an authorized server.",
    tip: "SPF, DKIM, and DMARC improve email security."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "What should you do if you accidentally click a malicious email link?",
    options: [
      "Ignore it",
      "Disconnect from the internet, scan your device, and change passwords if necessary",
      "Share the link with coworkers",
      "Restart your computer only"
    ],
    answer: 1,
    explanation: "Immediate action helps reduce the impact of a phishing attack.",
    tip: "Report the incident to your IT administrator if it involves a work account."
  }
];

export default emailQuestions;