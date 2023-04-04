import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Shop from './components/shop/Shop';
// import Review from './components/Review/Review';
// import NotFound from './components/NotFound/NotFound';
// import Main from './layouts/Main';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import PrivateRoute from './routes/PrivateRoute';
import { routes } from './routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
