export default function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Prime Estates</h2>
      <p style={styles.subtext}>
        We’re a team of experienced agents and analysts helping you navigate Nigeria’s
        property market with clarity. From discovery to closing, we prioritize transparency,
        verified listings, and client satisfaction.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Mission</h3>
          <p style={styles.text}>Make property transactions simple, fair, and stress‑free.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Values</h3>
          <p style={styles.text}>Integrity, transparency, and relentless client advocacy.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Coverage</h3>
          <p style={styles.text}>Rivers, Lagos, Abuja, Enugu—and expanding nationwide.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Vision</h3>
          <p style={styles.text}>To be Nigeria’s most trusted real estate partner.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Team</h3>
          <p style={styles.text}>Experienced agents, analysts, and customer support specialists.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.title}>Our Services</h3>
          <p style={styles.text}>Property sales, rentals, investment advisory, and market analysis.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginTop: "1rem",
    padding: "3rem 1rem",
    background: "linear-gradient(135deg, #0f172a, #1e293b)", // dark gradient
    textAlign: "center",
    color: "#f1f5f9",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#fff",
  },
  subtext: {
    color: "#cbd5e1",
    marginBottom: "2rem",
    maxWidth: "720px",
    marginInline: "auto",
  },
  grid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    background: "rgba(255,255,255,0.05)", // semi-transparent glass look
    borderRadius: "var(--radius)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    padding: "1.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid rgba(148,163,184,0.3)",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
    borderColor: "var(--accent)",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--accent)",
  },
  text: {
    color: "#e2e8f0",
    marginTop: "0.5rem",
    fontSize: "0.95rem",
  },
};