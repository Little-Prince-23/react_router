import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styles from "./CSS/users.module.css";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        const myError = new Error("URL ERROR!!!");
        console.error(myError);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>
        <i>Users</i>
      </h1>
      {loading && <div>Loading...</div>}
      <ul className={Styles.list}>
        {users.map((user) => (
          <li className={Styles.item} key={user.id}>
            <Link className={Styles.link} to={`/user/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
