import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Areuin } from "./areuin";
import { Home } from "./home";
import { NotFound } from "./notFound";

export function LocalRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/areuin" element={<Areuin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
