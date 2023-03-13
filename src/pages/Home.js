import React from "react";
import { PanelContainer } from "../components/common";

const Home = () => {
  const [status, setStatus] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus(data);
      })
      .catch(() => console.error("fetch failed"));
  }, []);

  return (
    <PanelContainer>
      <h2>Home</h2>
      <div>
        <ul>
          {status.length > 0
            ? status.map((item, index) => <li key={index}>{item.title}</li>)
            : null}
        </ul>
      </div>
    </PanelContainer>
  );
};

export default Home;
