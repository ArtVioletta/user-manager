// src/components/UserTable.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserTableBody from './UserTableBody';
import './UserTable.css';
import { AppDispatch, RootState } from '../../store';
import { fetchUsers } from '../../store/thunks';
import { setFilter } from '../../store/usersSlice';
import { Filters } from '../../types/types';
import FilterInputs from '../FilterInputs/FilterInputs';

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error, filters } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (field: keyof Filters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h2 className="header">User Management Table</h2>
      <FilterInputs filters={filters} onFilterChange={handleFilterChange} />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <UserTableBody users={filteredUsers} />
      </table>
    </div>
  );
};

export default UserTable;
