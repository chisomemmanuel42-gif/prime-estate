import { Link } from "react-router-dom";
import heroBg from "../assets/hero.jpg"; 

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 className="h1" style={{ color: "#fff", fontSize: "3rem" }}>
          Find Your Dream Home
        </h1>
        <p className="p" style={{ color: "#e2e8f0", maxWidth: 720, fontSize: "1.25rem" }}>
          Prime Estates offers curated listings, transparent pricing, and expert guidance.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link className="btn" to="/listings">Browse Listings</Link>
          <Link className="btn" to="/contact" style={{ background: "var(--accent)" }}>
            Talk to an Agent
          </Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "90vh",
    width: "100%",
    overflow: "hidden",
    background: `url(${heroBg}) center/cover no-repeat`, 
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.35))",
  },
  content: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertically center
    alignItems: "center",     // horizontally center
    textAlign: "center",
    padding: "0 1rem",
  },
};