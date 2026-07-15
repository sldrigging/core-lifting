import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Hoist-Repair.jpg";

const faq = [
  {
    question: "ARE YOU AN AUTHORIZED JD NEUHAUS REPAIR FACILITY?",
    answer:
      "Yes. Core Lifting is a certified JD Neuhaus repair center with factory-trained technicians and access to genuine parts.",
  },
  {
    question: "WHAT DOES YOUR HOIST REPAIR PROCESS INCLUDE?",
    answer:
      "Our process includes complete disassembly, detailed inspection, replacement of worn parts, reassembly, and final testing with certification.",
  },
  {
    question: "DO YOU PROVIDE CERTIFICATION AFTER REPAIR?",
    answer:
      "Yes. Every repaired hoist receives functional and load testing with documentation and certification for compliance and record-keeping.",
  },
  {
    question: "CAN YOU REPAIR OTHER HOIST BRANDS?",
    answer:
      "Yes. In addition to JD Neuhaus, we service and repair hoists from CM, Chester, Tiger, Elephant, and other major manufacturers.",
  },
  {
    question: "DO YOU OFFER PICKUP AND DELIVERY FOR HOIST REPAIRS?",
    answer:
      "Yes. We provide convenient pickup and delivery service throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

export default function HoistRepairPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"HOIST\nREPAIR"}
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Replace Worn Parts:</strong> We replace worn or damaged parts with genuine manufacturer components to restore original performance and safety standards.
          </div>
          <div className="dp-feature">
            <strong>Test &amp; Certify:</strong> Every repaired hoist undergoes functional testing and load testing with full certification before return to service.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Hoist Repair Services | JD Neuhaus Certified Repair Center</h1>
      <p className="dp-desc">
        Core Lifting is a certified JD Neuhaus repair facility offering complete hoist repair services across Louisiana, Texas, and the Gulf Coast. Our factory-trained technicians disassemble, inspect, repair, and certify hoists to restore safe, reliable performance.
      </p>

      <div className="dp-feature">
        <strong>JD Neuhaus Certified Repair Facility:</strong> As an authorized JD Neuhaus repair center, we provide factory-approved service using genuine parts and trained technicians for warranty-compliant repairs.
      </div>

      <div className="dp-feature">
        <strong>Disassemble &amp; Inspect:</strong> Our technicians thoroughly disassemble each hoist and perform detailed inspections to identify worn, damaged, or fatigued components.
      </div>
    </ProductDetailLayout>
  );
}
