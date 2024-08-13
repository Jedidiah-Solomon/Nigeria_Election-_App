import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Elections from "./components/Elections";
import Candidates from "./components/Candidates";
import Parties from "./components/Parties";
import AdminLogin from "./components/adminLogin";
import Admin from "./components/AdminPage";
import AddContestant from "./components/AddContestant";
import UpdateContestant from "./components/UpdateContestant";
import DeleteContestant from "./components/DeleteContestant";
import AddVoter from "./components/AddVoter";
import UpdateVoter from "./components/UpdateVoter";
import DeleteVoter from "./components/DeleteVoter";
import VoterSearch from "./components/VoterSearch";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-contestant" element={<AddContestant />} />
          <Route
            path="/admin/update-contestant/:id"
            element={<UpdateContestant />}
          />
          <Route
            path="/admin/delete-contestant/:id"
            element={<DeleteContestant />}
          />
          <Route path="/admin/add-voter" element={<AddVoter />} />
          <Route path="/admin/update-voter/:id" element={<UpdateVoter />} />
          <Route path="/admin/delete-voter/:id" element={<DeleteVoter />} />
          <Route path="/admin/search-voter" element={<VoterSearch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
