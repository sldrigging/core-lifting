import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getPdfItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Lubricator-.jpg";
import logoSeaLube from "../../assets/brand-logos/Lubrication/Sea-Lube.png";
import logoSeaGrease from "../../assets/brand-logos/Lubrication/Sea-Grease.png";
import logoViper from "../../assets/brand-logos/Lubrication/viper.png";
import logoVitalife from "../../assets/brand-logos/Lubrication/vitalife.png";

const faq = [
  {
    question: "WHY IS REGULAR WIRE ROPE LUBRICATION IMPORTANT?",
    answer:
      "Proper lubrication reduces internal friction, prevents corrosion, and significantly extends rope service life while maintaining performance.",
  },
  {
    question: "WHAT IS A VIPER LUBRICATOR?",
    answer:
      "Viper lubricators are specialized tools that apply lubricants under pressure deep into the wire rope core for more effective and efficient maintenance. They fit a variety of sizes and constructions of wire rope and can be equipped with scrapers and other accessories to help clean and lubricate your wire rope more effectively.",
  },
  {
    question: "DO YOU CARRY LUBRICANTS FOR MARINE AND OFFSHORE USE?",
    answer:
      "Yes. We supply SeaLube, SeaGrease, Vitalife, and Viper lubricants specifically formulated for harsh marine and offshore environments.",
  },
  {
    question: "CAN YOU HELP SELECT THE RIGHT LUBRICANT FOR MY WIRE ROPE?",
    answer:
      "Absolutely. Our team recommends the best lubricant and application method based on your rope type, environment, and operating conditions.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides fast delivery of wire rope lubricants and lubricators with expert support throughout Louisiana, Texas, the Permian Basin, and the Gulf Coast region.",
  },
];

const brands = [
  { name: "Viper", src: logoViper },
  { name: "Vitalife", src: logoVitalife },
  { name: "SeaLube", src: logoSeaLube },
  { name: "SeaGrease", src: logoSeaGrease },
];

const downloads = getPdfItems(["J1", "J2"]);

export default function LubricatorsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="LUBRICATORS &amp; LUBRICANTS"
      heroImage={heroImg}
      brands={brands}
      downloads={downloads}
      downloadsTitle="Lubrication PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>SeaLube:</strong> SeaLube offers advanced biodegradable wire rope lubrication formulated to preserve and penetrate wire rope for use in harsh marine and offshore conditions. Size options include a 12oz aerosol can, 5 gal pail, and 55 gal drum. SeaLube 19 is an environmentally friendly option that is specifically formulated not to leave a sheen on the water, and is available in 5 gal pails.
          </div>
          <div className="dp-feature">
            <strong>SeaGrease:</strong> SeaGrease provides heavy-duty wire rope lubrication that resists washout and maintains performance in wet, corrosive environments. SeaGrease is perfect for offshore tow lines, and applied with a pressure lubricator, but can also be applied by hand.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Wire Rope Lubricant and Lubricators</h1>
      <p className="dp-desc">
        Core Lifting supplies premium wire rope grease, lubricants, and lubricators to extend rope life, reduce wear, and protect against corrosion in demanding environments across Louisiana, Texas, the Permian Basin, and the Gulf Coast. Our products include lubricators and parts from Viper and high-performance lubricants and greases from Crosby Vitalife, Viper, SeaLube, and SeaGrease.
      </p>

      <div className="dp-feature">
        <strong>Viper Lubricators:</strong> Viper wire rope lubricators from Core Lifting penetrate deep into the rope core for thorough lubrication, reducing internal wear and extending service life. Viper Lubricators are available in a variety of configurations to accommodate different wire rope diameters and constructions. Core Lifting also provides penetrating and coating greases from Viper that work well with their pressure applicators.
      </div>

      <div className="dp-feature">
        <strong>Crosby Vitalife:</strong> Crosby Vitalife lubricants are well-respected in the industry for excellent corrosion protection and friction / wear reduction for wire rope in industrial, marine, and oilfield applications. Core Lifting’s expert staff can recommend the correct Vitalife product as they are available in multiple sizes and formulations to meet your exact needs.
      </div>
    </ProductDetailLayout>
  );
}
