export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Build beautiful experiences, faster.</h1>
          <p className="lead">
            A tiny, expressive React starter that helps you ship delightful UIs
            with modern tooling and thoughtful defaults.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start free trial</button>
            <a className="btn btn-ghost" href="#features">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="visual-card">
            <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="220" height="140" rx="12" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#FFD6EA" />
                  <stop offset="1" stopColor="#C8B6FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
