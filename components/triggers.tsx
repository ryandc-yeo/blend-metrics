import { useState } from "react";
import TriggersCard from "./triggersCard";

const Triggers = ({
  count = 1,
  body = "Lorem ipsum dolor sit amet, consec tetur adipiscing elit Lorem ipsum dolor sit amet, consec tetur adipiscing elit",
}) => {
  return (
    <div className="flex w-[972px] flex-wrap gap-4">
      {[...Array(count)].map((value, index: number) => (
        <TriggersCard key={index} />
      ))}
    </div>
  );
};

export default Triggers;
