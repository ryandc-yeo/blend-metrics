import Image from "next/image";
import { CategoryNameBlueIcon, CategoryNameIcon } from "@/components/assets";
import { useState } from "react";

export type Props = {
  variant?: true | false;
};

const CategoryName = ({
  variant = false,
  title = "Category Name",
  icon = CategoryNameIcon,
  iconBlue = CategoryNameBlueIcon,
}) => {
  const [active, setActive] = useState(variant);

  const handleClick = () => {
    setActive(!active);
  };

  if (active) {
    return (
      <button
        onClick={handleClick}
        className="flex w-56 max-w-full items-center rounded-md bg-[#EAF0FF] px-3 py-2"
      >
        <CategoryNameBlueIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#306CFE]">
          {title}
        </p>
      </button>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className="flex w-56 max-w-full items-center rounded-md bg-white px-3 py-2 hover:bg-gray-100"
      >
        <CategoryNameIcon />
        <p className="pl-3 text-sm font-semibold capitalize text-[#667085]">
          {title}
        </p>
      </button>
    );
  }
};

export default CategoryName;
