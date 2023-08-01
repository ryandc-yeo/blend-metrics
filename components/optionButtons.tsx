import Image from "next/image";
import {
  EditIcon,
  DeleteIcon,
  DuplicateIcon,
  RunTestIcon,
} from "@/components/assets";

export type Props = {
  variant?: "Edit" | "Duplicate" | "Run Test" | "Delete";
};

const OptionButtons = ({ variant = "Edit" }: Props) => {
  if (variant == "Edit") {
    return (
      // just change opacity when hoveredbg-white
      <div className="flex h-9 items-center gap-2 bg-white px-3 text-gray-900 hover:bg-gray-50">
        <EditIcon />
        {/* <Image src={EditIcon} alt="an edit icon" /> */}
        <p>{variant}</p>
      </div>
    );
  } else if (variant == "Duplicate") {
    return (
      // just change opacity when hovered
      <div className="flex items-center gap-2 bg-white px-3 py-[10px] text-gray-900 hover:bg-gray-50">
        <DuplicateIcon />
        {/* <Image src={DuplicateIcon} alt="a duplicate icon" /> */}
        <p>{variant}</p>
      </div>
    );
  } else if (variant == "Run Test") {
    return (
      // just change opacity when hovered
      <div className="flex h-9 items-center gap-2 bg-white px-3 text-gray-900 hover:bg-gray-50">
        <RunTestIcon />
        {/* <Image src={RunTestIcon} alt="a run test icon" /> */}
        <p>{variant}</p>
      </div>
    );
  } else {
    return (
      // just change opacity when hovered
      <div className="flex h-9 items-center gap-2 bg-white px-3 text-[#D92D20] hover:bg-red-50">
        <DeleteIcon />
        {/* <Image src={DeleteIcon} alt="a delete icon" /> */}
        <p>{variant}</p>
      </div>
    );
  }
};

export default OptionButtons;
