import { useState } from "react";
import Icon from "./Icons";
export default function Newsletter() {
  const [v, setV] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (v.trim()) setDone(true);
  };
  return (
    <section className="newsletter" id="contact">
      <div>
        <span className="eyebrow">STAY CONNECTED</span>
        <h2>Mari Tetap Terhubung.</h2>
        <p>Ikuti cerita, koleksi terbaru, dan kabar dari Sido Tentrem.</p>
      </div>
      {done ? (
        <div className="thanks">
          Terima kasih. Sampai jumpa di cerita berikutnya.
        </div>
      ) : (
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="email">
            Email Anda
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email Anda"
            value={v}
            onChange={(e) => setV(e.target.value)}
          />
          <button type="submit">
            Berlangganan <Icon name="ArrowUpRight" size={16} />
          </button>
        </form>
      )}
    </section>
  );
}
