import { useEffect, useState } from "react";

import {
  fetchNotifications
} from "../api/notifications";

function Home() {

  const [notifications,
    setNotifications]
    = useState([]);

  useEffect(() => {

    loadNotifications();

  }, []);

  const loadNotifications =
  async () => {

    try {

      const data =
      await fetchNotifications();

      setNotifications(data);

    } catch (error) {

      console.log(error);

      alert("API Error");
    }
  };

  return (

    <div style={{
      padding: "20px"
    }}>

      <h1>
        Notifications
      </h1>

      {
        notifications.map((item) => (

          <div
            key={item.ID}

            style={{
              border:
              "1px solid gray",

              margin: "10px",

              padding: "10px"
            }}
          >

            <h3>{item.Type}</h3>

            <p>{item.Message}</p>

            <small>
              {item.Timestamp}
            </small>

          </div>
        ))
      }

    </div>
  );
}

export default Home;