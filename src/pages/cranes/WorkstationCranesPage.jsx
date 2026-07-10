import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Cranes/Gorbel-workstation-crane.jpg";

const faq = [
  {
    question: "WHAT WORKSTATION CRANE SYSTEMS DO YOU OFFER?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "WHAT CAPACITY RANGES ARE AVAILABLE?", answer: null },
  { question: "CAN SYSTEMS BE CEILING OR STRUCTURE MOUNTED?", answer: null },
  { question: "DO YOU OFFER ERGONOMIC ASSIST DEVICES?", answer: null },
  { question: "WHAT IS THE TYPICAL LEAD TIME FOR A WORKSTATION SYSTEM?", answer: null },
];

export default function WorkstationCranesPage() {
  return (
    <ProductDetailLayout
      parent="CRANES"
      parentPath="/cranes"
      title={"WORKSTATION\nCRANES"}
      heroImage={heroImg}
      actionLink="/core-pdfs/Crane%20Information/CI-03-%20Core%20Workstation%20Cranes%20PDF.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Span &amp; Coverage:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Mounting Options:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — lightweight aluminum and steel workstation crane systems for <strong>repetitive lift applications</strong>, reducing operator fatigue and improving throughput.
      </p>

      <div className="dp-feature">
        <strong>Bridge Systems:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Monorail Systems:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
