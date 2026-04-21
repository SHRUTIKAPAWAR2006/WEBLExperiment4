function Item({ item }) {
  return (
    <div style={{
      background: "#2c2c3e",
      padding: "15px",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      
      {/* Image */}
      <img
        src={item.image?.medium || "https://via.placeholder.com/210x295"}
        alt={item.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      {/* Title */}
      <h3>{item.name}</h3>

      {/* Rating */}
      <p>⭐ {item.rating?.average || "N/A"}</p>

      {/* Button */}
      <button style={{
        background: "#ff6b6b",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer"
      }}>
        View Details
      </button>

    </div>
  );
}

export default Item;