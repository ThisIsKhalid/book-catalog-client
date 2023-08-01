import { SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../components/SectionTitle";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="py-10">
      <div className="">
        <SectionTitle
          title="Sign up"
          shortTitle="Join with us. We are eagerly waiting for you and your contribution."
        />
      </div>
      <div className="-mt-5 md:w-1/2 w-full mx-auto bg-customGray p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div>
            <label className="label">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-success w-full placeholder:text-sm"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm font-medium">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="label">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="input input-bordered input-success w-full placeholder:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="input input-bordered input-success w-full placeholder:text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-sm font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-5 ">
            <SubmitButton buttonText="Signup" className="w-1/2" />
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm">
            If you already have an account then go to <Link to="/login" className="text-blue-500 font-semibold underline underline-offset-4">Login</Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
