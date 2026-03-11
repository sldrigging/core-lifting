import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CranesPage from "./pages/CranesPage";
import RiggingPage from "./pages/RiggingPage";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      {!isHomePage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cranes" element={<CranesPage />} />
          <Route path="/rigging" element={<RiggingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
