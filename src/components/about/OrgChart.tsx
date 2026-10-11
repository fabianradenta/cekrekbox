import Image from "next/image";
import { team, type Person } from "@/content/site";

// Posisi absolut mengikuti bagan di company profile. Di bawah 920px jadi grid biasa (globals.css).
const LINES = [
  { left: 250, top: 124, width: 100, height: 3 }, // Komisaris ke Direktur
  { left: 439, top: 252, width: 3, height: 40 }, // Direktur ke bawah
  { left: 159, top: 289, width: 563, height: 3 }, // garis manajer
  { left: 159, top: 289, width: 3, height: 41 },
  { left: 439, top: 289, width: 3, height: 41 },
  { left: 719, top: 289, width: 3, height: 41 },
  { left: 439, top: 582, width: 3, height: 78 }, // Brand & Marketing ke Social Media
  { left: 719, top: 582, width: 3, height: 78 }, // Sales & Partnership ke Operation
];

const POSITIONS: { person: Person; left: number; top: number }[] = [
  { person: team.vinna, left: 70, top: 0 },
  { person: team.daffa, left: 350, top: 0 },
  { person: team.harfan, left: 70, top: 330 },
  { person: team.amir, left: 350, top: 330 },
  { person: team.siti, left: 630, top: 330 },
  { person: team.dear, left: 350, top: 660 },
  { person: team.rezky, left: 630, top: 660 },
];

export default function OrgChart() {
  return (
    <div className="org">
      {LINES.map((l, i) => (
        <span key={i} className="org__line" aria-hidden style={l} />
      ))}
      {POSITIONS.map(({ person, left, top }) => (
        <figure key={person.id} className="person" style={{ left, top }}>
          <Image src={person.photo} alt={person.name} sizes="(max-width: 920px) 45vw, 180px" />
          <figcaption>
            <strong>{person.name}</strong>
            <span>{person.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
