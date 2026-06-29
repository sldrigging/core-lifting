import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CranesPage from "./pages/CranesPage";
import RiggingPage from "./pages/RiggingPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import CraneInfoPage from "./pages/CraneInfoPage";
import VideosPage from "./pages/VideosPage";
import BlogsPage from "./pages/BlogsPage";

/* ── Rigging detail pages ── */
import WireRopeAssembliesPage from "./pages/rigging/WireRopeAssembliesPage";
import HoistsPage from "./pages/rigging/HoistsPage";
import WireRopePage from "./pages/rigging/WireRopePage";
import RiggingHardwarePage from "./pages/rigging/RiggingHardwarePage";
import ChainProductsPage from "./pages/rigging/ChainProductsPage";
import SyntheticsPage from "./pages/rigging/SyntheticsPage";
import LubricatorsPage from "./pages/rigging/LubricatorsPage";
import TaperAnnealingPage from "./pages/rigging/TaperAnnealingPage";
import LoadTestingPage from "./pages/rigging/LoadTestingPage";
import PadEyeTestingPage from "./pages/rigging/PadEyeTestingPage";
import InspectionsPage from "./pages/rigging/InspectionsPage";
import NDTPage from "./pages/rigging/NDTPage";
import WinchServicingPage from "./pages/rigging/WinchServicingPage";
import HoistRepairPage from "./pages/rigging/HoistRepairPage";
import BlockRebuildsPage from "./pages/rigging/BlockRebuildsPage";
import WinchLineServicingPage from "./pages/rigging/WinchLineServicingPage";
import RentalsPage from "./pages/rigging/RentalsPage";

/* ── Crane detail pages ── */
import BridgeCranesPage from "./pages/cranes/BridgeCranesPage";
import ManufacturingPage from "./pages/cranes/ManufacturingPage";
import JibCranesPage from "./pages/cranes/JibCranesPage";
import WorkstationCranesPage from "./pages/cranes/WorkstationCranesPage";
import DavitCranesPage from "./pages/cranes/DavitCranesPage";
import FieldServicesPage from "./pages/cranes/FieldServicesPage";
import CraneLoadTestingPage from "./pages/cranes/CraneLoadTestingPage";
import InstallationPage from "./pages/cranes/InstallationPage";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cranes" element={<CranesPage />} />
          <Route path="/rigging" element={<RiggingPage />} />
          <Route path="/product-info" element={<ProductInfoPage />} />
          <Route path="/info-center" element={<CraneInfoPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/blogs" element={<BlogsPage />} />

          {/* Rigging detail pages */}
          <Route path="/rigging/wire-rope-assemblies" element={<WireRopeAssembliesPage />} />
          <Route path="/rigging/hoists" element={<HoistsPage />} />
          <Route path="/rigging/wire-rope" element={<WireRopePage />} />
          <Route path="/rigging/rigging-hardware" element={<RiggingHardwarePage />} />
          <Route path="/rigging/chain-products" element={<ChainProductsPage />} />
          <Route path="/rigging/synthetics" element={<SyntheticsPage />} />
          <Route path="/rigging/lubricators" element={<LubricatorsPage />} />
          <Route path="/rigging/taper-annealing" element={<TaperAnnealingPage />} />
          <Route path="/rigging/load-testing" element={<LoadTestingPage />} />
          <Route path="/rigging/portable-pad-eye-testing" element={<PadEyeTestingPage />} />
          <Route path="/rigging/inspections" element={<InspectionsPage />} />
          <Route path="/rigging/ndt" element={<NDTPage />} />
          <Route path="/rigging/winch-servicing" element={<WinchServicingPage />} />
          <Route path="/rigging/hoist-repair" element={<HoistRepairPage />} />
          <Route path="/rigging/block-rebuilds" element={<BlockRebuildsPage />} />
          <Route path="/rigging/winch-line-servicing" element={<WinchLineServicingPage />} />
          <Route path="/rigging/rentals" element={<RentalsPage />} />

          {/* Crane detail pages */}
          <Route path="/cranes/bridge-cranes" element={<BridgeCranesPage />} />
          <Route path="/cranes/manufacturing" element={<ManufacturingPage />} />
          <Route path="/cranes/jib-cranes" element={<JibCranesPage />} />
          <Route path="/cranes/workstation-cranes" element={<WorkstationCranesPage />} />
          <Route path="/cranes/davit-cranes" element={<DavitCranesPage />} />
          <Route path="/cranes/field-services" element={<FieldServicesPage />} />
          <Route path="/cranes/load-testing" element={<CraneLoadTestingPage />} />
          <Route path="/cranes/installation" element={<InstallationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
