export default function Checkbox({
  label = "",
  radio = false,
  value = false,
  onChange = () => {},
  ...rest
}) {
  return (
    <div {...rest}>
      <input type="checkbox" className="hidden" value={value} />

      <div className="flex gap-2 items-center">
        <div
          className={`${
            radio ? "rounded-full" : ""
          } transition duration-500 border h-[18px] w-[18px] p-[3px] border-gray-300 hover:border-gray-500`}
          onClick={() => onChange(!value)}>
          <div
            className={`transition duration-300 ${
              value ? "bg-purple-800" : "bg-transparent"
            } ${radio ? "rounded-full" : ""} w-full h-full`}
          />
        </div>

        {label && (
          <div
            className="font-light text-sm opacity-90 pb-1 text-gray-800"
            onClick={() => onChange(!value)}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
