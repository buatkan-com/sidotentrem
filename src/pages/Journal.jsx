import { Link } from "react-router-dom";
import Icon from "../components/Icons";
import { journal } from "../data/journal";
export default function Journal() {
  return (
    <section className="page journal-page">
      <div className="page-hero journal-hero">
        <span className="eyebrow">JOURNAL / CERITA</span>
        <h1>
          Catatan dari
          <br />
          <em>Sido Tentrem.</em>
        </h1>
        <p>
          Tentang motif, manusia, proses, dan cara menjaga warisan tetap hidup.
        </p>
      </div>
      <div className="section-wrap">
        <div className="journal-feature">
          <img src={journal[0].image} alt={journal[0].title} />
          <div>
            <span className="eyebrow">{journal[0].category}</span>
            <h2>{journal[0].title}</h2>
            <p>{journal[0].excerpt}</p>
            <small>
              {journal[0].date} · {journal[0].reading}
            </small>
            <Link className="text-link" to={`/cerita/${journal[0].slug}`}>
              Baca cerita <Icon name="ArrowUpRight" size={15} />
            </Link>
          </div>
        </div>
        <div className="journal-all">
          {journal.slice(1).map((a, i) => (
            <Link className="journal-row" to={`/cerita/${a.slug}`} key={a.slug}>
              <span>0{i + 2}</span>
              <img src={a.image} alt={a.title} loading="lazy" />
              <div>
                <small>{a.category}</small>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <time>
                  {a.date} · {a.reading}
                </time>
              </div>
              <Icon name="ArrowUpRight" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
