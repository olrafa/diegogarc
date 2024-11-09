import { cleanDescription } from "@/sanity/lib/util";

type ItemHeaderProps = {
  title?: string;
  description?: string;
};

const ItemHeader = ({ title = "", description = "" }: ItemHeaderProps) => {
  const updatedDescription = description.includes("|")
    ? cleanDescription(title, description)
    : description;

  return (
    <p className="text-lg">
      <span className="font-bold uppercase">{title}</span>
      {updatedDescription}
    </p>
  );
};

export default ItemHeader;
