export const SkillBubble = ({
  name,
  logoSrc,
  logoAlt,
  className,
  imageClass,
}: {
  name: string;
  logoSrc: string;
  logoAlt: string;
  className?: string;
  imageClass?: string;
}) => {
  return (
    <div
      className={`relative h-32 w-32 items-center justify-center rounded-full bg-cyan-800 bg-opacity-30 ${className}`}
    >
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col">
        <img
          src={logoSrc}
          alt={logoAlt}
          className={`max-w-12 mb-4 h-auto ${imageClass}`}
        />
        <h4 className="text-sm">{name}</h4>
      </div>
    </div>
  );
};
