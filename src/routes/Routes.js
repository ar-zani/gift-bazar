import { createBrowserRouter } from "react-router-dom";
import Shop from '../components/shop/Shop';
import Review from '../components/Review/Review';
import NotFound from '../components/NotFound/NotFound';
import Main from '../layouts/Main';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PrivateRoute from '../routes/PrivateRoute';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'review',
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>,
    }

]);