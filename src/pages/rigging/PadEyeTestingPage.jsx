import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/3-2/Portable-Pad-Eye-Testing.jpg";

const faq = [
  {
    question: "WHAT IS PORTABLE PAD EYE TESTING?",
    answer:
      "Portable pad eye testing uses mobile equipment to apply controlled loads and verify the strength of pad eyes directly at your location without removing them from service.",
  },
  {
    question: "WHY SHOULD I TEST MY PAD EYES?",
    answer:
      "Regular testing confirms structural integrity, ensures safe working load limits, and helps prevent failures that could lead to accidents or equipment damage.",
  },
  {
    question: "DO YOU PROVIDE CERTIFIED TEST REPORTS?",
    answer:
      "Yes. Every portable pad eye test includes complete documentation and certification for regulatory compliance and record-keeping.",
  },
  {
    question: "CAN YOU TEST PAD EYES ON-SITE AT MY FACILITY?",
    answer:
      "Yes. Our mobile testing teams travel to your location throughout Louisiana, Texas, and the Gulf Coast for convenient on-site pad eye load testing.",
  },
  {
    question: "HOW OFTEN SHOULD PAD EYES BE TESTED?",
    answer:
      "We recommend testing pad eyes annually or after any suspected overload, damage, or as required by your safety program and applicable regulations.",
  },
];

export default function PadEyeTestingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"PORTABLE PAD\nEYE TESTING"}
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Improved Safety &amp; Compliance:</strong> Regular portable pad eye testing helps maintain safe working conditions and meets regulatory standards for lifting points on structures and equipment.
          </div>
          <div className="dp-feature">
            <strong>Fast Turnaround:</strong> Our mobile teams deliver quick, reliable testing with minimal disruption to your operations across the Gulf Coast region.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Portable Pad Eye Load Testing &ndash; On-Site Safety Verification</h1>
      <p className="dp-desc">
        Core Lifting provides portable pad eye load testing services to verify the strength and safety of pad eyes directly at your location across Louisiana, Texas, and the Gulf Coast. Our mobile testing equipment delivers accurate results with full certification, minimizing downtime while ensuring compliance with industry standards.
      </p>

      <div className="dp-feature">
        <strong>On-Site Convenience:</strong> Our portable pad eye testing brings certified load testing directly to your facility or job site, eliminating the need to remove and transport equipment.
      </div>

      <div className="dp-feature">
        <strong>Accurate Load Verification:</strong> We apply precise, calibrated loads to confirm pad eye capacity and identify any weaknesses before they become safety hazards.
      </div>

      <div className="dp-feature">
        <strong>Full Certification:</strong> Every pad eye test includes detailed documentation and certification for customer compliance requirements.
      </div>
    </ProductDetailLayout>
  );
}
