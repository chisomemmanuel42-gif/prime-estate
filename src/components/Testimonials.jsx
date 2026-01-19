export default function Testimonials() {
  const data = [
    {
      name: "Ada",
      text: "Smooth process and great support. Found my dream home fast.",
      photo: "https://via.placeholder.com/64",
      stars: 5,
    },
    {
      name: "Chinedu",
      text: "Transparent pricing and professional agents. Highly recommend.",
      photo: "https://via.placeholder.com/64",
      stars: 5,
    },
    {
      name: "Amaka",
      text: "Loved the curated listings—saved me tons of time.",
      photo: "https://via.placeholder.com/64",
      stars: 5,
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What our clients say</h2>
      <p style={styles.subtext}>
        Real stories from buyers and renters who trusted Prime Estates.
      </p>

      <div style={styles.grid}>
        {data.map((t, i) => (
          <article key={i} style={styles.card}>
            <img src={t.photo} alt={t.name} style={styles.photo} />
            <div style={styles.stars}>{"★".repeat(t.stars)}</div>
            <p style={styles.text}>{t.text}</p>
            <p style={styles.name}>{t.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginTop: "4rem", // 👈 adds space below Hero
    padding: "3rem 1rem",
    background: "linear-gradient(135deg, #0f172a, #1e293b)", // 👈 toned background
    color: "#f1f5f9", // light text color for contrast
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#fff",
  },
  subtext: {
    color: "#cbd5e1",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    background: "rgba(255,255,255,0.05)", // semi-transparent card
    borderRadius: "var(--radius)",
    boxShadow: "var(--shadow)",
    padding: "1.5rem",
    textAlign: "center",
    backdropFilter: "blur(6px)",
  },
  photo: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0.75rem",
    border: "2px solid var(--accent)",
  },
  stars: {
    color: "var(--accent)",
    fontSize: "1.2rem",
    marginBottom: "0.75rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    color: "#e2e8f0",
  },
  name: {
    fontWeight: 600,
    color: "#fff",
  },
};