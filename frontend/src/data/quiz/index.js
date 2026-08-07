import phishingQuestions from "./phishing";
import passwordQuestions from "./passwords";
import malwareQuestions from "./malware";
import webSecurityQuestions from "./webSecurity";
import networkSecurityQuestions from "./networkSecurity";
import emailSecurityQuestions from "./emailSecurity";
import mobileSecurityQuestions from "./mobileSecurity";
import cloudSecurityQuestions from "./cloudSecurity";
import cyberAwarenessQuestions from "./cyberAwareness";
import ethicalHackingQuestions from "./ethicalHacking";

const quizData = {
  phishing: phishingQuestions,
  passwords: passwordQuestions,
  malware: malwareQuestions,
  "web-security": webSecurityQuestions,
  "network-security": networkSecurityQuestions,
  "email-security": emailSecurityQuestions,
  "mobile-security": mobileSecurityQuestions,
  "cloud-security": cloudSecurityQuestions,
  "cyber-awareness": cyberAwarenessQuestions,
  "ethical-hacking": ethicalHackingQuestions,
};

export default quizData;