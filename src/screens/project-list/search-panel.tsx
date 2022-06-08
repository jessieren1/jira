import React from 'react';
import { SearchPanelProps } from 'model';

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(event) => {
          setParam({
            ...param,
            name: event.target.value,
          });
        }}
      />

      <select
        value={param.personId}
        onChange={(event) => {
          setParam({
            ...param,
            personId: event.target.value,
          });
        }}
      >
        <option value={''}>Staff</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
