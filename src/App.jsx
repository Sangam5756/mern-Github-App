import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LikesPage from "./pages/LikesPage";
import ExplorePage from "./pages/ExplorePage";

import SideBar from "./components/Sidebar";

function App() {
  
  return (
    <div className="flex">
      <SideBar />
      <div className="max-w-5lxl my-5 text-white mx-auto transition-all duratiion-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster/>
      </div>
    </div>
  );
}

export default App;
