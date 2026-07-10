import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/rigging-products/bridon-collage.png";

const faq = [
  {
    question: "WHAT MAKES BRIDON CONSTRUCTEX IDEAL FOR DRILL LINES?",
    answer:
      "Bridon Constructex is engineered for high ton-mile performance as a dedicated drill line, offering superior strength, fatigue resistance, and longevity in demanding derrick applications.",
  },
  {
    question: "HOW DOES CONSTRUCTEX COMPARE TO STANDARD DRILL LINES?",
    answer:
      "It delivers 24% higher breaking force and significantly better ton-mile ratings, resulting in longer service intervals and greater reliability under heavy drilling loads.",
  },
  {
    question: "CAN CONSTRUCTEX REDUCE DOWNTIME ON MY DRILLING RIG?",
    answer:
      "Yes. Its extended service life and high ton-mile capacity minimize rope replacements, keeping your rig operating longer with fewer interruptions.",
  },
  {
    question: "DO YOU SERVE DRILLING OPERATIONS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting stocks Bridon Constructex drill line with fast delivery and technical support to rigs throughout Louisiana, Texas, and the Gulf Coast.",
  },
];

export default function BridonConstructexPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"BRIDON\nCONSTRUCTEX"}
      heroImage={heroImg}
      heroImagePosition="center top"
      actionLink="/core-pdfs/A1%20Core%20Bridon%20Ropes.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Lower Overall Cost:</strong> Its outstanding ton-mile ratings and durability reduce rope consumption and changeouts, lowering total drilling costs while maintaining peak performance in demanding rig environments.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Bridon Constructex Drill Line &ndash; High Ton-Mile Performance</h1>
      <p className="dp-desc">
        Core Lifting supplies Bridon Constructex wire rope engineered as a dedicated drill line for rigs across Louisiana, Texas, and the Gulf Coast. With exceptional ton-mile ratings, this premium drill line delivers higher breaking force, longer service life, and lower operating costs on the rig.
      </p>

      <div className="dp-feature">
        <strong>High Breaking Force | 24% Stronger:</strong> Bridon Constructex provides 24% higher breaking force than standard drill lines, delivering greater safety margins and load capacity for drilling operations.
      </div>

      <div className="dp-feature">
        <strong>Long Service Life | More Up Time:</strong> Designed for superior fatigue and abrasion resistance, Bridon Constructex achieves high ton-mile performance, extending service life and maximizing uptime.
      </div>
    </ProductDetailLayout>
  );
}
