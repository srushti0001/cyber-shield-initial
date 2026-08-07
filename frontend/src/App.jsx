import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Modules from "./pages/Modules";
import Home from "./pages/Home";
import Phishing from "./pages/Phishing";
import PasswordChecker from "./pages/PasswordChecker";
import UrlAnalyzer from "./pages/UrlAnalyzer";
import ChatAssistant from "./pages/ChatAssistant";
import QuizHome from "./pages/QuizHome";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Review from "./pages/Review";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phishing" element={<Phishing />} />
        <Route path="/password" element={<PasswordChecker />} />
        <Route path="/url" element={<UrlAnalyzer />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/assistant" element={<ChatAssistant />} />
        <Route path="/quiz" element={<QuizHome />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;