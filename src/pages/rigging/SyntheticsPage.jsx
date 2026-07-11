import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Synthetic-Slings.jpg";
import logoCoreTex from "../../assets/brand-logos/Synthetics/core-tex.png";
import logoBexco from "../../assets/brand-logos/Synthetics/bexco.png";
import logoCwc from "../../assets/brand-logos/Synthetics/continental-Western-Corporation.png";

const faq = [
  {
    question: "WHAT ARE THE ADVANTAGES OF SYNTHETIC SLINGS OVER WIRE ROPE?",
    answer:
      "Synthetic slings are lighter, more flexible, and gentler on loads while offering excellent strength and chemical resistance for many lifting applications.",
  },
  {
    question: "DO YOU SUPPLY HIGH PERFORMANCE ROUNDSLINGS?",
    answer:
      "Yes. We offer premium polyester and Dyneema roundslings from Bexco with high strength-to-weight ratios and low stretch for demanding applications.",
  },
  {
    question: "IS HMPE ROPE SUITABLE FOR MARINE AND HEAVY INDUSTRIAL USE?",
    answer:
      "Yes. Bexco HMPE rope is lightweight, extremely strong, and resistant to water and UV, making it ideal for marine and heavy lifting operations.",
  },
  {
    question: "CAN YOU PROVIDE CUSTOM SYNTHETIC SLING ASSEMBLIES?",
    answer:
      "Yes. Our team fabricates custom web slings and roundslings to your exact specifications with proper tagging and certification.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting stocks and delivers synthetic slings and cordage quickly with expert support throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

const brands = [
  { name: "Core-Tex", src: logoCoreTex },
  { name: "Bexco", src: logoBexco },
  { name: "Continental Western Corporation", src: logoCwc },
];

const downloads = getPdfItems(["B3", "B4", "B5", "H1", "H2", "C8", "G1"]);

export default function SyntheticsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="SYNTHETICS"
      heroImage={heroImg}
      brands={brands}
      downloads={downloads}
      downloadsTitle="Synthetics & Cordage PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Cordage:</strong> We stock a full range of cordage including nylon, polyester, polypropylene, and manila for rigging, mooring, utility, and general purpose applications.
          </div>
          <div className="dp-feature">
            <strong>High performance HMPE Rope from Bexco:</strong> Bexco HMPE rope provides ultra-high strength, low weight, and floatation properties, ideal for demanding marine, industrial, and heavy-lifting operations.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Synthetic Slings and Cordage</h1>
      <p className="dp-desc">
        Core Lifting supplies premium synthetic slings and cordage for safe, lightweight lifting solutions across Louisiana, Texas, and the Gulf Coast. From durable web slings and polyester roundslings to high-performance Dyneema and HMPE ropes from Bexco, our products deliver superior strength, reduced weight, and excellent chemical resistance.
      </p>

      <div className="dp-feature">
        <strong>Web Slings:</strong> Our Core-Tex web slings provide reliable strength, flexibility, and abrasion resistance for versatile lifting applications in industrial and construction environments.
      </div>

      <div className="dp-feature">
        <strong>Polyester Roundslings:</strong> Polyester roundslings from Core Lifting offer high load capacity, low stretch, and soft handling to protect delicate or finished loads during lifts.
      </div>

      <div className="dp-feature">
        <strong>High Performance Dyneema Roundslings from Bexco:</strong> Bexco Dyneema roundslings deliver exceptional strength-to-weight ratio, low stretch, and superior durability for critical heavy lifts where weight savings matter.
      </div>
    </ProductDetailLayout>
  );
}
