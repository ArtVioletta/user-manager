
import React from 'react';
import { User } from '../../types/types';


interface Props {
  users: User[];
}

const UserTableBody: React.FC<Props> = ({ users }) => {
  return (
    <tbody>
      {users.map((user: User) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserTableBody;
