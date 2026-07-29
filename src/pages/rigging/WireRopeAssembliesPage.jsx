import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/3-2/Wire-Rope-Assemblies.jpg";

const downloads = getPdfItems(["B1", "C1", "C2", "C3", "C5", "C6", "C9", "C10", "C11"]);

const faq = [
  {
    question: "WHAT TYPES OF WIRE ROPE ASSEMBLIES DOES CORE LIFTING FABRICATE?",
    answer:
      "We specialize in a full range of custom wire rope assemblies, including lifting slings, swage and spelter socket assemblies, winch lines, and boom pendants. Our in-house fabrication ensures each solution meets your precise load, length, and environmental requirements.",
  },
  {
    question: "ARE YOUR WIRE ROPE ASSEMBLIES TESTED AND CERTIFIED?",
    answer:
      "Yes. All assemblies undergo rigorous proof-testing and are certified to meet or exceed OSHA, ASME, and other relevant industry standards. Our commitment to quality and traceability gives you complete confidence in every lift.",
  },
  {
    question: "CAN YOU CREATE CUSTOM LENGTHS AND CONFIGURATIONS FOR SOCKET ASSEMBLIES OR BOOM PENDANTS?",
    answer:
      "Absolutely. Our experienced team fabricates custom socket assemblies and boom pendants in virtually any length or configuration using premium Crosby, RopeBlock, and other high-quality components for optimal performance and fit.",
  },
  {
    question: "WHAT MAKES CORE LIFTING’S WIRE ROPE ASSEMBLIES BETTER THAN OFF-THE-SHELF OPTIONS?",
    answer:
      "We combine American craftsmanship, premium materials, expert splicing and socketing techniques, and rapid turnaround to deliver stronger, safer, longer-lasting solutions tailored specifically to your equipment and application—reducing downtime and enhancing safety.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA AND THE GULF COAST REGION?",
    answer:
      "Yes. With locations in Texas and Louisiana, we proudly serve local industries with fast lead times, expert consultation, and reliable delivery of custom wire rope assemblies across the Gulf Coast and beyond.",
  },
];

export default function WireRopeAssembliesPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WIRE ROPE\nASSEMBLIES"}
      heroImage={heroImg}
      downloads={downloads}
      downloadsTitle="Wire Rope Assemblies PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Winch Lines:</strong> Core Lifting builds custom winch lines built with high-strength wire rope and precision terminations, providing exceptional durability, abrasion resistance, and performance under heavy, continuous pulling loads.
          </div>
          <div className="dp-feature">
            <strong>Boom Pendants:</strong> Our precision-engineered boom pendant assemblies feature swage or spelter sockets on premium wire rope, offering maximum strength, fatigue resistance, and compliance with rigorous safety standards to keep your cranes operating safely.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">
        Custom Wire Rope Assemblies &amp; Lifting Solutions in Louisiana, Texas, and the Gulf Coast
      </h1>
      <p className="dp-desc">
        At Core Lifting, we specialize in fabricating high-performance custom wire rope assemblies engineered for safety, strength, and reliability in the most demanding industrial, construction, and heavy-lifting environments. Our in-house team of skilled fabricators uses premium materials and precision techniques to deliver lifting slings, socket assemblies, winch lines, and boom pendants that exceed industry standards and maximize your operational efficiency.
      </p>

      <div className="dp-feature">
        <strong>Lifting Slings:</strong> Our expert fabricators produce mechanically spliced, hand spliced, braided, and cable laid wire rope lifting slings using premium materials, delivering superior flexibility, durability, and load capacity tailored to your exact specifications for safe, efficient lifts.
      </div>

      <div className="dp-feature">
        <strong>Socket Assemblies:</strong> We fabricate premium swage and spelter socket assemblies, including open and closed designs for boom pendant lines, achieving 100% termination efficiency that matches the full breaking strength of the wire rope for unmatched reliability and safety.
      </div>
    </ProductDetailLayout>
  );
}
