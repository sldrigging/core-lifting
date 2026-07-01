import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT LUBRICATOR BRANDS DO YOU STOCK?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "WHAT ROPE DIAMETERS CAN BE LUBRICATED?", answer: null },
  { question: "DO YOU OFFER ON-SITE LUBRICATION SERVICES?", answer: null },
  { question: "WHAT LUBRICANTS DO YOU RECOMMEND?", answer: null },
  { question: "HOW OFTEN SHOULD WIRE ROPE BE LUBRICATED?", answer: null },
];

export default function LubricatorsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="LUBRICATORS"
      actionLink="/core-pdfs/J1%20Core%20Lubricant%20Products.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Lubricants &amp; Cleaners:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Parts &amp; Accessories:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — featuring the <strong>Viper</strong> brand wire rope lubricator system, engineered for consistent penetration and corrosion protection.
      </p>

      <div className="dp-feature">
        <strong>Wire Rope Lubricators:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
      </div>

      <div className="dp-feature">
        <strong>Application Methods:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
