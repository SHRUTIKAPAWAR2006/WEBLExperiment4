import { useEffect, useState } from "react";
import Item from "./Item";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#1e1e2f", minHeight: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Movie Browser</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {data.slice(0, 20).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;