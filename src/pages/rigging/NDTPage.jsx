import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/3-2/NDT.jpg";

const faq = [
  {
    question: "WHAT IS MAGNETIC PARTICLE INSPECTION USED FOR?",
    answer:
      "Magnetic particle testing detects surface and near-surface cracks and defects in ferromagnetic materials such as steel shackles, hooks, and lifting hardware.",
  },
  {
    question: "DO YOU OFFER ON-SITE NDT SERVICES?",
    answer:
      "Yes. Our certified technicians perform magnetic particle inspections at your facility or job site throughout Louisiana, Texas, and the Gulf Coast.",
  },
  {
    question: "CAN NDT BE COMBINED WITH LOAD TESTING?",
    answer:
      "Yes. We frequently combine magnetic particle inspections with load testing in our facilities for complete verification and certification of your rigging equipment.",
  },
  {
    question: "ARE YOUR NDT TECHNICIANS CERTIFIED?",
    answer:
      "Yes. All magnetic particle inspections are performed by certified Level II or Level III technicians following applicable industry standards.",
  },
  {
    question: "WHY IS NDT IMPORTANT FOR RIGGING EQUIPMENT?",
    answer:
      "NDT helps identify hidden defects before they lead to failure, improving safety and extending the reliable service life of critical lifting components.",
  },
];

export default function NDTPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title="NDT"
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>In-House with Load Testing:</strong> Our facilities combine magnetic particle inspections with load testing to provide comprehensive evaluation and certification of slings, fittings, and lifting hardware in one visit.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">
        Certified Magnetic Particle Non Destructive Testing and Evaluations | MPI, NDT, NDE
      </h1>
      <p className="dp-desc">
        Core Lifting provides certified Non-Destructive Testing (NDT) including magnetic particle inspections to detect surface and near-surface defects in rigging hardware and lifting equipment. Our services are available both on-site and in-house, often combined with load testing for complete verification.
      </p>

      <div className="dp-feature">
        <strong>Certified Mag Particle Inspections:</strong> Our certified technicians perform magnetic particle testing to identify cracks, seams, and other surface defects that visual inspections may miss, ensuring critical components remain safe for use.
      </div>

      <div className="dp-feature">
        <strong>On-Site NDT Services:</strong> We bring certified NDT capabilities directly to your location across Louisiana, Texas, and the Gulf Coast, minimizing equipment downtime and transportation costs.
      </div>
    </ProductDetailLayout>
  );
}
