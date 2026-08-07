const networkQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the primary purpose of a firewall?",
    options: [
      "Increase internet speed",
      "Filter incoming and outgoing network traffic",
      "Store passwords",
      "Detect hardware failures"
    ],
    answer: 1,
    explanation: "A firewall monitors and filters network traffic based on security rules.",
    tip: "Always enable the firewall on your device."
  },

  {
    id: 2,
    difficulty: "Easy",
    question: "Which protocol is used for secure web browsing?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    answer: 2,
    explanation: "HTTPS encrypts communication between the browser and the web server.",
    tip: "Look for the padlock icon before entering sensitive information."
  },

  {
    id: 3,
    difficulty: "Easy",
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Verified Public Network",
      "Virtual Public Node",
      "Verified Protected Network"
    ],
    answer: 0,
    explanation: "A VPN creates an encrypted connection between your device and a remote server.",
    tip: "Use a trusted VPN when accessing public Wi-Fi."
  },

  {
    id: 4,
    difficulty: "Medium",
    question: "Which device forwards data packets between different networks?",
    options: [
      "Switch",
      "Router",
      "Monitor",
      "Printer"
    ],
    answer: 1,
    explanation: "Routers connect multiple networks and direct traffic between them.",
    tip: "Home routers should always have strong administrator passwords."
  },

  {
    id: 5,
    difficulty: "Medium",
    question: "Which Wi-Fi encryption standard is currently the most secure for home users?",
    options: [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    answer: 3,
    explanation: "WPA3 provides stronger authentication and encryption than previous standards.",
    tip: "Use WPA3 whenever your router and devices support it."
  },

  {
    id: 6,
    difficulty: "Medium",
    question: "What is a Denial-of-Service (DoS) attack?",
    options: [
      "Encrypting files",
      "Overloading a system so legitimate users cannot access it",
      "Scanning passwords",
      "Installing antivirus software"
    ],
    answer: 1,
    explanation: "A DoS attack overwhelms a target with traffic or requests, making it unavailable.",
    tip: "Organizations often use traffic filtering and rate limiting to reduce DoS attacks."
  },

  {
    id: 7,
    difficulty: "Hard",
    question: "What is the purpose of Network Address Translation (NAT)?",
    options: [
      "Translate programming languages",
      "Hide private IP addresses behind a public IP address",
      "Increase internet speed",
      "Store network logs"
    ],
    answer: 1,
    explanation: "NAT allows multiple devices on a private network to share a single public IP address.",
    tip: "Most home routers use NAT automatically."
  },

  {
    id: 8,
    difficulty: "Hard",
    question: "Which protocol is commonly used for secure remote server access?",
    options: [
      "Telnet",
      "SSH",
      "FTP",
      "HTTP"
    ],
    answer: 1,
    explanation: "SSH encrypts remote communication, unlike Telnet.",
    tip: "Disable Telnet and use SSH for administration."
  },

  {
    id: 9,
    difficulty: "Hard",
    question: "What is packet sniffing?",
    options: [
      "Compressing files",
      "Capturing and analyzing network traffic",
      "Updating routers",
      "Installing drivers"
    ],
    answer: 1,
    explanation: "Packet sniffing is used for network troubleshooting but can also be misused by attackers.",
    tip: "Encrypted traffic helps protect sensitive information from packet sniffing."
  },

  {
    id: 10,
    difficulty: "Hard",
    question: "A public Wi-Fi network has no password. What is the safest action?",
    options: [
      "Log in to online banking immediately",
      "Use the network without precautions",
      "Use a trusted VPN and avoid accessing sensitive accounts",
      "Turn off antivirus software"
    ],
    answer: 2,
    explanation: "Open Wi-Fi networks are vulnerable to eavesdropping and other attacks.",
    tip: "Avoid entering passwords or financial information on unsecured public networks."
  }
];

export default networkQuestions;