import ProductDetailLayout from "../../components/ProductDetailLayout";

const faq = [
  {
    question: "WHAT DESIGN FACTOR ARE YOUR ASSEMBLIES RATED TO?",
    answer:
      "Every standard lifting assembly is fabricated and proof-tested to a strict 5:1 design factor in accordance with ASME B30.9. Higher factors are available for personnel and critical-lift applications on request.",
  },
  {
    question: "WHAT MATERIALS AND ROPE CONSTRUCTIONS DO YOU STOCK?",
    answer: null,
  },
  {
    question: "WHAT IS THE TYPICAL LEAD TIME FOR A FABRICATED ASSEMBLY?",
    answer: null,
  },
  {
    question: "DO ASSEMBLIES SHIP WITH CERTIFICATION?",
    answer: null,
  },
  {
    question: "CAN YOU MATCH AN EXISTING OR WORN ASSEMBLY?",
    answer: null,
  },
];

export default function WireRopeAssembliesPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WIRE ROPE\nASSEMBLIES"}
      actionLink="/core-pdfs/B1%20Core%20Wire%20Rope%20Slings%20Catalog.pdf"
      actionLabel="PRODUCT INFORMATION PDF"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Winch Lines:</strong> Spooled from high-strength 6×19 class or 19×7
            rotation-resistant EIPS/EEIPS wire rope core (IWRC) stock, terminated with
            seamless swaged ball or button fittings to prevent winch drum slippage.
          </div>
          <div className="dp-feature">
            <strong>Boom Pendants:</strong> Manufactured using specialized galvanized or
            bright IWRC crane ropes equipped with low-profile swaged terminals, proof-tested
            to ensure exact matched-pair length tolerances under peak operating loads.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        High-capacity wire rope assemblies &amp; rigging slings fabricated from premium{" "}
        <strong>EIPS / EEIPS</strong> steel — engineered, proof-tested, and certified to
        ASME B30.9.
      </p>

      <div className="dp-feature">
        <strong>Lifting Slings:</strong> Custom-fabricated with mechanical Flemish eye
        splices and heavy-duty carbon steel sleeves, engineered to maintain a strict 5:1
        design factor in compliance with ASME B30.9 and OSHA 1910.184.
      </div>

      <div className="dp-feature">
        <strong>Socket Assemblies:</strong> Outfitted with cold-swaged or poured zinc/resin
        spelter sockets to achieve 100% termination efficiency, or adjustable wedge sockets
        rated at 80% efficiency with integrated visual pin verification.
      </div>
    </ProductDetailLayout>
  );
}
