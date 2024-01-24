export const Label = ({ label, isRequired = false }) => {
  return (
    <label className="text-small text-black font-semibold">
      {label} {isRequired && <b className="text-red-500 p-1">*</b>}
    </label>
  );
};
