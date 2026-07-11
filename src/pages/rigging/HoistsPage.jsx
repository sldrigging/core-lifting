import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Hoists.jpg";
import jdnRepairLogo from "../../assets/imgs-rv/jdn-repair-center-blue.png";
import logoJdn from "../../assets/brand-logos/Hoists/jdn-200w.png";
import logoElephant from "../../assets/brand-logos/Hoists/elephant-200w.png";
import logoChesterHoist from "../../assets/brand-logos/Hoists/Chester-Hoist-200w.png";
import logoTiger from "../../assets/brand-logos/Hoists/tiger-200w.png";
import logoCm from "../../assets/brand-logos/Hoists/Cm-200w.png";
import logoAmh from "../../assets/brand-logos/Hoists/amh-200w.png";

const faq = [
  {
    question: "ARE YOU AN AUTHORIZED JD NEUHAUS REPAIR CENTER?",
    answer:
      "Yes. Core Lifting is an authorized JD Neuhaus dealer and repair center with factory-trained technicians for warranty service and maintenance.",
  },
  {
    question: "WHAT TYPES OF HOISTS DO YOU SUPPLY?",
    answer:
      "We offer manual, air, electric, hydraulic, BOP, and wire rope pulling hoists from JD Neuhaus, CM, Tiger, Elephant, Chester, and AMH.",
  },
  {
    question: "DO YOU PERFORM HOIST REPAIRS AND INSPECTIONS?",
    answer:
      "Yes. Our certified technicians provide complete hoist inspection, repair, load testing, and recertification services.",
  },
  {
    question: "CAN YOU HELP SELECT THE RIGHT HOIST FOR MY APPLICATION?",
    answer:
      "Absolutely. Our team evaluates load requirements, duty cycle, environment, and power source to recommend the optimal hoist solution.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. With multiple branches, Core Lifting delivers hoists, parts, and repair services quickly throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

const brands = [
  { name: "JD Neuhaus", src: logoJdn },
  { name: "Elephant", src: logoElephant },
  { name: "Chester Hoist", src: logoChesterHoist },
  { name: "Tiger", src: logoTiger },
  { name: "CM", src: logoCm },
  { name: "AMH", src: logoAmh },
];

const downloads = getPdfItems(["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"]);

export default function HoistsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="HOISTS"
      heroImage={heroImg}
      titleLogo={{ src: jdnRepairLogo, alt: "JD Neuhaus Authorized Repair Center" }}
      brands={brands}
      downloads={downloads}
      downloadsTitle="Hoists PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Hydraulic Hoists:</strong> Robust hydraulic hoists from JD Neuhaus provide powerful lifting capacity and reliability in heavy-duty applications and remote locations.
          </div>
          <div className="dp-feature">
            <strong>BOP Hoists:</strong> Specialized BOP hoists engineered for safe handling of blowout preventers and heavy drilling equipment in oilfield operations.
          </div>
          <div className="dp-feature">
            <strong>Wire Rope Pulling Hoists:</strong> Versatile wire rope pulling hoists from Tiger and AMH deliver strong pulling power for rigging, tensioning, and recovery tasks.
          </div>
          <div className="dp-feature">
            <strong>Beam Clamps:</strong> Heavy-duty beam clamps from trusted brands provide secure, temporary attachment points for hoists and rigging on structural beams.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Hoists &ndash; JD Neuhaus Authorized Dealer &amp; Repair Center</h1>
      <p className="dp-desc">
        Core Lifting is an authorized JD Neuhaus dealer and repair center, and supplies and services and multiple other brands of premium hoists for demanding industrial and oilfield applications across Louisiana, Texas, and the Gulf Coast. Our expert team provides manual, air, electric, hydraulic, and specialized hoists from leading brands with full repair and maintenance support.
      </p>

      <div className="dp-feature">
        <strong>Manual Chain Hoists and Lever Hoists:</strong> We supply durable manual chain hoists and lever hoists from Chester, Tiger, AMH and CM for portable, dependable lifting where power sources are limited.
      </div>

      <div className="dp-feature">
        <strong>Air Hoists:</strong> JD Neuhaus and Elephant air hoists deliver powerful, precise control and spark-resistant operation ideal for hazardous environments and heavy industrial use.
      </div>

      <div className="dp-feature">
        <strong>Electric Hoists:</strong> High-performance electric hoists from CM and other leading brands offer efficient, smooth operation with advanced safety features for overhead lifting systems.
      </div>
    </ProductDetailLayout>
  );
}
