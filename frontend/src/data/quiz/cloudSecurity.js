const cloudQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is cloud computing?",
    options: [
      "Storing and accessing data over the internet",
      "Using only desktop computers",
      "A type of antivirus software",
      "A programming language"
    ],
    answer: 0,
    explanation: "Cloud computing allows users to store data and use services over the internet instead of local devices.",
    tip: "Choose trusted cloud providers for storing important data."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "Which of the following is a cloud storage service?",
    options: [
      "Google Drive",
      "Microsoft Word",
      "Notepad",
      "Paint"
    ],
    answer: 0,
    explanation: "Google Drive is a popular cloud storage platform for files and documents.",
    tip: "Enable two-factor authentication for your cloud accounts."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "Why should you use a strong password for cloud accounts?",
    options: [
      "To improve internet speed",
      "To protect your stored data",
      "To increase storage space",
      "To update applications"
    ],
    answer: 1,
    explanation: "Strong passwords help prevent unauthorized access to cloud accounts.",
    tip: "Use a unique password for every cloud service."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "Which security feature provides an extra layer of protection for cloud accounts?",
    options: [
      "Dark Mode",
      "Two-Factor Authentication (2FA)",
      "Incognito Mode",
      "Auto Save"
    ],
    answer: 1,
    explanation: "2FA requires an additional verification step beyond your password.",
    tip: "Enable 2FA on every important online account."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "What is the safest way to share confidential files through cloud storage?",
    options: [
      "Make the file public",
      "Share using restricted access permissions",
      "Post the link on social media",
      "Email your password with the file"
    ],
    answer: 1,
    explanation: "Restricted permissions ensure only authorized users can access the file.",
    tip: "Review sharing permissions regularly."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "Which practice helps protect cloud data from accidental loss?",
    options: [
      "Disable backups",
      "Maintain regular backups",
      "Delete old files immediately",
      "Share passwords with coworkers"
    ],
    answer: 1,
    explanation: "Regular backups help recover data after accidental deletion or cyber incidents.",
    tip: "Follow the 3-2-1 backup strategy whenever possible."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "What is a common cloud security risk?",
    options: [
      "Weak access controls",
      "Fast internet speed",
      "High-quality displays",
      "Large storage capacity"
    ],
    answer: 0,
    explanation: "Poor access control can expose sensitive cloud data to unauthorized users.",
    tip: "Grant users only the permissions they need."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "What does encryption do for cloud data?",
    options: [
      "Deletes old files",
      "Converts data into an unreadable format without the correct key",
      "Compresses files",
      "Increases internet speed"
    ],
    answer: 1,
    explanation: "Encryption protects sensitive information even if it is intercepted.",
    tip: "Encrypt important files before uploading them to the cloud."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "An employee accidentally shares a confidential cloud folder with 'Anyone with the link'. What is the biggest security concern?",
    options: [
      "The folder loads slowly",
      "Unauthorized people may access sensitive information",
      "The file size increases",
      "The cloud account logs out automatically"
    ],
    answer: 1,
    explanation: "Public sharing can expose confidential data to unintended recipients.",
    tip: "Always verify sharing settings before sending links."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "Which cloud security principle ensures users receive only the permissions required for their job?",
    options: [
      "Least Privilege",
      "Open Access",
      "Unlimited Sharing",
      "Public Authentication"
    ],
    answer: 0,
    explanation: "The Principle of Least Privilege reduces security risks by limiting unnecessary access.",
    tip: "Review user permissions periodically to remove unnecessary access."
  }
];

export default cloudQuestions;