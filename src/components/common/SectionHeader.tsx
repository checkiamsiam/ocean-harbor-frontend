const SectionHeader = ({ title, subtitle, color = "black" }: { title: string; subtitle?: string; color ?: "black" | "white" }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-heading text-primary">{title}</h1>
        {subtitle && <p className={`text-body ${color === "black" ? "text-black" : "text-white"} mt-1`}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;
