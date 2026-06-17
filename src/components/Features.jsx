const features = [
  { title: 'Fast Setup', desc: 'Opinionated defaults so you can focus on product.' },
  { title: 'Modern Tooling', desc: 'Vite, JSX, and a tiny build surface.' },
  { title: 'Accessible', desc: 'Built with accessibility best-practices.' },
];

export default function Features() {
  return (
    <section id="features" className="features container">
      {features.map((f) => (
        <div key={f.title} className="feature">
          <div className="feature-icon" aria-hidden>✦</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
