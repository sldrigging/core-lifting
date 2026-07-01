import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT CAPACITIES CAN YOU LOAD TEST TO?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "DO YOU PROVIDE LOAD TEST DOCUMENTATION?", answer: null },
  { question: "WHAT ITEMS CAN BE LOAD TESTED?", answer: null },
  { question: "CAN LOAD TESTING BE PERFORMED ON-SITE?", answer: null },
  { question: "WHICH LOCATIONS OFFER LOAD TESTING SERVICES?", answer: null },
];

export default function LoadTestingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"LOAD\nTESTING"}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Water Bag Testing:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Documentation &amp; Certification:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — performed at our certified facilities with capacities ranging from proof loads to <strong>1.3 million lbs</strong>, documented and traceable.
      </p>

      <div className="dp-feature">
        <strong>Horizontal Testing:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Vertical Testing:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
