interface IContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionContainer = ({ id, title, children }: IContainerProps) => {
  return (
    <section
      id={id}
      className="flex flex-row gap-5 sm:space-x-14 items-start justify-start w-full"
    >
      <div className="w-[28%] sm:w-32 shrink-0">
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      {children}
    </section>
  );
};

export { SectionContainer };
