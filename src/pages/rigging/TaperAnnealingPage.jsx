import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Annealing.jpg";

const faq = [
  {
    question: "WHAT IS TAPER ANNEALING FOR CRANE ROPES?",
    answer:
      "Taper annealing is a controlled heat treatment process that relieves stresses at the rope ends or termination zones, improving fatigue life and flexibility in high performance crane ropes.",
  },
  {
    question: "WHY IS TAPER ANNEALING IMPORTANT FOR CRANE ROPES?",
    answer:
      "It reduces internal stresses that cause early fatigue and wire breaks, resulting in longer rope life, fewer replacements, and improved safety in overhead crane operations.",
  },
  {
    question: "DO YOU PERFORM TAPER ANNEALING ON-SITE OR IN-HOUSE?",
    answer:
      "Our fully equipped facilities in Louisiana and Texas handle taper annealing in-house with precision equipment and strict process controls for consistent quality.",
  },
  {
    question: "WHICH TYPES OF ROPES BENEFIT MOST FROM TAPER ANNEALING?",
    answer:
      "High performance compacted and rotation-resistant crane ropes used in heavy-duty overhead crane applications benefit significantly from our taper annealing service.",
  },
  {
    question: "DO YOU SERVE CUSTOMERS IN LOUISIANA, TEXAS, AND THE GULF COAST?",
    answer:
      "Yes. Core Lifting provides professional taper annealing services with fast turnaround for customers throughout Louisiana, Texas, and the Gulf Coast region. Contact us for expert rope maintenance solutions.",
  },
];

export default function TaperAnnealingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"TAPER\nANNEALING"}
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Expert In-House Service:</strong> With advanced equipment and experienced personnel, Core Lifting delivers consistent, high-quality taper annealing results that meet or exceed industry standards.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Taper Annealing for High Performance Crane Ropes</h1>
      <p className="dp-desc">
        Core Lifting offers professional taper annealing services for high performance crane ropes to relieve internal stresses and extend service life in demanding applications across Louisiana, Texas, and the Gulf Coast. Our in-house expertise ensures precise annealing that maintains rope strength while improving fatigue resistance for longer, safer operation.
      </p>

      <div className="dp-feature">
        <strong>Taper Annealing Process:</strong> Our skilled technicians perform controlled taper annealing on crane ropes to reduce bending stresses at termination points and improve overall rope flexibility and longevity.
      </div>

      <div className="dp-feature">
        <strong>Stress Relief Benefits:</strong> Taper annealing relieves internal stresses created during manufacturing and use, significantly reducing the risk of premature fatigue and wire breaks.
      </div>
    </ProductDetailLayout>
  );
}
