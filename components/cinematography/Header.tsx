type HeaderProps = {
  title?: string;
  description?: string;
};

const Header = ({ title = "", description = "" }: HeaderProps) => {
  return (
    <p className="text-lg">
      <span className="font-bold uppercase">{title}</span>{" "}
      <span>{description}</span>
    </p>
  );
};

export default Header;
