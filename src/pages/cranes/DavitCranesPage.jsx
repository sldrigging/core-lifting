import ProductDetailLayout from "../../components/ProductDetailLayout";
import { getCraneDocItems } from "../../data/productSpecs";
import heroImg from "../../assets/imgs-rv/Cranes/Thern-Davit-Crane.jpg";

const faq = [
  {
    question: "WHAT DAVIT CRANE CONFIGURATIONS DO YOU OFFER?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { question: "ARE YOU AN AUTHORIZED THERN DISTRIBUTOR?", answer: null },
  { question: "WHAT CAPACITY RANGES ARE AVAILABLE?", answer: null },
  { question: "CAN DAVIT CRANES BE INSTALLED ON VESSELS OR OFFSHORE STRUCTURES?", answer: null },
  { question: "DO DAVIT CRANES REQUIRE SPECIAL FOUNDATIONS?", answer: null },
];

const downloads = getCraneDocItems(["CI-05"]);

export default function DavitCranesPage() {
  return (
    <ProductDetailLayout
      parent="CRANES"
      parentPath="/cranes"
      title={"DAVIT\nCRANES"}
      heroImage={heroImg}
      downloads={downloads}
      downloadsTitle="Davit Cranes PDF Downloads"
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Capacity &amp; Reach:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </div>
          <div className="dp-feature">
            <strong>Thern Products:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </>
      }
      faq={faq}
    >
      <p className="dp-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — as an <strong>authorized Thern distributor</strong>, we supply free standing and stationary davit crane systems for marine, industrial, and offshore applications.
      </p>

      <div className="dp-feature">
        <strong>Free Standing:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </div>

      <div className="dp-feature">
        <strong>Stationary:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
      </div>
    </ProductDetailLayout>
  );
}
