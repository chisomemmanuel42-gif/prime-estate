import { useState } from "react";

export default function Listings() {
  const homes = [
   
  { title: "Modern 3‑Bed Duplex", price: "₦85,000,000", location: "Port Harcourt, Rivers", img: "" },
  { title: "Luxury Waterfront Condo", price: "₦120,000,000", location: "Victoria Island, Lagos", img: "" },
  { title: "Cozy 2‑Bed Apartment", price: "₦45,000,000", location: "Enugu, Enugu", img: "" },
  { title: "Elegant 4‑Bed Villa", price: "₦150,000,000", location: "Abuja, FCT", img: "" },
  { title: "Stylish Studio Loft", price: "₦25,000,000", location: "Lekki, Lagos", img: "" },
  { title: "Family Bungalow", price: "₦60,000,000", location: "Owerri, Imo", img: "" },
  { title: "Penthouse with City View", price: "₦200,000,000", location: "Ikoyi, Lagos", img: "" },
  { title: "Beachfront Cottage", price: "₦75,000,000", location: "Calabar, Cross River", img: "" },
  { title: "Luxury Duplex", price: "₦95,000,000", location: "Aba, Abia", img: "" },
  { title: "Smart Home Apartment", price: "₦55,000,000", location: "Uyo, Akwa Ibom", img: "" },
  { title: "Rustic Farmhouse", price: "₦40,000,000", location: "Jos, Plateau", img: "" },
  { title: "Urban Townhouse", price: "₦70,000,000", location: "Benin City, Edo", img: "" },

  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Listings</h2>
      <p style={styles.subtext}>Handpicked properties with verified details and fair pricing.</p>

      <div style={styles.grid}>
        {homes.map((h, i) => (
          <HoverCard key={i} home={h} />
        ))}
      </div>
    </section>
  );
}

// Card component with hover state
function HoverCard({ home }) {
  const [hover, setHover] = useState(false);

  return (
    <article
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          ...styles.image(home.img),
          ...(hover ? styles.imageHover : {}),
        }}
      />
      <div style={styles.cardBody}>
        <h3 style={styles.title}>{home.title}</h3>
        <p style={styles.location}>{home.location}</p>
        <p style={styles.price}>{home.price}</p>
        <button
          style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : {}),
          }}
        >
          View details
        </button>
      </div>
    </article>
  );
}

const styles = {
  section: {
    marginTop: "1rem",
    padding: "3rem 1rem",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    textAlign: "center",
    color: "#f1f5f9",
  },
  heading: { fontSize: "2rem", marginBottom: "0.5rem", color: "#fff" },
  subtext: { color: "#cbd5e1", marginBottom: "2rem" },
  grid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // responsive
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "var(--radius)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
  },
  cardBody: { padding: "1.25rem", textAlign: "left" },
  image: (src) => ({
    height: "220px",
    background: `url('${src}') center/cover no-repeat`,
    transition: "transform 0.5s ease",
  }),
  imageHover: {
    transform: "scale(1.05)", // zoom effect
  },
  title: { margin: 0, fontSize: "1.25rem", fontWeight: 700, color: "#fff" },
  location: { margin: "0.25rem 0", color: "#cbd5e1", fontSize: "0.95rem" },
  price: { fontWeight: 700, color: "var(--accent)", marginTop: "0.5rem" },
  button: {
    marginTop: "1rem",
    width: "100%",
    padding: "0.75rem",
    background: "var(--accent)",
    color: "#fff",
    border: "none",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  buttonHover: {
    background: "#7c3aed", // darker accent
    transform: "translateY(-2px)",
  },
};