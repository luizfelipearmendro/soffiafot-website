import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Servicos from "./pages/Servicos.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Blog from "./pages/Blog.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";
import PageTitle from "./components/PageTitle";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <PageTitle />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/equipe" element={<Navigate to="/sobre" replace />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
