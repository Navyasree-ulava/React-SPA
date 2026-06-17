export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo" aria-hidden>◐</div>
          <span className="brand-name">Aurora</span>
        </div>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#mission">Mission</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-cta">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
}
