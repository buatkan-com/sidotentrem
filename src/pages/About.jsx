import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import { locations } from "../data/site";
export default function About() {
  return (
    <section className="page about-page">
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1675994645106-8c48153d8c25?q=80&w=1471&auto=format&fit=crop"
          alt="Suasana hangat bernuansa Jawa"
        />
        <div>
          <span className="eyebrow light">ABOUT SIDO TENTREM</span>
          <h1>
            Menjaga Warisan.
            <br />
            <em>Menghidupkannya Kembali.</em>
          </h1>
        </div>
      </div>
      <div className="section-wrap about-copy">
        <span className="eyebrow">OUR BEGINNING</span>
        <h2>Sebuah doa untuk hidup yang tenteram.</h2>
        <div className="two-col-copy">
          <div>
            <p>
              Sido Tentrem lahir dari keyakinan sederhana: warisan tidak harus
              tinggal di masa lalu. Ia dapat terus hidup ketika kita
              mengenalnya, menghargainya, lalu memberinya ruang dalam kehidupan
              hari ini.
            </p>
            <p>
              Nama Sido Tentrem terinspirasi dari filosofi Jawa yang
              menggambarkan harapan akan kehidupan yang terus berada dalam
              keadaan tenteram, harmonis, dan penuh keberkahan.
            </p>
          </div>
          <div>
            <p>
              Kami mengembangkan kain dan busana dengan akar batik Jawa, bekerja
              bersama pengrajin dan memilih material dengan perhatian pada rasa,
              ketahanan, serta cara karya tersebut akan digunakan.
            </p>
            <p>
              Bagi kami, modernisasi bukan menghapus karakter. Modernisasi
              adalah mencari bentuk baru agar pengetahuan lama dapat terus
              diwariskan kepada generasi berikutnya.
            </p>
          </div>
        </div>
      </div>
      <section className="timeline section-wrap">
        <div>
          <span className="eyebrow">OUR JOURNEY</span>
          <h2>
            Dari tradisi,
            <br />
            <em>untuk masa depan.</em>
          </h2>
        </div>
        <div>
          {[
            [
              "01",
              "The Beginning",
              "Berawal dari ketertarikan pada motif dan warna batik Jawa.",
            ],
            [
              "02",
              "Growing the Craft",
              "Membangun hubungan dengan pengrajin dan memperluas eksplorasi material.",
            ],
            [
              "03",
              "Modern Heritage",
              "Mengembangkan siluet kontemporer tanpa melepaskan karakter tradisi.",
            ],
            [
              "04",
              "The Future",
              "Membuat batik semakin dekat dengan generasi yang akan datang.",
            ],
          ].map((x) => (
            <div className="timeline-item" key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-craft">
        <div className="about-craft-image">
          <img
            src="https://images.pexels.com/photos/39224094/pexels-photo-39224094.jpeg"
            alt="Detail fashion dan kain"
            loading="lazy"
          />
        </div>
        <div>
          <span className="eyebrow">OUR CRAFT</span>
          <h2>
            Authentic.
            <br />
            <em>Thoughtfully made.</em>
          </h2>
          <p>
            Kami percaya kualitas terasa dari hal-hal yang sering tidak
            terlihat: bagaimana kain jatuh, bagaimana warna bertemu, bagaimana
            motif diberi ruang, dan bagaimana sebuah karya bertahan setelah
            berkali-kali dikenakan.
          </p>
          <div className="feature-lines">
            <b>
              01 <span>Handcrafted</span>
            </b>
            <b>
              02 <span>Indonesian Heritage</span>
            </b>
            <b>
              03 <span>Thoughtfully Made</span>
            </b>
          </div>
        </div>
      </section>
      <section className="section-wrap locations">
        <div className="locations-head">
          <span className="eyebrow">WHERE THE CRAFT LIVES</span>
          <h2>
            Tangan-tangan di balik
            <br />
            <em>Sido Tentrem.</em>
          </h2>
        </div>
        <div className="location-grid">
          {locations.map((l) => (
            <div key={l[0]}>
              <span>STUDIO / {l[1]}</span>
              <h3>{l[0]}</h3>
              <p>{l[2]}</p>
              <small>{l[3]} pengalaman</small>
            </div>
          ))}
        </div>
      </section>
      <div className="about-end">
        <span className="eyebrow">READY TO EXPLORE?</span>
        <h2>
          Temukan karya
          <br />
          <em>yang terasa dekat.</em>
        </h2>
        <Link className="btn btn-dark" to="/koleksi">
          Lihat Koleksi <Icon name="ArrowUpRight" size={16} />
        </Link>
      </div>
    </section>
  );
}
