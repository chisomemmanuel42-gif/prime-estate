export default function Blog() {
  const posts = [
    { title: "How to verify property documents", date: "Jan 2026" },
    { title: "Top neighborhoods in Port Harcourt", date: "Dec 2025" },
    { title: "Rent vs buy: making the right call", date: "Nov 2025" },
    { title: "Smart home trends in Nigeria", date: "Oct 2025" },
    { title: "Luxury waterfront living explained", date: "Sep 2025" },
    { title: "First-time buyer’s checklist", date: "Aug 2025" },
    { title: "How to negotiate property prices", date: "Jul 2025" },
    { title: "Best schools near top estates", date: "Jun 2025" },
    { title: "Investment opportunities in Abuja", date: "May 2025" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Insights & Guides</h2>
      <p style={styles.subtext}>
        Actionable advice to help you make confident decisions.
      </p>

      <div style={styles.grid}>
        {posts.map((p, i) => (
          <article
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.6)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)";
            }}
          >
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.date}>{p.date}</p>
            <button style={styles.button}>Read more</button>
          </article>
        ))}
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // responsive
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "var(--radius)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    padding: "1.5rem",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    border: "1px solid rgba(148,163,184,0.3)",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--accent)",
  },
  date: {
    margin: "0.25rem 0",
    color: "#cbd5e1",
    fontSize: "0.9rem",
  },
  button: {
    marginTop: "0.75rem",
    padding: "0.6rem 1rem",
    background: "var(--accent)",
    color: "#fff",
    border: "none",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};