
import React from 'react';
import './FilterInputs.css';
import { Filters } from '../../types/types';

interface Props {
  filters: Filters;
  onFilterChange: (field: keyof Filters, value: string) => void;
}

const FilterInputs: React.FC<Props> = ({ filters, onFilterChange }) => {
  return (
    <div className="inputGroup">
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
        className="inputField"
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={filters.username}
        onChange={(e) => onFilterChange('username', e.target.value)}
        className="inputField"
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={filters.email}
        onChange={(e) => onFilterChange('email', e.target.value)}
        className="inputField"
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={filters.phone}
        onChange={(e) => onFilterChange('phone', e.target.value)}
        className="inputField"
      />
    </div>
  );
};

export default FilterInputs;