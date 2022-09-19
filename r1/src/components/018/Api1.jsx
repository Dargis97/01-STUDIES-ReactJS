import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Api1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <ul>
        {users
          .sort((a, b) => a.address.city.localeCompare(b.address.city))
          .map((u) => (
            <li key={u.id}>
              {u.name} - {u.address.city} - {u.company.name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Api1;
