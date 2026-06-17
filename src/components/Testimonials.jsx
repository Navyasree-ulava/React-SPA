const reviews = [
  { name: 'Sophie', text: 'Transformed our onboarding — results in two weeks.' },
  { name: 'Liam', text: 'Clear, fast, and reliable. Great collaboration.' },
  { name: 'Ava', text: 'Design-first approach that actually scales.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials container">
      <h2>What our customers say</h2>
      <div className="test-grid">
        {reviews.map((r) => (
          <blockquote key={r.name} className="test-card">
            <p>“{r.text}”</p>
            <footer>— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
