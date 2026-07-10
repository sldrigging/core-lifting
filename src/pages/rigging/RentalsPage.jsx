import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Rentals-.jpg";

const faq = [
  {
    question: "WHAT TYPES OF EQUIPMENT DO YOU RENT?",
    answer:
      "We rent spreader bars, wire rope slings, chain slings, synthetic slings, blocks, shackles, and other rigging hardware.",
  },
  {
    question: "ARE YOUR RENTAL ITEMS INSPECTED AND CERTIFIED?",
    answer:
      "Yes. All rental equipment is inspected before each use and comes with proper certification and documentation.",
  },
  {
    question: "DO YOU OFFER SHORT-TERM AND LONG-TERM RENTALS?",
    answer:
      "Yes. We provide flexible rental terms to match your project duration and budget requirements.",
  },
  {
    question: "CAN YOU DELIVER RENTAL EQUIPMENT TO MY JOB SITE?",
    answer:
      "Yes. We offer delivery and pickup services throughout Louisiana, Texas, and the Gulf Coast region.",
  },
  {
    question: "DO YOU PROVIDE TECHNICAL SUPPORT WITH RENTALS?",
    answer:
      "Yes. Our experienced team can help you select the right equipment and provide guidance on proper use and rigging practices.",
  },
];

export default function RentalsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="RENTALS"
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Blocks:</strong> We offer snatch blocks, crane blocks, and overhaul balls for rent, providing reliable sheave and hook solutions for lifting and rigging operations.
          </div>
          <div className="dp-feature">
            <strong>Shackles:</strong> Our large selection of rental shackles includes various sizes, styles, and working load limits from trusted manufacturers.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Premium Rigging Equipment Rentals</h1>
      <p className="dp-desc">
        Core Lifting offers a wide selection of high-quality rigging equipment for rent, including spreader bars, slings, blocks, and shackles. Our well-maintained inventory helps you complete projects safely and efficiently without the cost of ownership.
      </p>

      <div className="dp-feature">
        <strong>Spreader Bars:</strong> We rent engineered spreader bars in various lengths and capacities to safely handle long or awkward loads with proper load distribution.
      </div>

      <div className="dp-feature">
        <strong>Slings:</strong> Our rental inventory includes wire rope, chain, and synthetic slings in multiple lengths and capacities, all inspected and certified for safe use.
      </div>
    </ProductDetailLayout>
  );
}
