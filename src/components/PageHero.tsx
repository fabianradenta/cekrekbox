type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, text, children }: Props) {
  return (
    <section className="page-hero" id="top">
      <div className="page-hero__slash" aria-hidden />
      <div className="container page-hero__inner">
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
