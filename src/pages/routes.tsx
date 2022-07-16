import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "./home";
import { NotFound } from "./notFound";

const LayoutElement = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export function LocalRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutElement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
