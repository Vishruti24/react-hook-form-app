import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, label, rules, type = "text", placeholder }) => {
  return (
    <div className="mb-3">
      <label className="block font-medium mb-1">{label}</label>

      {/* Controller connects custom input to React Hook Form */}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`border rounded p-2 w-full ${
                fieldState.error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
