import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icons";
import { journal } from "../data/journal";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
export default function JournalDetail() {
  const { slug } = useParams();
  const a = journal.find((x) => x.slug === slug);
  if (!a)
    return (
      <div className="not-found">
        <span className="eyebrow">404 / CERITA</span>
        <h1>Cerita tidak ditemukan.</h1>
        <Link className="btn btn-dark" to="/cerita">
          Kembali ke Cerita
        </Link>
      </div>
    );
  const related = a.related
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);
  return (
    <article className="article page">
      <div className="article-top section-wrap">
        <Link to="/cerita">
          <Icon name="ArrowLeft" size={14} /> Semua Cerita
        </Link>
        <span>
          {a.category} · {a.date} · {a.reading}
        </span>
      </div>
      <header className="article-head">
        <span className="eyebrow">{a.category}</span>
        <h1>{a.title}</h1>
        <p>{a.excerpt}</p>
      </header>
      <div className="article-hero">
        <img src={a.image} alt={a.title} />
      </div>
      <div className="article-body">
        <div className="article-aside">
          <span>
            SIDO
            <br />
            TENTREM
          </span>
          <small>STORY / {a.date}</small>
        </div>
        <div className="article-copy">
          {a.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <blockquote>{a.quote}</blockquote>
          <p>{`Di Sido Tentrem, kami ingin setiap karya menjadi titik temu antara apa yang telah diwariskan dan apa yang sedang kita jalani. Karena itu, cerita di balik kain selalu menjadi bagian dari produk itu sendiri.`}</p>
        </div>
      </div>
      {related.length > 0 && (
        <section className="section-wrap article-related">
          <span className="eyebrow">FROM THE COLLECTION</span>
          <h2>Karya dalam cerita ini.</h2>
          <div className="product-grid">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
      <div className="article-next">
        <span className="eyebrow">KEEP READING</span>
        <h2>
          Lebih banyak cerita
          <br />
          <em>dari Sido Tentrem.</em>
        </h2>
        <Link className="btn btn-dark" to="/cerita">
          Kembali ke Journal <Icon name="ArrowUpRight" size={16} />
        </Link>
      </div>
    </article>
  );
}
