import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Globals from "./pages/Globals";
import Introduction from "./pages/Introduction";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="/globals" element={<Globals />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
