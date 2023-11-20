import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/login/login.service";
import { toast } from "sonner";
import { LoadingContext } from "../../context/LoadingContext";
import { RingLoader } from "react-spinners";

/**
 * Renders a sign-in form.
 * @returns The sign-in form component.
 */
export const SignIn = (): JSX.Element => {
  // ? navigate de react router dom
  const navigate = useNavigate();
  // ? context declaration
  const { loading, handleLoading } = useContext(LoadingContext);

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  /**
   * Handles input change event.
   * @param event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handles form submit event.
   * @param event - The form submit event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formLogin.email || !formLogin.password) {
      toast.error("Please fill all the fields");
      return;
    }

    login(formLogin, handleLoading)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
        navigate("/");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[360px] h-[800px] px-6 bg-white flex flex-col justify-center items-center gap-6 mt-32">
        <div className="w-[360px] h-14 p-4 flex flex-col justify-start items-start">
          <div className="w-6 h-6 relative" />
          <h1 className="text-center text-black text-base font-semibold font-['Inter'] leading-normal">
            Log In
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
              type="email"
              name="email"
              className="w-[312px] h-10 px-4 py-2 bg-white rounded-lg border-2 border-black block"
              placeholder="your@email.com"
            />
          </label>
        </div>
        <div className="self-stretch h-16 flex flex-col justify-start items-start gap-1">
          <label className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
            Password
            <input
              name="password"
              onChange={handleInputChange}
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
              Log in
            </span>
          </button>
        )}

        <span
          className="text-center text-black text-sm font-normal font-['Inter'] leading-tight"
          style={{ color: "#BDBDBD" }}
        >
          Or
        </span>
        <Link to="/signup">
          <div className="flex justify-center items-start gap-2">
            <span className="text-center text-black text-sm font-normal font-['Inter'] leading-tight">
              Don’t have an account?
            </span>

            <span className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
              Sign up
            </span>
          </div>
        </Link>
      </div>
    </form>
  );
};
