import { Link } from "react-router-dom";
import Icon from "../components/Icons";
export default function NotFound() {
  return (
    <section className="not-found page">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>
        Halaman ini sedang
        <br />
        <em>mencari jalannya.</em>
      </h1>
      <p>
        Mungkin alamatnya berubah, tetapi perjalanan Sido Tentrem masih menunggu
        untuk ditemukan.
      </p>
      <Link className="btn btn-dark" to="/">
        Kembali ke Beranda <Icon name="ArrowUpRight" size={16} />
      </Link>
    </section>
  );
}
