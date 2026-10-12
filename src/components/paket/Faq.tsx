import { faqs } from "@/content/site";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container narrow stack-48" style={{ gap: 32 }}>
        <div className="section-head center">
          <span className="chip">FAQ</span>
          <h2 className="h2">
            Pertanyaan <span className="accent">yang sering muncul</span>
          </h2>
        </div>
        <div className="faq">
          {faqs.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="plus" aria-hidden>
                  +
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
