import { useForm } from "react-hook-form";
import CustomInput from "./components/CustomInput";

function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Sign Up Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          control={control}
          name="username"
          label="Username"
          placeholder="Enter username"
          rules={{ required: "Username is required", minLength: { value: 3, message: "Min 3 chars" } }}
        />

        <CustomInput
          control={control}
          name="email"
          type="email"
          label="Email"
          placeholder="Enter email"
          rules={{
            required: "Email is required",
            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email format" },
          }}
        />

        <CustomInput
          control={control}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          rules={{ required: "Password is required", minLength: { value: 6, message: "Min 6 chars" } }}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
