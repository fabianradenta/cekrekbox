import Link from "next/link";

type Props = {
  title: string;
  crumb: string;
  text: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, crumb, text, children }: Props) {
  return (
    <section className="page-hero" id="top">
      <div className="page-hero__slash" aria-hidden />
      <div className="container page-hero__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <span aria-hidden>/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
