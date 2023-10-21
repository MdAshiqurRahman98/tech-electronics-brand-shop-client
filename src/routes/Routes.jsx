import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-cjk4merp0.vercel.app/brands')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-cjk4merp0.vercel.app/products')
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-cjk4merp0.vercel.app/userProducts')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: () => fetch('https://brand-shop-server-cjk4merp0.vercel.app/products')
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-cjk4merp0.vercel.app/products/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-cjk4merp0.vercel.app/products/${params.id}`)
            }
        ]
    },
]);

export default router;