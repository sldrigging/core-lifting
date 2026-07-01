import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT ROPE SIZES DO YOU STOCK FOR WINCH LINE REPLACEMENT?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "CAN YOU PERFORM WINCH LINE REPLACEMENT ON-SITE?", answer: null },
  { question: "WHAT END FITTING OPTIONS ARE AVAILABLE?", answer: null },
  { question: "DO YOU PROVIDE DOCUMENTATION AFTER SERVICING?", answer: null },
  { question: "HOW LONG DOES A TYPICAL WINCH LINE REPLACEMENT TAKE?", answer: null },
];

export default function WinchLineServicingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WINCH LINE\nSERVICING"}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Spooling Services:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Documentation:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — replacement winch line installed with precision spooling and terminated with <strong>swaged or mechanically applied fittings</strong> to OEM specifications.
      </p>

      <div className="dp-feature">
        <strong>Replacement Wire Rope:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>End Fittings:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
