import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Cranes/Gorbel-Jib-Crane.jpg";

const faq = [
  {
    question: "WHAT JIB CRANE CONFIGURATIONS DO YOU OFFER?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "WHAT CAPACITY AND SPAN RANGES ARE AVAILABLE?", answer: null },
  { question: "DO YOU PROVIDE FOUNDATION DESIGN FOR FREE-STANDING JIBS?", answer: null },
  { question: "CAN JIB CRANES BE COMBINED WITH AN OVERHEAD BRIDGE CRANE?", answer: null },
  { question: "WHAT IS THE TYPICAL LEAD TIME FOR A JIB CRANE?", answer: null },
];

export default function JibCranesPage() {
  return (
    <ProductDetailLayout
      parent="CRANES"
      parentPath="/cranes"
      title={"JIB\nCRANES"}
      heroImage={heroImg}
      actionLink="/core-pdfs/Crane%20Information/CI-02-%20Core%20Jib%20Cranes%20PDF.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Wall Cantilever:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Mast Type:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — available in <strong>free standing, wall bracket, wall cantilever, and mast type</strong> configurations to suit any workspace layout and coverage requirement.
      </p>

      <div className="dp-feature">
        <strong>Free Standing:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Wall Bracket:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
