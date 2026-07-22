import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/rigging-products/Bridon-Constructex-Hero.jpg";

const downloads = getPdfItems(["A1"]);

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
      "Yes. Because Constructex resists crushing and outer wire breakage, it lasts substantially longer in severe drilling applications. Extended rope service life directly reduces downtime and labor costs associated with frequent rope cut-offs and replacements.",
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
      downloads={downloads}
      downloadsTitle="Wire Rope PDF Downloads"
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
        Core Lifting is your trusted distributor for genuine Bridon Constructex wire rope, available in diameters from 5/8" through 1 5/8". Whether you need standard reels or custom-terminated cut lengths, our rigging experts are ready to outfit your rig with the exact specifications your job demands across Louisiana, Texas, and the Gulf Coast.
      </p>

      <div className="dp-feature">
        <strong>High Breaking Force | 24% Stronger:</strong> Thanks to its swaged and compacted design, Constructex packs more steel into the same footprint. For example, a 1" Constructex has a minimum breaking force of 62.5 tons—delivering up to 24% more strength compared to standard EIPS ropes (51.7 tons) and outperforming EEIPS ropes (56.9 tons).
      </div>

      <div className="dp-feature">
        <strong>Long Service Life | More Up Time:</strong> Constructex is purpose-built for heavy-duty drilling lines, and boom hoists. Its unique 9-strand construction with polymer centers gives the rope added flexibility in handling while resisting the intense drum wear that causes traditional ropes to fail early.
      </div>
    </ProductDetailLayout>
  );
}
