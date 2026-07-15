import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Wire-Rope.jpg";
import logoBridon from "../../assets/brand-logos/Wire Rope/bridon-200w.png";
import logoTeufelberger from "../../assets/brand-logos/Wire Rope/Teufelberger-200w.png";
import logoRedaelli from "../../assets/brand-logos/Wire Rope/Redaelli-200w.png";
import logoAmericanWireRope from "../../assets/brand-logos/Wire Rope/american-wire-rope-200w.png";

const faq = [
  {
    question: "WHAT BRANDS OF WIRE ROPE DOES CORE LIFTING CARRY?",
    answer:
      "We stock premium wire rope from top manufacturers including Bridon, Teufelberger, and Redaelli, selected for their proven quality and performance in industrial applications.",
  },
  {
    question: "DO YOU OFFER WIRE ROPE FOR CRANES AND DRILLING OPERATIONS?",
    answer:
      "Yes. We supply specialized Bridon, Teufelberger, and Redaelli crane ropes and drill lines designed for high-cycle fatigue resistance and maximum safety in crane and drilling environments.",
  },
  {
    question: "CAN I GET HELP SELECTING THE RIGHT WIRE ROPE FOR MY EQUIPMENT?",
    answer:
      "Absolutely. Our experienced team provides expert guidance on wire rope selection, construction, diameter, and grade to match your specific load, duty cycle, and operating conditions.",
  },
  {
    question: "ARE YOUR WIRE ROPES CERTIFIED AND TESTED?",
    answer:
      "Yes. All wire rope we supply meets or exceeds relevant industry standards with full traceability and certification for reliable, safe performance.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. As a Louisiana and Texas based supplier, Core Lifting provides fast access to premium wire rope with expert support and quick delivery throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

const brands = [
  { name: "Bridon", src: logoBridon },
  { name: "Teufelberger", src: logoTeufelberger },
  { name: "Redaelli", src: logoRedaelli },
  { name: "American Wire Rope", src: logoAmericanWireRope },
];

const downloads = getPdfItems(["A1", "A2", "A3", "A4", "A5"]);

const featuredProducts = [
  { label: "Bridon Constructex Drill Line – TON MILE CHAMP", to: "/rigging/bridon-constructex" },
];

export default function WireRopePage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="WIRE ROPE"
      heroImage={heroImg}
      brands={brands}
      downloads={downloads}
      downloadsTitle="Wire Rope PDF Downloads"
      featuredProducts={featuredProducts}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Redaelli Crane Ropes:</strong> Redaelli crane ropes available through Core Lifting feature premium compaction and specialized designs that deliver outstanding durability and efficiency for heavy-duty crane applications.
          </div>
          <div className="dp-feature">
            <strong>General Purpose Ropes:</strong> Our general purpose wire ropes offer versatile, cost-effective solutions with reliable strength and flexibility for a wide range of standard lifting, rigging, and material handling tasks.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">
        Premium Wire Rope Solutions from Top Brands, Serving Louisiana, Texas, and the Gulf Coast
      </h1>
      <p className="dp-desc">
        Core Lifting supplies premium wire rope from leading manufacturers including Bridon, Teufelberger, and Redaelli to meet the toughest demands in crane, drilling, and industrial applications. Our expert team helps you select the right wire rope for maximum safety, performance, and service life.
      </p>

      <div className="dp-feature">
        <strong>Bridon Crane Ropes &amp; Drill Lines:</strong> We supply high-performance Bridon crane ropes and drill lines engineered for exceptional fatigue resistance, abrasion resistance, and reliability in demanding crane and drilling environments. Learn more about Bridon Constructex&rsquo;s Drill Lines with unbeatable TON-MILE ratings.
      </div>

      <div className="dp-feature">
        <strong>Teufelberger Crane Ropes:</strong> Teufelberger crane ropes from Core Lifting provide advanced construction and high breaking strength, ensuring safer lifts and longer service life in overhead crane and heavy industrial use.
      </div>
    </ProductDetailLayout>
  );
}
