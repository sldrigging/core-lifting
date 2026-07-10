import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Winch-Line-Servicing.jpg";

const faq = [
  {
    question: "WHAT TYPES OF WINCH LINES DO YOU SERVICE?",
    answer:
      "We service wire rope winch lines used on industrial winches, marine winches, and oilfield drawworks and pulling units.",
  },
  {
    question: "DO YOU PROVIDE CUSTOM WINCH LINE LENGTHS?",
    answer:
      "Yes. We cut wire rope to your exact length and install the required end fittings for a perfect fit on your winch.",
  },
  {
    question: "CAN YOU INSTALL SOCKETS ON WINCH LINES?",
    answer:
      "Yes. We install swage sockets, spelter sockets, and other end fittings using proper techniques and equipment for maximum strength.",
  },
  {
    question: "DO YOU TEST WINCH LINES AFTER SERVICING?",
    answer:
      "Yes. We can perform proof testing and provide certification when required for your application.",
  },
  {
    question: "DO YOU OFFER PICKUP AND DELIVERY?",
    answer:
      "Yes. We provide convenient pickup and delivery of winch lines throughout Louisiana, Texas, and the Gulf Coast region.",
  },
];

export default function WinchLineServicingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"WINCH LINE\nSERVICING"}
      heroImage={heroImg}
      faq={faq}
    >
      <h1 className="dp-h1">Winch Line Servicing &amp; Replacement</h1>
      <p className="dp-desc">
        Core Lifting provides professional winch line servicing including wire rope replacement and end fitting installation for industrial, marine, and oilfield winches. Our team ensures your winch lines are properly installed, terminated, and ready for safe operation.
      </p>

      <div className="dp-feature">
        <strong>Replacement Wire Rope:</strong> We supply and install high-quality replacement wire rope matched to your winch specifications for optimal performance and safety.
      </div>

      <div className="dp-feature">
        <strong>Replace End Fittings:</strong> Our technicians expertly install new sockets, thimbles, or other end fittings with proper swaging or speltering for secure, reliable terminations.
      </div>
    </ProductDetailLayout>
  );
}
