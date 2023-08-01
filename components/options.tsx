import OptionButtons from "./optionButtons";

const Options = () => {
  return (
    <div className="w-[165px] rounded-lg border border-gray-100 bg-white py-1 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.04),0_12px_16px_-4px_rgba(16,24,40,0.08)]">
      <div className="pb-1 opacity-75 hover:opacity-100">
        <OptionButtons variant="Edit" />
      </div>
      <div className="pb-1 opacity-75 hover:opacity-100">
        <OptionButtons variant="Duplicate" />
      </div>
      <div className="pb-1 opacity-75 hover:opacity-100">
        <OptionButtons variant="Run Test" />
      </div>
      <hr className="bg-gray-100" />
      <div className="pt-1">
        <OptionButtons variant="Delete" />
      </div>
    </div>
  );
};

export default Options;
