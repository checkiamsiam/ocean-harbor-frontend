const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-heading text-primary">{title}</h1>
        {subtitle && <p className="text-body text-white mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;
