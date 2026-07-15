import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getCraneDocItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Cranes/Bridge-cranes.jpg";

const faq = [
  {
    question: "WHAT SPAN AND CAPACITY RANGES DO YOU BUILD TO?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "DO YOU MANUFACTURE BOTH TOP-RUNNING AND UNDERHUNG CRANES?", answer: null },
  { question: "WHAT DUTY CLASSIFICATIONS DO YOU BUILD TO?", answer: null },
  { question: "CAN YOU DESIGN TO CMAA SPECIFICATIONS?", answer: null },
  { question: "WHAT IS YOUR TYPICAL LEAD TIME FOR A NEW CRANE?", answer: null },
];

const downloads = getCraneDocItems(["CI-01", "CS-01", "CS-02", "CS-03", "CH-01", "CH-02", "CH-03"]);

export default function BridgeCranesPage() {
  return (
    <ProductDetailLayout
      parent="CRANES"
      parentPath="/cranes"
      title={"BRIDGE\nCRANES"}
      heroImage={heroImg}
      downloads={downloads}
      downloadsTitle="Bridge Cranes PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Top Running:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Underhung:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — engineered and manufactured to <strong>CMAA specifications</strong>, designed for duty classifications A through F to match your application requirements.
      </p>

      <div className="dp-feature">
        <strong>Single Girder:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Double Girder:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
