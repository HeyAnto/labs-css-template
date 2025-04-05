import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
