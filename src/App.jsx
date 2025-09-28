import { useForm } from "react-hook-form";
import CustomInput from "./components/CustomInput";
import "./App.css";

function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="app-container">
      <div className="form-box">
        <h2 className="mb-4 text-center">Sign Up Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            control={control}
            name="username"
            label="Username"
            placeholder="Enter username"
            rules={{
              required: "Username is required",
              minLength: { value: 3, message: "Min 3 characters" },
            }}
          />

          <CustomInput
            control={control}
            name="email"
            type="email"
            label="Email"
            placeholder="Enter email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email format",
              },
            }}
          />

          <CustomInput
            control={control}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must be 6+ chars, include uppercase, lowercase, number & special char",
              },
            }}
          />

          <button type="submit" className="btn-custom mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
