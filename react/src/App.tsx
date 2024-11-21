import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataLayers from "./DataLayers/DataLayers";
import Overlay from "./Overlay/Overlay";

const Home: React.FC = () => {
  return <>Home</>;
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/data-layers">Data Layers</Link>
              </li>
              <li>
                <Link to="/overlay">Overlay</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/overlay">
              <Overlay />
            </Route>
            <Route path="/data-layers">
              <DataLayers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;