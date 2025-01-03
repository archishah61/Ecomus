import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./components/Home/Home";
import Wishlist from "./components/Wishlist/Wishlist";
import Admin from "./admin-panel/AdminForm/Admin";
import AdminPanel from "./admin-panel/Admin-Panel/AdminPanel";
import { AdminProvider } from "./context/AdminContext";
import AdminHero from "./admin-panel/AdminHome/AdminHero/AdminHero";
import AdminWishlist from "./admin-panel/AdminWishlist/AdminWishlist";
import AdminShopByCat from "./admin-panel/AdminHome/AdminShopByCat/AdminShopByCat";
import AdminMarquee from "./admin-panel/AdminHome/AdminMarquee/AdminMarquee";
import AdminBestSeller from "./admin-panel/AdminHome/AdminBestSeller/AdminBestSeller";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/admin-panel',
    element: <AdminPanel />,
    children: [
      {
        path: '/admin-panel/',
        element: <AdminHero />
      },
      {
        path: '/admin-panel/marquee',
        element: <AdminMarquee />
      },
      {
        path: '/admin-panel/shop-by-cat',
        element: <AdminShopByCat />
      },
      {
        path: '/admin-panel/wishlist',
        element: <AdminWishlist />
      },
      {
        path: "/admin-panel/best-seller",
        element: <AdminBestSeller />,
      }
    ]
  }
]);

function App() {

  return (
    <>
      <AdminProvider>
        <RouterProvider router={router} />
      </AdminProvider>
    </>
  )
}

export default App
