import React from "react";
import UserTable from "./components/UserTable/UserTable";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <UserTable />
    </div>
  );
};

export default App;
