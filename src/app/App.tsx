import ProjectsPage from "./pages/ProjectsPage";
import CarePathCentralPage from "./pages/CarePathCentralPage";
import SEProjectPage from "./pages/SEProjectPage";
import DBMSProjectPage from "./pages/DBMSProjectPage";
import MarketProjectPage from "./pages/MarketProjectPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const pathname = window.location.pathname;
  if (pathname === "/projects") {
    return <ProjectsPage />;
  }

  if (pathname === "/projects/carepath-central") {
    return <CarePathCentralPage />;
  }

  if (pathname === "/projects/se-project") {
    return <SEProjectPage />;
  }

  if (pathname === "/projects/dbms-project") {
    return <DBMSProjectPage />;
  }

  if (pathname === "/projects/market") {
    return <MarketProjectPage />;
  }

  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/skills") {
    return <SkillsPage />;
  }

  if (pathname === "/contact") {
    return <ContactPage />;
  }

  if (pathname === "/") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}