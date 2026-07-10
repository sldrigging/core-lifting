import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Chain-Slings.jpg";
import logoPeerless from "../../assets/brand-logos/Chain/peerless.png";
import logoGunnebo from "../../assets/brand-logos/Chain/gunnebo.png";

const faq = [
  {
    question: "WHAT BRANDS OF CHAIN PRODUCTS DOES CORE LIFTING OFFER?",
    answer:
      "We supply premium chain products from Gunnebo, a trusted manufacturer known for high-performance alloy chain and components.",
  },
  {
    question: "CAN YOU FABRICATE CUSTOM CHAIN SLINGS?",
    answer:
      "Yes. Our in-house team fabricates custom Gunnebo chain slings to your exact length, grade, and configuration requirements with full testing and certification.",
  },
  {
    question: "ARE YOUR CHAIN PRODUCTS SUITABLE FOR OVERHEAD LIFTING?",
    answer:
      "Yes. All Gunnebo chain slings and components are designed and rated for overhead lifting with clear working load limits and safety factors.",
  },
  {
    question: "DO YOU PROVIDE CHAIN INSPECTIONS AND REPLACEMENTS?",
    answer:
      "Yes. We offer chain inspections, repairs, and replacements to keep your rigging compliant and safe.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides fast access to Gunnebo chain products with local support and delivery throughout Louisiana, Texas, and the Gulf Coast.",
  },
];

const brands = [
  { name: "Peerless", src: logoPeerless },
  { name: "Gunnebo", src: logoGunnebo },
];

export default function ChainProductsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"CHAIN\nPRODUCTS"}
      heroImage={heroImg}
      actionLink="/core-pdfs/F1%20Core%20Industrial%20Chain%20%26%20Fittings.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      brands={brands}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Chain Fittings:</strong> Our selection of premium Gunnebo chain fittings, including master links, hooks, and connectors, ensures secure assemblies and maximum safety in chain sling systems.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Premium Chain Products &amp; Slings from Gunnebo</h1>
      <p className="dp-desc">
        Core Lifting supplies high-quality chain products from Gunnebo for reliable performance in lifting, rigging, and industrial applications across Louisiana, Texas, and the Gulf Coast. Our team delivers durable chain slings, industrial chains, and fittings engineered for safety and longevity in demanding environments.
      </p>

      <div className="dp-feature">
        <strong>Chain Slings:</strong> We fabricate custom Gunnebo alloy chain slings built to your specifications, offering excellent flexibility, heat resistance, and high working load limits for heavy lifting.
      </div>

      <div className="dp-feature">
        <strong>Industrial Chains:</strong> Gunnebo industrial chains from Core Lifting provide dependable strength and wear resistance for towing, securing, and material handling applications.
      </div>
    </ProductDetailLayout>
  );
}
