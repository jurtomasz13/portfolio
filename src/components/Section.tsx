export const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  childrenClass,
}: {
  id?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
  childrenClass?: string;
}) => {
  return (
    <section id={id} className={className}>
      <h2 className="text-base font-bold uppercase text-cyan-600">
        {subtitle}
      </h2>
      <h3 className="mb-16 text-4xl">{title}</h3>
      <div className={childrenClass}>{children}</div>
    </section>
  );
};
