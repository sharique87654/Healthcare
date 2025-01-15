import { BrowserRouter, Routes, Route } from "react-router-dom";
import AiMarketplace from "./components/multiPage/AiMarketplace";
import Home from "./components/Pages/Home";
import Error from "./components/multiPage/error";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pacs" element={<AiMarketplace/>}/>
      <Route path="/error" element={<Error/>}/>
      </Routes >
      </BrowserRouter>
    </div>
  )
}