import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT BLOCK TYPES DO YOU REBUILD?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "DO YOU STOCK SHEAVES AND BEARINGS?", answer: null },
  { question: "IS NDT TESTING INCLUDED IN THE REBUILD?", answer: null },
  { question: "WHAT IS THE TYPICAL REBUILD TURNAROUND TIME?", answer: null },
  { question: "IS LOAD TESTING INCLUDED AFTER REBUILD?", answer: null },
];

export default function BlockRebuildsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"BLOCK\nREBUILDS"}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Hook NDT:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Load Test &amp; Certification:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — complete disassembly, inspection, and rebuild of crane and rigging blocks to <strong>OEM specifications</strong>, load tested and certified upon completion.
      </p>

      <div className="dp-feature">
        <strong>Disassembly &amp; Inspection:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Sheave &amp; Bearing Replacement:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
