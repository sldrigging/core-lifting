import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Rigging-Hardware.jpg";
import logoCrosby from "../../assets/brand-logos/rigging-hardware/crosby.png";
import logoGunnebo from "../../assets/brand-logos/rigging-hardware/gunnebo.png";
import logoGreenPin from "../../assets/brand-logos/rigging-hardware/green-pin.png";
import logoCm from "../../assets/brand-logos/rigging-hardware/Cm-200w.png";
import logoWilliamHackett from "../../assets/brand-logos/rigging-hardware/william-hackett.png";
import logoMiller from "../../assets/brand-logos/rigging-hardware/miller.png";
import logoAmh from "../../assets/brand-logos/rigging-hardware/amh-200w.png";
import logoMuncy from "../../assets/brand-logos/rigging-hardware/muncy.png";
import logoRopeblock from "../../assets/brand-logos/rigging-hardware/ropeblock.png";
import logoRenfroe from "../../assets/brand-logos/rigging-hardware/renfroe.png";

const faq = [
  {
    question: "WHAT BRANDS OF RIGGING HARDWARE DOES CORE LIFTING SUPPLY?",
    answer:
      "We stock premium rigging hardware from industry leaders including Crosby, Gunnebo, and Green Pin, selected for their proven quality and safety certifications.",
  },
  {
    question: "ARE YOUR RIGGING HARDWARE PRODUCTS CERTIFIED?",
    answer:
      "Yes. All hardware meets or exceeds OSHA, ASME, and manufacturer standards with full traceability and working load limits clearly marked.",
  },
  {
    question: "CAN YOU HELP SELECT THE RIGHT RIGGING HARDWARE FOR MY APPLICATION?",
    answer:
      "Absolutely. Our experienced team provides expert recommendations based on load requirements, environment, and usage to ensure safe and efficient operations.",
  },
  {
    question: "DO YOU OFFER CUSTOM RIGGING ASSEMBLIES WITH THIS HARDWARE?",
    answer:
      "Yes. We fabricate complete custom slings and assemblies using these premium components for your specific lifting needs.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. With locations across the region, Core Lifting delivers premium rigging hardware quickly to customers throughout Louisiana, Texas, and the Gulf Coast.",
  },
];

const brands = [
  { name: "Crosby", src: logoCrosby },
  { name: "Gunnebo", src: logoGunnebo },
  { name: "Green Pin", src: logoGreenPin },
  { name: "CM", src: logoCm },
  { name: "William Hackett", src: logoWilliamHackett },
  { name: "Miller", src: logoMiller },
  { name: "AMH", src: logoAmh },
  { name: "Muncy Machine", src: logoMuncy },
  { name: "RopeBlock", src: logoRopeblock },
  { name: "Renfroe", src: logoRenfroe },
];

const downloads = getPdfItems([
  "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14",
  "D1", "D2", "D3", "D4", "D5", "D6",
  "G1",
]);

export default function RiggingHardwarePage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"RIGGING\nHARDWARE"}
      heroImage={heroImg}
      brands={brands}
      downloads={downloads}
      downloadsTitle="Rigging Hardware PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Turnbuckles:</strong> We offer robust Crosby and Green Pin turnbuckles built for precise tensioning and reliable load securing in structural and rigging applications.
          </div>
          <div className="dp-feature">
            <strong>Hoist Rings:</strong> High-performance hoist rings from top brands allow safe, pivoting lifts at any angle, ideal for machinery handling and maintenance in industrial environments.
          </div>
          <div className="dp-feature">
            <strong>Plate Clamps:</strong> Our plate clamps from trusted manufacturers provide secure, non-marring vertical and horizontal lifting of steel plates with high safety factors.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Premium Rigging Hardware from Crosby, Gunnebo, Green Pin and more</h1>
      <p className="dp-desc">
        Core Lifting supplies premium rigging hardware from leading brands including Crosby, Gunnebo, and Green Pin for safe, reliable performance in industrial, construction, and oilfield applications across Louisiana, Texas, and the Gulf Coast. Our expert team helps you select the right shackles, blocks, hooks, turnbuckles, hoist rings, and plate clamps to meet your exact lifting requirements.
      </p>

      <div className="dp-feature">
        <strong>Shackles:</strong> We supply high-strength Crosby and Green Pin shackles in a full range of sizes and styles, engineered for maximum load ratings and long-term reliability in heavy rigging applications.
      </div>

      <div className="dp-feature">
        <strong>Blocks:</strong> Our selection of quality blocks from leading brands delivers smooth operation, high working load limits, and durable construction for wire rope and lifting systems.
      </div>

      <div className="dp-feature">
        <strong>Hooks:</strong> Premium Crosby and Gunnebo hooks provide secure load attachment with safety latches and high capacity ratings for safe overhead lifting and rigging operations.
      </div>
    </ProductDetailLayout>
  );
}
