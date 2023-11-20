import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../services/signUp/signUp.service";
import { toast } from "sonner";
import { LoadingContext } from "../../context/LoadingContext";
import { RingLoader } from "react-spinners";

/**
 * Sign Up component.
 * This component allows users to sign up by providing their email and password.
 * It includes form validation and navigation using react-router-dom.
 */
export const SignUp = (): JSX.Element => {
  // ? context declaration
  const { loading, handleLoading } = useContext(LoadingContext);

  /**
   * Represents the SignUp component.
   * @component
   */
  const [formSignUp, setFormSignUp] = useState<Record<string, string | number>>(
    {
      email: "",
      password: "",
    }
  );

  /**
   * Handles input change event.
   * Updates the formSignUp state with the new input value.
   * @param event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormSignUp({
      ...formSignUp,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handles form submission event.
   * Validates the form and creates a new user.
   * If successful, navigates to the home page.
   * @param event - The form submission event.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formSignUp;
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await createUser(formSignUp, handleLoading);

      if (response.status === 200) {
        toast.success("User created");
      } else {
        toast.error("Failed to create user");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[360px] h-[800px] px-6 bg-white flex flex-col justify-center items-center gap-6">
        <div className="w-[360px] h-14 p-4 flex flex-col justify-start items-start">
          <div className="w-6 h-6 relative" />
          <h1 className="text-center text-black text-base font-semibold font-['Inter'] leading-normal">
            Sign Up
          </h1>
        </div>
        <h2 className="text-center text-black text-2xl font-bold font-['Inter'] leading-loose">
          MAYNOOTH
        </h2>
        <div className="self-stretch h-16 flex flex-col justify-start items-start gap-1">
          <label className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
            Email
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              className="w-[312px] h-10 px-4 py-2 bg-white rounded-lg border-2 border-black block"
              placeholder="your@email.com"
            />
          </label>
        </div>
        <div className="self-stretch h-16 flex flex-col justify-start items-start gap-1">
          <label className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
            Password
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="w-[312px] h-10 px-4 py-2 bg-white rounded-lg border-2 border-black block"
              placeholder="Your password"
            />
          </label>
        </div>

        {loading ? (
          <RingLoader color="#36d7b7" />
        ) : (
          <button
            type="submit"
            className="self-stretch px-4 py-2 bg-black rounded-lg flex justify-center items-center gap-1"
          >
            <span className="text-center text-base text-white font-medium font-['Inter'] leading-normal">
              Sign Up
            </span>
          </button>
        )}

        <Link to="/">
          <div className="flex justify-center items-start gap-2">
            <span className="text-center text-black text-sm font-normal font-['Inter'] leading-tight">
              Already have an account?
            </span>
            <span className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
              Log in
            </span>
          </div>
        </Link>
      </div>
    </form>
  );
};
