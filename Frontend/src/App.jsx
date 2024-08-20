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
import VoterSearchDelete from "./components/VoterSearchDelete";
import ContestantSearch from "./components/ContestantSearch";
import ContestantSearchDelete from "./components/ContestantSearchDelete";
import Voter from "./components/VoterPage";
import VoterRegistration from "./components/VoterRegistration";
import VoterElection from "./components/VoterElection";
import GovernorshipElection from "./components/GovernorshipElection";
import PresidentialElection from "./components/PresidentialElection";
import PresidentialResults from "./components/PresidentialResults";
import GovernorshipResults from "./components/GovernorshipResults";
import ElectionDetails from "./components/ElectionDetails";
import ElectionNews from "./components/ElectionNews";
import GovernorshipElectionWinner from "./components/GovernorshipElectionWinner";
import PresidentialElectionWinner from "./components/PresidentialElectionWinner";
import Winners from "./components/Winners";

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
          <Route
            path="/admin/search-contestant"
            element={<ContestantSearch />}
          />
          <Route
            path="/admin/search-contestant-delete"
            element={<ContestantSearchDelete />}
          />
          <Route path="/admin/add-voter" element={<AddVoter />} />
          <Route path="/admin/update-voter/:id" element={<UpdateVoter />} />
          <Route path="/admin/delete-voter/:id" element={<DeleteVoter />} />
          <Route path="/admin/search-voter" element={<VoterSearch />} />
          <Route
            path="/admin/search-voter-delete"
            element={<VoterSearchDelete />}
          />
          <Route path="/voter-register" element={<Voter />} />
          <Route path="/voter-registration" element={<VoterRegistration />} />
          <Route path="/voter-election" element={<VoterElection />} />
          <Route
            path="/governorship-election"
            element={<GovernorshipElection />}
          />
          <Route
            path="/presidential-election"
            element={<PresidentialElection />}
          />

          <Route
            path="/presidential-election-results"
            element={<PresidentialResults />}
          />

          <Route
            path="/governorship-election-results"
            element={<GovernorshipResults />}
          />
          <Route path="/election-details" element={<ElectionDetails />} />
          <Route path="/election-news" element={<ElectionNews />} />
          <Route
            path="/governorship-election-winners"
            element={<GovernorshipElectionWinner />}
          />
          <Route
            path="/presidential-election-winner"
            element={<PresidentialElectionWinner />}
          />
          <Route path="/winners" element={<Winners />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
