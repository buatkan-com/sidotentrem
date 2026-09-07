import Icon from "./Icons";
export default function MarketplaceButtons({ marketplace }) {
  return (
    <div className="marketplace">
      <div>
        <span className="eyebrow">TERSEDIA DI MARKETPLACE</span>
        <h3>Temukan karya Sido Tentrem.</h3>
        <p>
          Pesan produk melalui official store kami di marketplace pilihan Anda.
        </p>
      </div>
      <div className="market-buttons">
        <a
          href={marketplace.tokopedia}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="ShoppingBag" size={17} /> Beli di Tokopedia{" "}
          <Icon name="ArrowUpRight" size={15} />
        </a>
        <a href={marketplace.shopee} target="_blank" rel="noopener noreferrer">
          <Icon name="ShoppingBag" size={17} /> Beli di Shopee{" "}
          <Icon name="ArrowUpRight" size={15} />
        </a>
      </div>
    </div>
  );
}
