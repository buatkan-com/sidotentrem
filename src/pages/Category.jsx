import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";
import { products } from "../data/products";
import { motifs } from "../data/site";
import Icon from "../components/Icons";
export default function Category({ type }) {
  const fabric = type === "fabric",
    items = products.filter((p) =>
      fabric
        ? p.group === "fabric"
        : ["men", "women", "outer"].includes(p.group),
    );
  return (
    <section className="page category-page">
      <div className="category-hero">
        <div>
          <span className="eyebrow">
            {fabric ? "TEXTILE / 01" : "FASHION / 02"}
          </span>
          <h1>
            {fabric ? (
              <>
                Dari Lembar Kain
                <br />
                <em>Menjadi Warisan.</em>
              </>
            ) : (
              <>
                Batik untuk
                <br />
                <em>Hari Ini.</em>
              </>
            )}
          </h1>
          <p>
            {fabric
              ? "Motif yang membawa doa dan cerita, diwujudkan dalam kain yang dapat diwariskan."
              : "Ketika warisan bertemu dengan potongan yang modern—ringan, relevan, dan tetap berakar."}
          </p>
        </div>
        <img
          src={
            fabric
              ? "https://images.pexels.com/photos/27897131/pexels-photo-27897131.jpeg"
              : "https://images.pexels.com/photos/2728762/pexels-photo-2728762.jpeg"
          }
          alt="Sido Tentrem editorial"
        />
      </div>
      <div className="section-wrap category-content">
        <SectionHeading
          eyebrow={fabric ? "THE LANGUAGE OF MOTIF" : "THE WARDROBE"}
          title={fabric ? "Motif yang hidup." : "Siluet yang dekat."}
        >
          {fabric
            ? "Setiap motif memiliki filosofi, asal, dan proses yang menjadikannya unik."
            : "Koleksi busana dibuat untuk hadir secara natural dalam keseharian—dari formal hingga santai."}
        </SectionHeading>
        {fabric && (
          <div className="motif-list">
            {motifs.map((m, i) => (
              <Link key={m.name} to={`/koleksi/${m.product}`}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.meaning}</p>
                </div>
                <small>
                  {m.origin}
                  <br />
                  {m.technique}
                </small>
                <Icon name="ArrowUpRight" />
              </Link>
            ))}
          </div>
        )}
        <div className="category-products">
          <SectionHeading
            eyebrow="SELECTED COLLECTION"
            title={fabric ? "Pilihan kain" : "Pilihan busana"}
          />
          <ProductGrid products={items} />
        </div>
      </div>
    </section>
  );
}
