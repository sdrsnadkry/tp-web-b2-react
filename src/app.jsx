import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorRoute from "./pages/404";
import Header from "./components/header";
import { routes } from "./constants/routes";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </div>
  );
}
