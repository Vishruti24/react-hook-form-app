import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, label, rules, type = "text", placeholder }) => {
  return (
    <div className="mb-3 position-relative">
      <label className="form-label text-white">{label}</label>

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
              className={`form-control bg-dark text-white border-white transition-all ${
                fieldState.error ? "border-danger" : ""
              }`}
              style={{
                transition: "all 0.3s ease",
              }}
            />
            {fieldState.error && (
              <div className="form-text text-danger">{fieldState.error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
