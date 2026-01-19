export default function Footer() {
  return (
    <footer style={wrap}>
      <div className="footer-grid" style={grid}>
        {/* Brand */}
        <div>
          <h3 style={{ margin: 0, fontFamily: "var(--title)" }}>
            Prime<span style={{ color: "var(--accent)" }}>Estates</span>
          </h3>
          <p className="p" style={{ marginTop: "0.5rem" }}>
            Trusted real estate across Nigeria.
          </p>
        </div>

        {/* Explore links */}
        <div>
          <p style={label}>Explore</p>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <a href="/listings" style={link}>Listings</a>
            <a href="/about" style={link}>About</a>
            <a href="/blog" style={link}>Blog</a>
            <a href="/contact" style={link}>Contact</a>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <p style={label}>Contact</p>
          <p className="p">Oyigbo, Rivers State</p>
          <p className="p">hello@primeestates.ng</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={bottom}>© {new Date().getFullYear()} Prime Estates</div>
    </footer>
  );
}

const wrap = {
  background: "var(--dark)",
  color: "#cbd5e1",
  marginTop: "2rem",
  padding: "2rem 1.25rem 1rem",
};

const grid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gap: "1.25rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  alignItems: "start",
};

const label = { fontWeight: 700, color: "#fff", marginBottom: "0.5rem" };
const link = { color: "#cbd5e1", textDecoration: "none", fontSize: "0.95rem" };
const bottom = {
  maxWidth: "1200px",
  margin: "1rem auto 0",
  color: "#94a3b8",
  textAlign: "center",
  fontSize: "0.85rem",
  borderTop: "1px solid #334155",
  paddingTop: "1rem",
};