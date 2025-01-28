import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import GallaryPage from "../pages/GallaryPage";
import ServicesPage from "../pages/ServicesPage";
import ContactForm from "../pages/ContactForm";

export default function AppRoutes() {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/gallery", element: <GallaryPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/message", element: <ContactForm /> },
  ];

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}
