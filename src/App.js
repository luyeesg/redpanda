import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Men from "./components/MenList";
import Women from "./components/WomenList"
import Bottom from "./components/BottomList"
import Navbar from "./components/Navbar";
import NavbarProvider from "./context/NavbarContext";
import Cart from "./components/Cart";


const App = () => {
  return (
    <div>
      <NavbarProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Men />
            </Route>
            <Route exact path="/women">
              <Women />
            </Route>
            <Route exact path="/bottom">
              <Bottom />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </NavbarProvider>
    </div>
  )
}

export default App
