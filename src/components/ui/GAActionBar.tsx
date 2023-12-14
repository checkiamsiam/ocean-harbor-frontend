type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const GAActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 className="text-heading text-primary uppercase">{title}</h1>
      <div className="flex justify-between items-center my-5">{children}</div>
    </div>
  );
};

export default GAActionBar;
