import React from 'react';
import FilterInputs from './components/FilterInputs/FilterInputs';
import UserTable from './components/UserTable/UserTable';


const App: React.FC = () => {
  return (
    <div className="app">
      <UserTable />
    </div>
  );
};

export default App;