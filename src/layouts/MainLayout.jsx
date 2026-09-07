import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
export default function MainLayout({ children }) {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
