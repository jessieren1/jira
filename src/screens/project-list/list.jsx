import React from 'react';

export const List = ({ users, list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((li) => (
          <tr key={li.id}>
            <td>{li.name}</td>
            <td>{users.find((user) => user.id === li.personId)?.name || 'unknown'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
