import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
          <Route path='/shoppingCart'>
              <Header />
              <ShoppingCart />
              <Footer />
          </Route>
          <Route path='/'>
              <Header />
              <Products />
              <Footer />
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
