import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/3-2/Inspections.jpg";

const faq = [
  {
    question: "WHAT DOES A VISUAL RIGGING INSPECTION INCLUDE?",
    answer:
      "Our inspections cover slings and fittings for visible damage, wear, corrosion, deformation, and proper labeling in accordance with OSHA and ASME standards.",
  },
  {
    question: "HOW OFTEN SHOULD I HAVE MY RIGGING INSPECTED?",
    answer:
      "We recommend visual inspections before each use, with formal documented inspections at regular intervals based on usage, environment, and regulatory requirements.",
  },
  {
    question: "DO YOU PROVIDE WRITTEN INSPECTION REPORTS?",
    answer:
      "Yes. Every inspection includes detailed documentation noting the condition of each item, any deficiencies found, and recommendations for repair or removal from service.",
  },
  {
    question: "CAN YOU INSPECT RIGGING AT MY JOB SITE?",
    answer:
      "Yes. Our inspectors travel to your location throughout Louisiana, Texas, and the Gulf Coast to perform on-site visual rigging inspections with minimal disruption.",
  },
  {
    question: "WHAT HAPPENS IF ISSUES ARE FOUND DURING INSPECTION?",
    answer:
      "We clearly document all findings and can provide repair, replacement, or recertification services to quickly return your equipment to safe working condition.",
  },
];

export default function InspectionsPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="INSPECTIONS"
      heroImage={heroImg}
      faq={faq}
    >
      <h1 className="dp-h1">Professional Visual Rigging Inspections</h1>
      <p className="dp-desc">
        Core Lifting provides thorough visual rigging inspections to help ensure the safety and reliability of your lifting equipment across Louisiana, Texas, and the Gulf Coast. Our experienced inspectors identify wear, damage, and compliance issues before they lead to costly downtime or safety incidents.
      </p>

      <div className="dp-feature">
        <strong>Sling Inspections:</strong> Our certified inspectors perform detailed visual examinations of wire rope, chain, and synthetic slings to detect cuts, abrasion, corrosion, and other defects that could compromise lifting safety.
      </div>

      <div className="dp-feature">
        <strong>Fitting Inspections:</strong> We thoroughly inspect shackles, hooks, links, and other rigging fittings for cracks, deformation, wear, and proper identification markings to maintain safe working load limits.
      </div>
    </ProductDetailLayout>
  );
}
