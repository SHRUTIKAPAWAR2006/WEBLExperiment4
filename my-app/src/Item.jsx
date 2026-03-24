import { useState } from "react";

function Item({ item }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{
      background: "#2c2c3e",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center"
    }}>
      <img
        src={item.image?.medium}
        alt={item.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{item.name}</h3>

      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "6px",
          background: "#ff4757",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        {show ? "Hide" : "Show"} Info
      </button>

      {show && (
        <div
          style={{ marginTop: "10px", fontSize: "14px" }}
          dangerouslySetInnerHTML={{ __html: item.summary }}
        />
      )}
    </div>
  );
}

export default Item;