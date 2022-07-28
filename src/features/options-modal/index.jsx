import { useState } from "react";
import Checkbox from "@/ui/checkbox";

const closeShotOptions = {
  closeUp: false,
  mediumCloseUp: false,
  extremeCloseUp: false,
  wideCloseUp: false,
};

const mediumShotOptions = {
  medium: false,
  close: false,
  mediumClose: false,
};

export default function OptionsModal({}) {
  const [closeOptions, setCloseOptions] = useState(closeShotOptions);
  const [mediumOptions, setMediumOptions] = useState(mediumShotOptions);

  return (
    <div className="flex gap-6">
      <OptionsPane
        {...{
          radio: true,
          value: closeOptions,
          onChange: (options) => {
            setCloseOptions(options);
            setMediumOptions(mediumShotOptions);
          },
          label: "Close-ups",
          defaultValue: closeShotOptions,
        }}
      />
      <OptionsPane
        {...{
          radio: false,
          value: mediumOptions,
          onChange: (options) => {
            setCloseOptions(closeShotOptions);
            setMediumOptions(options);
          },
          label: "Medium shots",
          defaultValue: mediumShotOptions,
        }}
      />
    </div>
  );
}

function OptionsPane({
  label,
  radio = false,
  value,
  defaultValue,
  onChange = () => {},
}) {
  const options = Object.keys(value || {}).map((key) => (
    <Checkbox
      className=""
      radio={radio}
      value={value[key]}
      onChange={(value) =>
        onChange({
          ...defaultValue,
          [key]: value,
        })
      }
      label={key}
    />
  ));

  return (
    <section className="flex flex-col gap-4">
      <h2 className="uppercase font-medium text-xs border-b border-gray-800 p-1">
        {label}
      </h2>

      <div>{options} </div>
    </section>
  );
}
