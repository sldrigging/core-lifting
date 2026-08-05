import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/3-2/Block-Rebuilds.jpg";

const faq = [
  {
    question: "WHAT TYPES OF BLOCKS DO YOU REBUILD?",
    answer:
      "We rebuild snatch blocks, crane blocks, overhaul balls, and other rigging blocks from major manufacturers.",
  },
  {
    question: "DO YOU PERFORM NDT ON HOOKS DURING REBUILDS?",
    answer:
      "Yes. We include magnetic particle testing on hooks as part of our standard block rebuild process.",
  },
  {
    question: "DO YOU PROVIDE CERTIFICATION AFTER BLOCK REBUILD?",
    answer:
      "Yes. Every rebuilt block is load tested and certified with full documentation for compliance and record-keeping.",
  },
  {
    question: "CAN YOU REBUILD BLOCKS ON-SITE?",
    answer:
      "Intial visual inspections can be performed on-site, but full inspections and rebuilds are typically completed in our facilities for best results.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS ACROSS THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides block rebuild and repair services with pickup, delivery, and support throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

export default function BlockRebuildsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"BLOCK\nREBUILDS"}
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Hook NDT:</strong> Magnetic particle testing is performed on hooks to detect surface cracks and defects not visible during standard inspection.
          </div>
          <div className="dp-feature">
            <strong>Load Test:</strong> Every rebuilt block undergoes load testing with certification to verify safe working capacity before return to service.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Professional Block Rebuild &amp; Repair Services</h1>
      <p className="dp-desc">
        Core Lifting provides complete block rebuild services to restore performance and safety of sheaves, hooks, and rigging blocks used in industrial and oilfield applications. Our experienced technicians deliver thorough inspections, quality repairs, and certified load testing.
      </p>

      <div className="dp-feature">
        <strong>Disassemble &amp; Inspect:</strong> We fully disassemble blocks and perform detailed inspections to identify wear, damage, and components requiring repair or replacement.
      </div>

      <div className="dp-feature">
        <strong>Replace Bearings:</strong> Our rebuild process includes replacement of worn bearings with high-quality components to restore smooth, reliable operation.
      </div>

      <div className="dp-feature">
        <strong>Sheave Repair or Replacement:</strong> We repair or replace damaged sheaves to maintain proper rope support and extend block service life.
      </div>
    </ProductDetailLayout>
  );
}
