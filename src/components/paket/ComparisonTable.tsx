import { comparisonRows, pricing } from "@/content/site";
import { rupiah, waLink } from "@/lib/utils";

function Cell({ value }: { value: string | true }) {
  if (value === true) {
    return (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Termasuk">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
  return (
    <>
      {value.split("\n").map((line, i) => (
        <span key={i} style={{ display: "block" }}>
          {line}
        </span>
      ))}
    </>
  );
}

export default function ComparisonTable() {
  const { normal, unlimited } = pricing;

  return (
    <section className="section" id="bandingkan">
      <div className="container stack-48" style={{ maxWidth: 1088, gap: 36 }}>
        <div className="section-head">
          <span className="chip">Bandingkan paket</span>
          <h2 className="h2">
            Apa saja yang <span className="accent">kamu dapat</span>
          </h2>
        </div>

        <div className="table-wrap">
          <table className="compare">
            <caption className="visually-hidden">Perbandingan {normal.name} dan {unlimited.name}</caption>
            <thead>
              <tr>
                <th scope="col">Fasilitas</th>
                <th scope="col">
                  <span className="tier">Normal</span>
                  <span className="amt">{rupiah(normal.basePerDay)}</span>
                  <span className="sub">per hari + biaya cetak</span>
                </th>
                <th scope="col" className="featured">
                  <span className="tier">{unlimited.shortName}</span>
                  <span className="amt">{rupiah(unlimited.hourly[0].price)}</span>
                  <span className="sub">mulai, untuk {unlimited.hourly[0].hours} jam</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>
                    <Cell value={row.normal} />
                  </td>
                  <td className="featured">
                    <Cell value={row.unlimited} />
                  </td>
                </tr>
              ))}
              <tr>
                <td />
                <td>
                  <a className="btn btn--outline btn--sm" href={waLink(`Halo CekrekBox, saya tertarik dengan ${normal.name}.`)} target="_blank" rel="noopener">
                    Pilih Normal
                  </a>
                </td>
                <td className="featured">
                  <a className="btn btn--orange btn--sm" href={waLink(`Halo CekrekBox, saya tertarik dengan ${unlimited.name}.`)} target="_blank" rel="noopener">
                    Pilih Unlimited
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="note" style={{ margin: 0 }}>
          {pricing.printNote} Syarat &amp; ketentuan berlaku.
        </p>
      </div>
    </section>
  );
}
