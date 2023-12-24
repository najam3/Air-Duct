import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurProcess from "./pages/OurProcess";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
       <Layout>
            <Routes>
              <Route path="/ourProcess" element={<OurProcess />} />
              <Route path="/" element={<Home />} />
            </Routes>
       </Layout>
          </BrowserRouter>
    </div>
  );
}

export default App;
