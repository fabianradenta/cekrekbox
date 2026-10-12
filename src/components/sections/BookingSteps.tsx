import { bookingSteps } from "@/content/site";

export default function BookingSteps() {
  return (
    <section className="section section--surface" id="booking">
      <div className="container stack-48">
        <div className="section-head center">
          <h2 className="h2">
            Booking dalam
            <br />
            <span className="accent">{bookingSteps.length} langkah mudah</span>
          </h2>
        </div>
        <ol className="steps">
          {bookingSteps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step__num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
