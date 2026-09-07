import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import { formatPrice } from "../data/products";
export default function ProductCard({ product, index = 0 }) {
  return (
    <article className="product-card" style={{ "--delay": `${index * 50}ms` }}>
      <Link to={`/koleksi/${product.slug}`} className="product-image">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        <img
          className="product-image-alt"
          src={product.images[1]}
          alt=""
          loading="lazy"
        />
        <span className="product-no">{String(index + 1).padStart(2, "0")}</span>
      </Link>
      <div className="product-meta">
        <div>
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
        </div>
        <span className="product-price">{formatPrice(product.price)}</span>
      </div>
      <Link className="detail-link" to={`/koleksi/${product.slug}`}>
        View Detail <Icon name="ArrowUpRight" size={14} />
      </Link>
    </article>
  );
}
