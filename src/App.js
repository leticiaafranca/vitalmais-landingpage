import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MedClinicPage from "./pages/MedClinicPage";
import Especialistas from "./pages/Especialistas";
import SiteHeader from "./medclinic/components/SiteHeader";
import ScrollToTop from "./medclinic/components/ScrollToTop";
import vitalmaisLogo from "./img/vitalmais-logo.png";

function App() {
  return (
    <Router>
      <SiteHeader
        logoSrc={vitalmaisLogo}
        brandName={<>Centro Médico <br className="mc-brand__nameBreak" />Vital Mais</>}
      />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={MedClinicPage} />
        <Route path="/especialistas" component={Especialistas} />
      </Switch>
    </Router>
  );
}

export default App;
