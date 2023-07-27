interface SectionTitleProps {
  title: string;
  shortTitle?: string;
}

const SectionTitle = ({ title, shortTitle }: SectionTitleProps) => {
  return (
    <div className="mb-4 text-center pb-10">
      <h2 className="text-4xl text-gray-800 font-semibold uppercase">
        {title}
      </h2>
      <p className="text-sm mt-1">{shortTitle}</p>
    </div>
  );
};

export default SectionTitle;
