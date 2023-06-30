import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./apppp.scss"
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";


const Layout = () =>{
    return (
        <div className="app">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <Home />,
            }, 
            {
                path:"/products/:id",
                element: <Products />,
            },
            {
                path:"/product/:id",
                element: <Product />,
            },
        ],
    },    
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;