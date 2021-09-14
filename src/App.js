import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
