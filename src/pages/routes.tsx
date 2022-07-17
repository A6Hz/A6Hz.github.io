import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Areuin } from "./areuin";
import { ComingSoon } from "./comingSoon";
import { Home } from "./home";
import { NotFound } from "./notFound";

const HomePage = process.env.REACT_APP_ENV === "production" ? ComingSoon : Home;

export function LocalRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areuin" element={<Areuin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
