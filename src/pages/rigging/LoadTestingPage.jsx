import ProductDetailLayout from "../../components/ProductDetailLayout";
import heroImg from "../../assets/imgs-rv/Load-Testing.jpg";

const faq = [];

export default function LoadTestingPage() {
  return (
    <ProductDetailLayout
      parent="RIGGING"
      parentPath="/rigging"
      title={"LOAD\nTESTING"}
      heroImage={heroImg}
      afterHero={
        <>
          <div className="dp-feature">
            <strong>Houma, Louisiana:</strong> The Houma location supports horizontal testing to 600,000 lbs and vertical testing to 300,000 lbs, ideal for marine and offshore rigging equipment.
          </div>
          <div className="dp-feature">
            <strong>New Orleans, Louisiana:</strong> Our New Orleans facility provides horizontal testing to 200,000 lbs and vertical testing to 250,000 lbs for convenient service in the greater New Orleans area.
          </div>
          <div className="dp-feature">
            <strong>On-Site Water Bag Testing:</strong> Core Lifting performs on-site water bag load testing at your location, delivering accurate results without the need to transport large equipment.
          </div>
        </>
      }
      faq={faq}
    >
      <h1 className="dp-h1">Professional Load Testing Services in Texas and Louisiana</h1>
      <p className="dp-desc">
        Core Lifting provides certified load testing services at multiple locations across Texas and Louisiana with some of the highest capacities in the region. Our expert team delivers accurate horizontal and vertical testing plus on-site water bag testing to ensure your rigging equipment meets safety and compliance standards.
      </p>

      <div className="dp-feature">
        <strong>Odessa, Texas:</strong> Our Odessa facility offers horizontal load testing up to 500,000 lbs and vertical testing to 150,000 lbs for reliable verification of slings, hardware, and assemblies.
      </div>

      <div className="dp-feature">
        <strong>Houston, Texas:</strong> The Houston location provides horizontal testing capacity to 650,000 lbs and vertical testing to 250,000 lbs, supporting large-scale industrial and oilfield equipment.
      </div>

      <div className="dp-feature">
        <strong>Lafayette, Louisiana:</strong> Our Lafayette facility delivers the highest horizontal capacity in the region at 1.3 million lbs along with vertical testing to 250,000 lbs for heavy-duty applications.
      </div>
    </ProductDetailLayout>
  );
}
