const phishingQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Which email address is most likely to be a phishing attempt?",
    options: [
      "support@google.com",
      "security@g00gle-login.com",
      "help@microsoft.com",
      "notifications@github.com",
    ],
    answer: 1,
    explanation:
      "The domain uses 'g00gle' with zeros instead of 'google', a common phishing trick.",
    tip: "Always check the sender's email address carefully.",
  },

  {
    id: 2,
    difficulty: "Easy",
    question:
      "You receive an email saying your bank account will be locked unless you click a link immediately. What should you do?",
    options: [
      "Click the link immediately",
      "Reply with your account details",
      "Ignore the email and verify using the bank's official website",
      "Forward it to friends",
    ],
    answer: 2,
    explanation:
      "Urgency is a common phishing tactic. Always verify using official channels.",
    tip: "Never trust urgent emails asking for personal information.",
  },

  {
    id: 3,
    difficulty: "Easy",
    question:
      "Which of the following is a strong sign of a phishing email?",
    options: [
      "Proper grammar and official branding",
      "Unexpected request for passwords or OTPs",
      "Newsletter from a subscribed service",
      "Receipt for a recent purchase you made",
    ],
    answer: 1,
    explanation:
      "Legitimate organizations never ask for passwords or OTPs via email.",
    tip: "Never share OTPs or passwords through email.",
  },

  {
    id: 4,
    difficulty: "Medium",
    question:
      "What should you do before clicking a link in an email?",
    options: [
      "Click quickly before it expires",
      "Hover over the link to check the actual URL",
      "Forward it to colleagues",
      "Disable antivirus",
    ],
    answer: 1,
    explanation:
      "Hovering reveals the real destination before clicking.",
    tip: "Always inspect links before opening them.",
  },

  {
    id: 5,
    difficulty: "Medium",
    question:
      "Which attachment is the most suspicious?",
    options: [
      "ProjectReport.pdf",
      "MeetingNotes.docx",
      "Invoice.pdf.exe",
      "HolidayPhotos.zip",
    ],
    answer: 2,
    explanation:
      "A '.pdf.exe' file is actually an executable program disguised as a PDF.",
    tip: "Enable file extensions in your operating system.",
  },

  {
    id: 6,
    difficulty: "Medium",
    question:
      "A website asks you to log in, but the URL starts with 'http://' instead of 'https://'. What should you do?",
    options: [
      "Continue logging in",
      "Check if the website is legitimate before entering credentials",
      "Disable browser security",
      "Ignore the warning",
    ],
    answer: 1,
    explanation:
      "HTTPS provides encrypted communication. Missing HTTPS can indicate an insecure or fake website.",
    tip: "Always verify the website address before logging in.",
  },

  {
    id: 7,
    difficulty: "Hard",
    question:
      "What is 'Smishing'?",
    options: [
      "Phishing through SMS messages",
      "Virus hidden in images",
      "Password cracking",
      "Wi-Fi hacking",
    ],
    answer: 0,
    explanation:
      "Smishing is phishing conducted using text messages.",
    tip: "Treat unexpected SMS links with caution.",
  },

  {
    id: 8,
    difficulty: "Hard",
    question:
      "Which action best protects you from phishing attacks?",
    options: [
      "Using the same password everywhere",
      "Enabling Multi-Factor Authentication (MFA)",
      "Turning off antivirus",
      "Ignoring browser warnings",
    ],
    answer: 1,
    explanation:
      "MFA adds an extra layer of protection even if passwords are stolen.",
    tip: "Enable MFA on all important accounts.",
  },

  {
    id: 9,
    difficulty: "Hard",
    question:
      "An email claims you've won a prize but asks you to pay a processing fee first. This is an example of:",
    options: [
      "Legitimate promotion",
      "Prize scam phishing",
      "Software update",
      "Cloud backup request",
    ],
    answer: 1,
    explanation:
      "Prize scams trick users into paying money or revealing sensitive information.",
    tip: "If it sounds too good to be true, it probably is.",
  },

  {
    id: 10,
    difficulty: "Hard",
    question:
      "What should you do if you accidentally click a phishing link?",
    options: [
      "Ignore it",
      "Disconnect from the internet, scan your device, and change affected passwords",
      "Share the link with others",
      "Restart your computer only",
    ],
    answer: 1,
    explanation:
      "Taking immediate action reduces the risk of malware infection or account compromise.",
    tip: "Report phishing incidents to your IT team or service provider.",
  },
];

export default phishingQuestions;