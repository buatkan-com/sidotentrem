import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Journal from "./pages/Journal";
import JournalDetail from "./pages/JournalDetail";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koleksi" element={<Collection />} />
        <Route path="/koleksi/:slug" element={<ProductDetail />} />
        <Route path="/kain-batik" element={<Category type="fabric" />} />
        <Route path="/busana" element={<Category type="fashion" />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/cerita" element={<Journal />} />
        <Route path="/cerita/:slug" element={<JournalDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
