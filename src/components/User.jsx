import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Styles from "./CSS/user.module.css";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        const myError2 = new Error("URL ERROR!!!");
        console.error(myError2);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>
        <i>User {id}</i>
      </h1>
      {loading && <div>Loading...</div>}
      {!loading && (
        <code style={{ display: "flex", flexDirection: "column" }}>
          {JSON.stringify(user)}
        </code>
      )}

      <br />

      <div className={Styles.container} style={{ marginTop: "3rem" }}>
        <Link
          style={{
            marginRight: "3rem",
            textDecoration: "none",
            color: "yellow",
            backgroundColor: "black",
            padding: "0.5rem 1.5rem",
            borderRadius: "1rem",
          }}
          to={`/user/${parseInt(id) - 1}`}
        >
          Previous User ( {parseInt(id) - 1} )
        </Link>

        <Link
          style={{
            marginLeft: "3rem",
            textDecoration: "none",
            color: "yellow",
            backgroundColor: "black",
            padding: "0.5rem 1.5rem",
            borderRadius: "1rem",
          }}
          to={`/user/${parseInt(id) + 1}`}
        >
          Next User ({parseInt(id) + 1})
        </Link>
      </div>
    </div>
  );
}

export default User;
