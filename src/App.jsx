import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import RegionalPortfolio from './pages/RegionalPortfolio'
import RegionalPortfolioDetail from './pages/RegionalPortfolioDetail'
import Tools from './pages/Tools'
import Evsa from './pages/tools/Evsa'
import Crva from './pages/tools/Crva'
import FishVool from "./pages/tools/FishVool";
import GeoAgri from "./pages/tools/GeoAgri";
import Nccag from "./pages/tools/Nccag";
import HazardHunter from "./pages/tools/HazardHunter";
import PrdpMis from "./pages/tools/PrdpMis";
import SesDashboard from "./pages/tools/SesDashboard";
import Coursework from "./pages/tools/Coursework";
import PlanningGuidelines from "./pages/tools/PlanningGuidelines";
import ReportsStudies from "./pages/tools/ReportsStudies";
import MapsSpatialResources from "./pages/tools/MapsSpatialResources";
import CommodityReferences from "./pages/tools/CommodityReferences";
import PRDPDocuments from "./pages/tools/PRDPDocuments";
import Planning from './pages/Planning'
import Cip from './pages/Cip'
import Rma from './pages/Rma'
import Ivca from './pages/Ivca'
import Pcip from './pages/Pcip'
import Implementation from './pages/Implementation'
import Institutionalization from './pages/Institutionalization'
import Mainstreaming from './pages/Mainstreaming'
import OperationalMonitoring from './pages/OperationalMonitoring'
import Evaluation from './pages/Evaluation'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />

        {/* REGIONAL PORTFOLIO */}
        <Route path="/regional-portfolio" element={<RegionalPortfolio />} />

        <Route
          path="/regional-portfolio/:regionId"
          element={<RegionalPortfolioDetail />}
        />

        {/* PLANNING TOOLS */}
        <Route path="/tools" element={<Tools />} />

        {/* eVSA */}
        <Route path="/tools/evsa" element={<Evsa />} />

        {/* CRVA */}
        <Route path="/tools/crva" element={<Crva />} />
        <Route path="/fishvool" element={<FishVool />} />
        <Route path="/geoagri" element={<GeoAgri />} />
        <Route path="/nccag" element={<Nccag />} />
        <Route path="/hazard-hunter" element={<HazardHunter />} />
        <Route path="/prdp-mis" element={<PrdpMis />} />
        <Route path="/ses-dashboard" element={<SesDashboard />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/planning-guidelines" element={<PlanningGuidelines />} />
        <Route path="/reports-studies" element={<ReportsStudies />} />
        <Route path="/maps-spatial" element={<MapsSpatialResources />} />
        <Route path="/commodity-references" element={<CommodityReferences />} />
        <Route path="/prdp-documents" element={<PRDPDocuments />} />
        <Route path="/planning/cip" element={<Cip />} />
        <Route path="/planning/rma" element={<Rma />} />
        <Route path="/planning/ivca" element={<Ivca />} />
        <Route path="/planning/pcip" element={<Pcip />} />
        <Route path="/planning/implementation" element={<Implementation />} />
        <Route path="/planning/institutionalization" element={<Institutionalization />} />
        <Route path="/planning/mainstreaming" element={<Mainstreaming />}/>
        <Route path="/planning/monitoring" element={<OperationalMonitoring />}/>
        <Route path="/planning/evaluation" element={<Evaluation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App