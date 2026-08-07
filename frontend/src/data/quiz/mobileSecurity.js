const mobileQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Which is the safest place to download mobile apps?",
    options: [
      "Official App Store or Google Play Store",
      "Random website",
      "Social media link",
      "Unknown APK website"
    ],
    answer: 0,
    explanation: "Official app stores perform security checks before publishing apps.",
    tip: "Avoid downloading apps from unknown sources."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "What is the purpose of a screen lock?",
    options: [
      "Increase battery life",
      "Prevent unauthorized access",
      "Improve internet speed",
      "Boost phone performance"
    ],
    answer: 1,
    explanation: "A screen lock protects your personal information if your phone is lost or stolen.",
    tip: "Use a PIN, password, or biometric authentication."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "Which permission should you question for a flashlight app?",
    options: [
      "Camera",
      "Microphone",
      "Location",
      "All of the above"
    ],
    answer: 3,
    explanation: "A flashlight app usually doesn't need access to sensitive permissions.",
    tip: "Grant only the permissions an app genuinely requires."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "What should you do before selling your smartphone?",
    options: [
      "Delete one photo",
      "Factory reset the device",
      "Remove the SIM card only",
      "Turn it off"
    ],
    answer: 1,
    explanation: "A factory reset removes your personal data from the device.",
    tip: "Back up important data before resetting."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "Why should you keep your phone's operating system updated?",
    options: [
      "To increase storage",
      "To receive security patches",
      "To improve camera quality",
      "To change the wallpaper"
    ],
    answer: 1,
    explanation: "Updates fix known security vulnerabilities.",
    tip: "Enable automatic updates whenever possible."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "What is the safest action when using public Wi-Fi on your phone?",
    options: [
      "Access online banking",
      "Use a trusted VPN",
      "Disable security features",
      "Share passwords"
    ],
    answer: 1,
    explanation: "A VPN encrypts your internet traffic on public networks.",
    tip: "Avoid entering sensitive information on unsecured Wi-Fi."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "What is SIM swapping?",
    options: [
      "Changing mobile wallpapers",
      "An attack where criminals transfer your phone number to another SIM",
      "Installing two SIM cards",
      "Switching mobile networks"
    ],
    answer: 1,
    explanation: "SIM swapping can allow attackers to receive your calls and OTPs.",
    tip: "Add a PIN or security verification to your mobile account."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "What does biometric authentication use?",
    options: [
      "Passwords only",
      "Fingerprints or facial recognition",
      "Wi-Fi signals",
      "Bluetooth"
    ],
    answer: 1,
    explanation: "Biometric authentication verifies your identity using unique physical characteristics.",
    tip: "Use biometrics together with a strong PIN."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "Which feature helps locate a lost smartphone?",
    options: [
      "Find My Device",
      "Airplane Mode",
      "Bluetooth",
      "Calculator"
    ],
    answer: 0,
    explanation: "Find My Device (Android) and Find My (Apple) help locate, lock, or erase lost devices.",
    tip: "Enable device tracking before you need it."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "What should you do if your phone is stolen?",
    options: [
      "Ignore it",
      "Use Find My Device, remotely lock the phone, and change important passwords",
      "Buy a new phone immediately",
      "Delete contacts only"
    ],
    answer: 1,
    explanation: "Locking the device and changing passwords reduces the risk of unauthorized access.",
    tip: "Report the theft to your mobile carrier and local authorities if necessary."
  }
];

export default mobileQuestions;