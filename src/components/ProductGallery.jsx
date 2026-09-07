import { useState } from "react";
import Icon from "./Icons";
export default function ProductGallery({ images, name }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const next = () => setI((i + 1) % images.length),
    prev = () => setI((i - 1 + images.length) % images.length);
  return (
    <>
      <div className="gallery">
        <div className="gallery-main">
          <img
            src={images[i]}
            alt={`${name} — image ${i + 1}`}
            onClick={() => setZoom(true)}
          />
          <button
            className="gallery-expand"
            onClick={() => setZoom(true)}
            aria-label="Zoom image"
          >
            <Icon name="Maximize2" size={17} />
          </button>
          <button
            className="gallery-prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" />
          </button>
          <button
            className="gallery-next"
            onClick={next}
            aria-label="Next image"
          >
            <Icon name="ChevronRight" />
          </button>
          <span className="gallery-count">
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
        <div className="thumbs">
          {images.map((im, j) => (
            <button
              key={im}
              className={j === i ? "selected" : ""}
              onClick={() => setI(j)}
              aria-label={`View image ${j + 1}`}
            >
              <img src={im} alt="" />
            </button>
          ))}
        </div>
      </div>
      {zoom && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoom(false)}
        >
          <button onClick={() => setZoom(false)} aria-label="Close">
            <Icon name="X" />
          </button>
          <img src={images[i]} alt={name} />
        </div>
      )}
    </>
  );
}
