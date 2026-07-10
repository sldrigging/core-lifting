import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Winch-Servicing.jpg";

const faq = [
  {
    question: "WHAT TYPES OF WINCHES DO YOU SERVICE?",
    answer:
      "We service manual, electric, hydraulic, and air-powered winches from major manufacturers used in industrial, marine, and drilling applications.",
  },
  {
    question: "DO YOU PROVIDE LOAD TESTING AFTER WINCH REPAIR?",
    answer:
      "Yes. All repaired winches undergo functional and load testing with certification to verify safe performance before return.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides winch repair, testing, and servicing with fast response throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

export default function WinchServicingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WINCH\nSERVICING"}
      heroImage={heroImg}
      faq={faq}
    >
      <h1 className="dp-h1">Professional Winch Servicing &amp; Repair</h1>
      <p className="dp-desc">
        Core Lifting provides expert winch servicing including repair and testing for industrial, marine, and oilfield applications across Louisiana, Texas, and the Gulf Coast. Our technicians restore performance and verify safe operation of your winches with full documentation.
      </p>

      <div className="dp-feature">
        <strong>Repair:</strong> Our experienced technicians diagnose and repair mechanical, hydraulic, and electric winches using quality parts to restore reliable performance and extend equipment life.
      </div>

      <div className="dp-feature">
        <strong>Testing:</strong> We perform thorough functional and load testing after service to confirm proper operation and safe working capacity before returning equipment to service.
      </div>
    </ProductDetailLayout>
  );
}
