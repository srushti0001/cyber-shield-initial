const passwordQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Which password is the strongest?",
    options: [
      "password123",
      "Shrey123",
      "P@ssw0rd",
      "K9$mT!8vQ#2Lp"
    ],
    answer: 3,
    explanation: "Strong passwords are long and contain uppercase, lowercase, numbers, and special characters.",
    tip: "Use passwords with at least 12-16 characters."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "Why should you avoid using the same password for multiple accounts?",
    options: [
      "It saves time",
      "One compromised account can expose all your accounts",
      "It improves security",
      "It makes passwords easier to remember"
    ],
    answer: 1,
    explanation: "Password reuse increases the impact of a data breach.",
    tip: "Use a unique password for every important account."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "Which tool helps generate and store strong passwords?",
    options: [
      "Password Manager",
      "Calculator",
      "VPN",
      "Firewall"
    ],
    answer: 0,
    explanation: "Password managers securely store and generate strong passwords.",
    tip: "Use trusted password managers like Bitwarden or 1Password."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "What does MFA stand for?",
    options: [
      "Multiple File Access",
      "Multi-Factor Authentication",
      "Managed Firewall Access",
      "Manual File Approval"
    ],
    answer: 1,
    explanation: "MFA requires an additional verification step beyond the password.",
    tip: "Always enable MFA on important accounts."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "Which password should never be used?",
    options: [
      "Welcome2025!",
      "Company@123",
      "123456",
      "J8#sLm29!X"
    ],
    answer: 2,
    explanation: "123456 is one of the most commonly guessed passwords.",
    tip: "Avoid dictionary words and common number sequences."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "How often should you change a password after a known security breach?",
    options: [
      "Never",
      "Immediately",
      "Every 10 years",
      "Only if asked by friends"
    ],
    answer: 1,
    explanation: "Passwords exposed in breaches should be changed immediately.",
    tip: "Enable breach notifications where available."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "What is a passphrase?",
    options: [
      "A sentence used as a long password",
      "A browser extension",
      "An antivirus program",
      "A Wi-Fi protocol"
    ],
    answer: 0,
    explanation: "Passphrases are long, memorable combinations of words that are difficult to crack.",
    tip: "Example: BlueRiver!Coffee#Mountain2026"
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "Which attack tries millions of password combinations automatically?",
    options: [
      "Brute Force Attack",
      "Phishing",
      "Spoofing",
      "Smishing"
    ],
    answer: 0,
    explanation: "Brute force attacks systematically try many password combinations.",
    tip: "Strong passwords and MFA help prevent brute-force attacks."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "Which practice improves password security the most?",
    options: [
      "Writing passwords on paper",
      "Sharing passwords with coworkers",
      "Using a password manager with unique passwords",
      "Saving passwords in a text file"
    ],
    answer: 2,
    explanation: "Password managers help maintain unique, complex passwords securely.",
    tip: "Never store passwords in plain text."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "Which password storage method is the safest for websites?",
    options: [
      "Plain text",
      "Encrypted PDF",
      "Hashed and salted passwords",
      "Excel spreadsheet"
    ],
    answer: 2,
    explanation: "Websites should store hashed and salted passwords instead of plain text.",
    tip: "If a website can show you your original password, that's a security warning."
  }
];

export default passwordQuestions;