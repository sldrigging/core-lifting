import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT WIRE ROPE CONSTRUCTIONS DO YOU STOCK?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "WHAT IS THE DIFFERENCE BETWEEN EIPS AND EEIPS?", answer: null },
  { question: "DO YOU CUT AND SPOOL ROPE TO LENGTH?", answer: null },
  { question: "WHAT GRADES OF WIRE ROPE DO YOU CARRY?", answer: null },
  { question: "CAN YOU MATCH AN EXISTING ROPE SPECIFICATION?", answer: null },
];

export default function WireRopePage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="WIRE ROPE"
      actionLink="/core-pdfs/A1%20Core%20Bridon%20Ropes.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>General Purpose Ropes:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Drill Lines:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — stocked in premium <strong>EIPS / EEIPS</strong> grades, engineered for crane and industrial lifting applications.
      </p>

      <div className="dp-feature">
        <strong>BRIDON Crane Ropes:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.
      </div>

      <div className="dp-feature">
        <strong>TEUFELBERGER Crane Ropes:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
