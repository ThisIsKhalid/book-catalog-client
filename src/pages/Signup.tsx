import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";
import SubmitButton from "../components/SubmitButton";
import { useUserSignUpMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [userSignUp, { isLoading, data, isSuccess, isError }] =
    useUserSignUpMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (isSuccess && data?.data.accessToken) {
      //! set accessToken to localstorage here
      localStorage.setItem("accessToken", data?.data.accessToken);

      toast.success("Signup successful!");
      navigate("/");
    }

    if (isError && !isLoading) {
      toast.error("Error during signup. Please try again.");
    }
  }, [isSuccess, isError, isLoading, dispatch, data?.data, navigate]);

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    try {
      await userSignUp(data);
      e?.target.reset();
    } catch (error) {
      console.log(error);
    }
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
            <SubmitButton
              buttonText="Signup"
              className="w-1/2"
              isLoading={isLoading}
            />
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm">
            If you already have an account then go to{" "}
            <Link
              to="/login"
              className="text-blue-500 font-semibold underline underline-offset-4"
            >
              Login
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
