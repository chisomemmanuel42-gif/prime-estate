import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Brand Logo */}
        <Link to="/" style={styles.brand}>
          Prime<span style={{ color: "var(--accent)" }}>Estates</span>
        </Link>

        {/* Hamburger (mobile only) */}
        <button style={styles.toggle} onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          style={{
            ...styles.nav,
            ...(open ? styles.navMobileOpen : styles.navMobileClosed),
          }}
        >
          <NavLink to="/" style={styles.link}>Home</NavLink>
          <NavLink to="/listings" style={styles.link}>Listings</NavLink>
          <NavLink to="/about" style={styles.link}>About</NavLink>
          <NavLink to="/blog" style={styles.link}>Blog</NavLink>
          <NavLink to="/contact" style={styles.link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "var(--dark)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",          // full width
    height: "80px",         // taller height
    display: "flex",
    alignItems: "center",
  },
  container: {
    width: "100%",          // stretch full width
    margin: "0 auto",
    padding: "0 2rem",      // more horizontal padding
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontFamily: "var(--title)",
    fontSize: "2rem",       // bigger logo text
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
  toggle: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2rem",       // bigger hamburger
    cursor: "pointer",
    display: "block",
  },
  nav: {
    display: "flex",
    gap: "2rem",            // more spacing between links
    flexDirection: "row",
  },
  navMobileOpen: {
    position: "absolute",
    top: "80px",            // match new navbar height
    right: "1rem",
    flexDirection: "column",
    background: "var(--dark)",
    padding: "1rem",
    borderRadius: "var(--radius)",
    width: "200px",
  },
  navMobileClosed: {
    display: "none",
  },
  link: ({ isActive }) => ({
    color: isActive ? "var(--accent)" : "#cbd5e1",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.1rem",     // slightly larger link text
  }),
};