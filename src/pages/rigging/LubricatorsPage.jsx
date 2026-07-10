import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Lubricator-.jpg";
import logoSeaLube from "../../assets/brand-logos/Lubrication/Sea-Lube.png";
import logoSeaGrease from "../../assets/brand-logos/Lubrication/Sea-Grease.png";

const faq = [
  {
    question: "WHY IS REGULAR WIRE ROPE LUBRICATION IMPORTANT?",
    answer:
      "Proper lubrication reduces internal friction, prevents corrosion, and significantly extends rope service life while maintaining safety and performance.",
  },
  {
    question: "WHAT IS A VIPER LUBRICATOR?",
    answer:
      "Viper lubricators are specialized tools that apply lubricant under pressure deep into the wire rope core for more effective and efficient maintenance.",
  },
  {
    question: "DO YOU CARRY LUBRICANTS FOR MARINE AND OFFSHORE USE?",
    answer:
      "Yes. We supply SeaLube and SeaGrease specifically formulated for harsh marine and offshore environments.",
  },
  {
    question: "CAN YOU HELP SELECT THE RIGHT LUBRICANT FOR MY WIRE ROPE?",
    answer:
      "Absolutely. Our team recommends the best lubricant and application method based on your rope type, environment, and operating conditions.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides fast delivery of wire rope lubricants and lubricators with expert support throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

const brands = [
  { name: "SeaLube", src: logoSeaLube },
  { name: "SeaGrease", src: logoSeaGrease },
];

export default function LubricatorsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="LUBRICATORS"
      heroImage={heroImg}
      actionLink="/core-pdfs/J1%20Core%20Lubricant%20Products.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      brands={brands}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>SeaLube:</strong> SeaLube offers advanced wire rope lubrication formulated for harsh marine and offshore conditions, delivering excellent penetration and long-lasting protection.
          </div>
          <div className="dp-feature">
            <strong>SeaGrease:</strong> SeaGrease provides heavy-duty wire rope lubrication that resists washout and maintains performance in wet, corrosive environments.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Wire Rope Lube and Lubricators</h1>
      <p className="dp-desc">
        Core Lifting supplies premium wire rope lubricants and lubricators to extend rope life, reduce wear, and protect against corrosion in demanding environments across Louisiana, Texas, and the Gulf Coast. Our products include Viper lubricators and high-performance lubricants from Crosby Vitalife, SeaLube, and SeaGrease.
      </p>

      <div className="dp-feature">
        <strong>Viper Lubricators:</strong> Viper wire rope lubricators from Core Lifting penetrate deep into the rope core for thorough lubrication, reducing internal wear and extending service life.
      </div>

      <div className="dp-feature">
        <strong>Crosby Vitalife:</strong> Crosby Vitalife lubricants provide superior corrosion protection and wear reduction for wire rope in industrial, marine, and oilfield applications.
      </div>
    </ProductDetailLayout>
  );
}
