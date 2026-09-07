import { useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import Icon from "../components/Icons";
export default function Collection() {
  const [filter, setFilter] = useState("Semua"),
    [sort, setSort] = useState("Pilihan");
  const filters = [
    "Semua",
    "Kain Batik",
    "Pria",
    "Wanita",
    "Outer",
    "Koleksi Terbaru",
  ];
  const list = useMemo(() => {
    let x = [...products];
    if (filter === "Kain Batik") x = x.filter((p) => p.group === "fabric");
    if (filter === "Pria") x = x.filter((p) => p.group === "men");
    if (filter === "Wanita") x = x.filter((p) => p.group === "women");
    if (filter === "Outer") x = x.filter((p) => p.group === "outer");
    if (filter === "Koleksi Terbaru") x = x.filter((p) => p.newest);
    if (sort === "Terbaru") x.sort((a, b) => b.id - a.id);
    if (sort === "Harga Terendah") x.sort((a, b) => a.price - b.price);
    if (sort === "Harga Tertinggi") x.sort((a, b) => b.price - a.price);
    return x;
  }, [filter, sort]);
  return (
    <section className="page collection-page">
      <div className="page-hero">
        <span className="eyebrow">THE COLLECTION</span>
        <h1>
          Koleksi
          <br />
          <em>Sido Tentrem.</em>
        </h1>
        <p>Karya yang lahir dari tradisi dan dirancang untuk hari ini.</p>
      </div>
      <div className="section-wrap">
        <div className="filter-row">
          <div className="filters">
            {filters.map((f) => (
              <button
                className={filter === f ? "selected" : ""}
                onClick={() => setFilter(f)}
                key={f}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="sort">
            Urutkan{" "}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option>Pilihan</option>
              <option>Terbaru</option>
              <option>Harga Terendah</option>
              <option>Harga Tertinggi</option>
            </select>
            <Icon name="ArrowDown" size={14} />
          </label>
        </div>
        {list.length ? (
          <ProductGrid products={list} />
        ) : (
          <div className="empty">Belum ada karya dalam kategori ini.</div>
        )}
      </div>
    </section>
  );
}
