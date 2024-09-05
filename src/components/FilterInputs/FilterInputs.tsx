
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FilterInputs.css';
import { AppDispatch, RootState } from '../../store';
import { setFilter } from '../../store/usersSlice';

const FilterInputs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleChange = (field: keyof typeof filters) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ field, value: event.target.value }));
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={handleChange('name')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={filters.username}
        onChange={handleChange('username')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={filters.email}
        onChange={handleChange('email')}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={filters.phone}
        onChange={handleChange('phone')}
        className="input-field"
      />
    </div>
  );
};

export default FilterInputs;
