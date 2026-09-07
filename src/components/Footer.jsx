import { Link } from "react-router-dom";
import Icon from "./Icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">SIDO TENTREM</span>
          <p>Warisan yang Menenteramkan.</p>
          <p className="muted">
            Batik Jawa yang berakar pada tradisi, dirancang untuk kehidupan
            modern.
          </p>
        </div>
        <div className="footer-col">
          <h4>Jelajahi</h4>
          <Link to="/koleksi">Koleksi</Link>
          <Link to="/kain-batik">Kain Batik</Link>
          <Link to="/busana">Busana</Link>
          <Link to="/cerita">Cerita</Link>
        </div>
        <div className="footer-col">
          <h4>Tentang</h4>
          <Link to="/tentang-kami">Tentang Kami</Link>
          <a href="#craft">Craftsmanship</a>
          <a href="#contact">FAQ</a>
          <a href="mailto:halo@sidotentrem.id">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Belanja</h4>
          <a
            href="https://www.tokopedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tokopedia <Icon name="ArrowUpRight" size={13} />
          </a>
          <a
            href="https://shopee.co.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopee <Icon name="ArrowUpRight" size={13} />
          </a>
          <h4 className="follow-title">Ikuti</h4>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="Instagram" size={14} /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok <Icon name="ArrowUpRight" size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sido Tentrem. All rights reserved.</span>
        <span>Made with respect for Indonesian heritage.</span>
      </div>
    </footer>
  );
}
