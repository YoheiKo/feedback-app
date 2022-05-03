import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconlink from "./components/AboutIconlink";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconlink />
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
