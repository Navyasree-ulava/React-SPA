export default function CTA() {
  return (
    <section className="cta container">
      <div className="cta-inner">
        <div>
          <h2>Ready to ship your idea?</h2>
          <p>Start with a free trial — no credit card required.</p>
        </div>

        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email" aria-label="Email" />
          <button className="btn btn-primary">Get started</button>
        </form>
      </div>
    </section>
  );
}
