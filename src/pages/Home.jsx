import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";
import { motifs, locations, instagram } from "../data/site";
import { journal } from "../data/journal";
export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1680345575909-99633d4b6f46?q=80&w=1470&auto=format&fit=crop"
          alt="Model mengenakan busana bernuansa batik di ruang hangat"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">SIDO TENTREM</span>
          <h1>
            Warisan yang
            <br />
            <em>Menenteramkan.</em>
          </h1>
          <p>
            Menghadirkan keindahan batik Nusantara melalui karya yang dekat
            dengan tradisi, namun tetap relevan untuk kehidupan hari ini.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/koleksi">
              Lihat Koleksi <Icon name="ArrowUpRight" size={16} />
            </Link>
            <Link className="text-link light" to="/tentang-kami">
              Cerita Sido Tentrem <Icon name="ArrowUpRight" size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to discover</span>
          <Icon name="ArrowDown" size={15} />
        </div>
        <div className="hero-mark">
          01 <span>—</span> 06
        </div>
      </section>
      <section className="philosophy section-wrap">
        <div className="philosophy-copy">
          <span className="eyebrow">OUR PHILOSOPHY</span>
          <h2>
            Batik bukan sekadar kain.
            <br />
            <em>Ia adalah cerita yang diwariskan.</em>
          </h2>
          <p>
            Setiap motif menyimpan doa, setiap warna membawa makna, dan setiap
            lembar kain menjadi bagian dari perjalanan yang terus diwariskan.
          </p>
          <Link className="text-link" to="/tentang-kami">
            Mengenal Sido Tentrem <Icon name="ArrowUpRight" size={15} />
          </Link>
        </div>
        <div className="philosophy-image">
          <img
            src="https://images.pexels.com/photos/10682943/pexels-photo-10682943.jpeg"
            alt="Detail tekstur kain bernuansa bumi"
            loading="lazy"
          />
          <span>Detail / 01</span>
        </div>
      </section>
      <section className="collection-preview section-wrap">
        <SectionHeading eyebrow="SELECTED WORKS" title="Koleksi Pilihan">
          Temukan karya pilihan Sido Tentrem untuk menemani berbagai momen.
        </SectionHeading>
        <ProductGrid products={products.slice(0, 8)} />
        <div className="center-link">
          <Link className="btn btn-dark" to="/koleksi">
            Lihat Semua Koleksi <Icon name="ArrowUpRight" size={16} />
          </Link>
        </div>
      </section>
      <section className="motif-section">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="THE LANGUAGE OF BATIK"
            title="Dari Lembar Kain Menjadi Warisan"
          >
            Motif bukan sekadar ornamen. Ia adalah bahasa yang menyimpan doa,
            perjalanan, dan cara pandang.
          </SectionHeading>
          <div className="motif-grid">
            {motifs.map((m, i) => (
              <Link
                to={`/koleksi/${m.product}`}
                className="motif-card"
                key={m.name}
              >
                <span>0{i + 1}</span>
                <h3>{m.name}</h3>
                <p>{m.meaning}</p>
                <small>
                  <Icon name="MapPin" size={13} />
                  {m.origin} · {m.technique}
                </small>
                <Icon name="ArrowUpRight" className="motif-arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="fashion-story">
        <div className="fashion-image">
          <img
            src="https://images.unsplash.com/photo-1766471524299-016b52512780?q=80&w=687&auto=format&fit=crop"
            alt="Editorial fashion bernuansa batik"
            loading="lazy"
          />
        </div>
        <div className="fashion-copy">
          <span className="eyebrow">MODERN HERITAGE</span>
          <h2>
            Batik untuk
            <br />
            <em>hari ini.</em>
          </h2>
          <p>
            Ketika warisan bertemu dengan potongan yang modern. Kami membuat
            batik agar terasa natural di kantor, di perjalanan, maupun di momen
            yang ingin Anda rayakan.
          </p>
          <Link className="text-link" to="/busana">
            Jelajahi Busana <Icon name="ArrowUpRight" size={15} />
          </Link>
        </div>
      </section>
      <section className="craft section-wrap" id="craft">
        <div className="craft-head">
          <SectionHeading
            eyebrow="CRAFTSMANSHIP"
            title={
              <>
                Dibuat dengan Tangan.
                <br />
                <em>Dijaga dengan Hati.</em>
              </>
            }
          >
            Di balik setiap karya terdapat proses yang membutuhkan waktu,
            ketelitian, dan rasa hormat terhadap tradisi.
          </SectionHeading>
        </div>
        <div className="craft-grid">
          <div className="craft-image">
            <img
              src="https://images.pexels.com/photos/34161634/pexels-photo-34161634.jpeg"
              alt="Pengrajin dan proses tekstil"
              loading="lazy"
            />
            <span>Studio / Surakarta</span>
          </div>
          <div className="craft-list">
            {[
              ["01", "Motif", "Berangkat dari kekayaan motif Nusantara."],
              [
                "02",
                "Proses",
                "Dibuat melalui proses yang membutuhkan ketelitian.",
              ],
              ["03", "Makna", "Setiap karya membawa cerita dan filosofi."],
            ].map((x) => (
              <div className="craft-item" key={x[0]}>
                <span>{x[0]}</span>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="maker section-wrap">
        <div className="maker-copy">
          <span className="eyebrow">THE PEOPLE BEHIND IT</span>
          <h2>
            Tangan-Tangan di Balik <em>Sido Tentrem</em>
          </h2>
          <p>
            Kami percaya bahwa menjaga batik berarti juga menjaga pengetahuan
            dan keterampilan orang-orang yang membuatnya.
          </p>
          <div className="location-list">
            {locations.map((l) => (
              <div key={l[0]}>
                <b>{l[0]}</b>
                <span>{l[1]}</span>
                <p>{l[2]}</p>
                <small>{l[3]}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="maker-image">
          <img
            src="https://images.pexels.com/photos/36977424/pexels-photo-36977424.jpeg"
            alt="Fashion portrait bernuansa Jawa"
            loading="lazy"
          />
        </div>
      </section>
      <section className="quote-section">
        <img
          src="https://images.unsplash.com/photo-1652416176625-179e9d96b039?q=80&w=1470&auto=format&fit=crop"
          alt="Tekstur dan suasana hangat Jawa"
          loading="lazy"
        />
        <div>
          <span className="eyebrow light">A NAME, A PRAYER</span>
          <h2>“Sido Tentrem”</h2>
          <p>Sebuah doa untuk hidup yang tenteram.</p>
          <small>
            Nama ini membawa harapan akan ketenangan, keseimbangan, dan
            kehidupan yang terus bertumbuh dalam harmoni.
          </small>
        </div>
      </section>
      <section className="journal-preview section-wrap">
        <SectionHeading
          eyebrow="CATATAN DARI KAMI"
          title="Cerita yang Perlu Dikenal"
        >
          Mengenal motif, manusia, dan proses yang membuat setiap karya terasa
          lebih dekat.
        </SectionHeading>
        <div className="journal-grid">
          {journal.slice(0, 3).map((a, i) => (
            <Link
              className="journal-card"
              to={`/cerita/${a.slug}`}
              key={a.slug}
            >
              <div>
                <img src={a.image} alt={a.title} loading="lazy" />
                <span>0{i + 1}</span>
              </div>
              <span className="journal-cat">{a.category}</span>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <small>
                {a.date} · {a.reading}
              </small>
            </Link>
          ))}
        </div>
        <div className="center-link">
          <Link className="text-link" to="/cerita">
            Baca Semua Cerita <Icon name="ArrowUpRight" size={15} />
          </Link>
        </div>
      </section>
      <section className="instagram section-wrap">
        <SectionHeading eyebrow="@SIDOTENTREM" title="Ikuti Perjalanan Kami">
          Potongan kecil dari studio, kain, dan keseharian di balik Sido
          Tentrem.
        </SectionHeading>
        <div className="ig-grid">
          {instagram.map((im, i) => (
            <a
              key={im}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={im}
                alt={`Sido Tentrem Instagram ${i + 1}`}
                loading="lazy"
              />
              <span>↗</span>
            </a>
          ))}
        </div>
        <div className="center-link">
          <a
            className="text-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Instagram <Icon name="ArrowUpRight" size={15} />
          </a>
        </div>
      </section>
      <section className="marketplace-wide">
        <div>
          <span className="eyebrow">OFFICIAL STORE</span>
          <h2>
            Temukan Sido Tentrem
            <br />
            <em>di Marketplace.</em>
          </h2>
          <p>
            Untuk kemudahan berbelanja, koleksi Sido Tentrem tersedia melalui
            official store kami.
          </p>
        </div>
        <div className="market-large">
          <a
            href="https://www.tokopedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Tokopedia</b>
            <Icon name="ArrowUpRight" />
          </a>
          <a
            href="https://shopee.co.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Shopee</b>
            <Icon name="ArrowUpRight" />
          </a>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
