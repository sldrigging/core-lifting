import "./PdfDownloads.css";

function pdfHref(path) {
  return `/core-pdfs/${path.split("/").map(encodeURIComponent).join("/")}`;
}

export default function PdfDownloads({ title = "PDF Downloads", items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="pdf-downloads">
      <h2 className="pdf-downloads-heading">{title}</h2>
      <div className="pdf-downloads-grid">
        {items.map((item) => (
          <a
            key={item.code}
            href={pdfHref(item.pdf)}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-downloads-item"
          >
            <img
              src={`/core-pdf-pngs/${item.image}`}
              alt={item.label}
              className="pdf-downloads-img"
            />
            <p className="pdf-downloads-label">
              {item.code} &ndash; {item.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
