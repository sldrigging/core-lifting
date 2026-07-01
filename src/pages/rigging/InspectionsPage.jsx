import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT TYPES OF INSPECTIONS DO YOU PERFORM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "HOW OFTEN SHOULD RIGGING BE INSPECTED?", answer: null },
  { question: "DO YOU PROVIDE INSPECTION REPORTS?", answer: null },
  { question: "CAN INSPECTIONS BE PERFORMED ON-SITE?", answer: null },
  { question: "WHAT STANDARDS GOVERN RIGGING INSPECTIONS?", answer: null },
];

export default function InspectionsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="INSPECTIONS"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Documentation:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Inspection Frequency:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — performed by qualified inspectors in compliance with <strong>ASME B30.9</strong> and <strong>OSHA 1910.184</strong> requirements.
      </p>

      <div className="dp-feature">
        <strong>Sling Inspections:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Fitting Inspections:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
