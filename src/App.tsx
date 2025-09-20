import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import QuemSomos from "./pages/quemSomos";
import Faq from "./pages/faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/faq" element={<Faq />} /> 
          {/* <Route path="/proposta" element={<Proposta />} /> */}
          {/* <Route path="/contato" element={<Contato />} /> */}
          {/* <Route path="/consulta" element={<Consulta />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
