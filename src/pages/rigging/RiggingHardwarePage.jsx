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
import logoMckissick from "../../assets/brand-logos/rigging-hardware/mckissick.png";
import logoRenfroe from "../../assets/brand-logos/rigging-hardware/renfroe.png";

const faq = [
  {
    question: "What brands of rigging hardware does Core Lifting supply?",
    answer:
      "We stock a comprehensive selection of premium rigging hardware from industry leaders—including Crosby, Gunnebo, Green Pin, CM, William Hackett, Miller, AMH, Muncy Machine, RopeBlock, McKissick, and Renfroe. Every brand is chosen for its proven quality and engineering excellence. By offering a vast array of product configurations within these trusted lineups, we ensure your team has the exact attachment points, capacities, and specialized designs needed to safely handle any lifting application.",
  },
  {
    question: "Will your rigging hardware meet my certification or identification requirements?",
    answer:
      "Yes. Our selection of top-tier domestic brands features all required OSHA and ASME manufacturer markings, sizes, and clearly legible Working Load Limits, ensuring full compliance and traceability for your critical lifts. We also carry fully compliant, high-quality imported hardware options that meet all relevant identification and load-rating standards, ensuring meets your compliance requirements.",
  },
  {
    question: "Can you help select the right rigging hardware for my application?",
    answer:
      "Absolutely. Our experienced team provides expert recommendations based on load requirements, environment, and usage to ensure safe and efficient operations.",
  },
  {
    question: "Do you offer custom rigging assemblies with this hardware?",
    answer:
      "Yes, we fabricate complete custom slings and assemblies using these premium components to meet your exact lifting needs. Our team specializes in designing highly engineered, custom solutions to solve unique and complex lifting challenges, while also excelling in the high-volume production of quality, cost-effective common rigging assemblies for your everyday operations.",
  },
  {
    question: "Can you service jobsites across Texas, and Louisiana?",
    answer:
      "Yes. With our strategic network of rigging fabrication shops located in Odessa, Houston, Lafayette, Houma, and New Orleans, we are positioned to provide rapid, reliable service to jobsites across Texas, Louisiana, and the entire Gulf Coast, in addition to supporting projects and performing work nationwide.",
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
  { name: "McKissick", src: logoMckissick },
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
            <strong>Turnbuckles:</strong> We offer robust Crosby, CM, and Green Pin turnbuckles built for precise tensioning and reliable load securing in structural and rigging applications.
          </div>
          <div className="dp-feature">
            <strong>Hoist Rings:</strong> High-performance hoist rings from Crosby, Gunnebo, GreenPin, and AMH allow safe, pivoting lifts at any angle, ideal for machinery handling and maintenance in industrial environments.
          </div>
          <div className="dp-feature">
            <strong>Plate Clamps & Magnets:</strong> Our plate clamps from Crosby, Green Pin, CM, AMH, and Renfroe are available in a wide selection of configurations to match any lifting angle. Designed with flexible attachment points and articulating lifting eyes, they allow for seamless turning, flipping, and manipulation of steel plates.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Premium Rigging Hardware from Crosby, Gunnebo, Green Pin and more…</h1>
      <p className="dp-desc">
        Core Lifting supplies premium rigging hardware from leading brands including Crosby, Gunnebo, and Green Pin for safe, reliable performance in industrial, construction, and oilfield applications across Louisiana, Texas, and the Gulf Coast. Our expert team helps you select the right shackles, blocks, hooks, turnbuckles, hoist rings, plate clamps, and other rigging hardware to meet your exact lifting requirements.
      </p>

      <div className="dp-feature">
        <strong>Shackles:</strong> We supply high-strength Crosby, Green Pin, Gunnebo, and CM shackles in a full range of sizes and styles, engineered for long-term reliability in heavy rigging applications.
      </div>

      <div className="dp-feature">
        <strong>Blocks:</strong> Core Lifting supplies high-performance rigging blocks from trusted industry leaders, including Crosby, McKissick, RopeBlock, Miller, and Green Pin. We purposefully stock our inventory with the exact block styles and capacities demanded by the heavy-lift, marine, and oilfield sectors in our region, ensuring you always have immediate access to the right equipment for your specific job.
      </div>

      <div className="dp-feature">
        <strong>Hooks:</strong> Premium hooks from Crosby, Miller, Green Pin, and CM provide secure load attachment with safety latches and high capacity ratings for safe overhead lifting and rigging operations.
      </div>
    </ProductDetailLayout>
  );
}
