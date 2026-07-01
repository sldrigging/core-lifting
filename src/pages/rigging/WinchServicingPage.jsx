import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT WINCH BRANDS DO YOU SERVICE?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "DO YOU STOCK REPLACEMENT PARTS?", answer: null },
  { question: "HOW LONG DOES A TYPICAL REPAIR TAKE?", answer: null },
  { question: "CAN SERVICING BE PERFORMED ON-SITE?", answer: null },
  { question: "DO YOU PROVIDE LOAD TEST DOCUMENTATION AFTER SERVICE?", answer: null },
];

export default function WinchServicingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WINCH\nSERVICING"}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Parts Inventory:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Turnaround &amp; Documentation:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — complete winch repair and testing services, returning equipment to <strong>OEM specifications</strong> with full load test documentation.
      </p>

      <div className="dp-feature">
        <strong>Repair Services:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Testing &amp; Certification:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
