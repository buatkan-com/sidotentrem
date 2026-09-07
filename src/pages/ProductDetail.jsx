import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icons";
import { products, formatPrice } from "../data/products";
import ProductGallery from "../components/ProductGallery";
import MarketplaceButtons from "../components/MarketplaceButtons";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";
export default function ProductDetail() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);
  if (!p)
    return (
      <div className="not-found">
        <span className="eyebrow">404 / COLLECTION</span>
        <h1>Karya tidak ditemukan.</h1>
        <Link className="btn btn-dark" to="/koleksi">
          Kembali ke Koleksi
        </Link>
      </div>
    );
  return (
    <section className="product-detail page">
      <div className="breadcrumbs section-wrap">
        <Link to="/koleksi">
          <Icon name="ArrowLeft" size={14} /> Koleksi
        </Link>
        <span>/</span>
        <span>{p.name}</span>
      </div>
      <div className="product-layout section-wrap">
        <ProductGallery images={p.images} name={p.name} />
        <ProductInfo p={p} />
      </div>
      <div className="section-wrap">
        <MarketplaceButtons marketplace={p.marketplace} />
      </div>
      <section className="product-story section-wrap">
        <div>
          <span className="eyebrow">THE STORY</span>
          <h2>
            Setiap motif
            <br />
            <em>membawa makna.</em>
          </h2>
        </div>
        <p>{p.story}</p>
      </section>
      <section className="section-wrap related">
        <div className="related-head">
          <span className="eyebrow">YOU MAY ALSO LIKE</span>
          <h2>Karya lainnya</h2>
        </div>
        <ProductGrid
          products={products.filter((x) => x.id !== p.id).slice(0, 3)}
        />
      </section>
    </section>
  );
}
function ProductInfo({ p }) {
  const [open, setOpen] = useState(null);
  const rows = [
    ["Material", p.material],
    ["Technique", p.technique],
    ["Motif", p.motif],
    ["Color", p.color],
    ["Origin", p.origin],
    ["Size / Dimension", p.dimensions],
    ["Availability", p.availability],
  ];
  return (
    <div className="product-info">
      <span className="eyebrow">{p.category}</span>
      <h1>{p.name}</h1>
      <div className="detail-price">{formatPrice(p.price)}</div>
      <p className="lead">{p.description}</p>
      <div className="specs">
        {rows.map(([a, b]) => (
          <div key={a}>
            <span>{a}</span>
            <b>{b}</b>
          </div>
        ))}
      </div>
      <div className="accordions">
        <button onClick={() => setOpen(open === 0 ? null : 0)}>
          <span>Product Story</span>
          {open === 0 ? (
            <Icon name="Minus" size={16} />
          ) : (
            <Icon name="Plus" size={16} />
          )}
        </button>
        {open === 0 && <p>{p.story}</p>}
        <button onClick={() => setOpen(open === 1 ? null : 1)}>
          <span>Care Guide</span>
          {open === 1 ? (
            <Icon name="Minus" size={16} />
          ) : (
            <Icon name="Plus" size={16} />
          )}
        </button>
        {open === 1 && <p>{p.care}</p>}
      </div>
      <div className="info-note">
        <Icon name="Check" size={15} />
        <span>Made with respect for Indonesian heritage.</span>
      </div>
    </div>
  );
}
