import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Cranes/OHC-Load-Testing.jpg";

const faq = [
  {
    question: "WHAT LOAD TEST CAPACITIES CAN YOU PERFORM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "WHAT STANDARDS GOVERN OVERHEAD CRANE LOAD TESTING?", answer: null },
  { question: "HOW OFTEN SHOULD AN OVERHEAD CRANE BE LOAD TESTED?", answer: null },
  { question: "DO YOU PROVIDE LOAD TEST CERTIFICATES?", answer: null },
  { question: "CAN LOAD TESTING BE PERFORMED ON NEW AND EXISTING CRANES?", answer: null },
];

export default function CraneLoadTestingPage() {
  return (
    <ProductDetailLayout
      parent="CRANES"
      parentPath="/cranes"
      title={"LOAD\nTESTING"}
      heroImage={heroImg}
      actionLink="/core-pdfs/Services%20Information/CS-01-%20Core%20Sample%20Inspection%20Report.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Documentation &amp; Certification:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>New &amp; Existing Cranes:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — overhead crane load testing performed in compliance with <strong>ASME B30.2 and CMAA</strong> standards, with full documentation and certification provided.
      </p>

      <div className="dp-feature">
        <strong>Fixed Weights:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Water Bags:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
