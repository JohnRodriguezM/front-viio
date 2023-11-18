import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/login/login.service";

export const SignIn = (): JSX.Element => {
  //* navigate de react router dom
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formLogin);

    login(formLogin).then(()=> {
      // eslint-disable-next-line no-console
      navigate("/home");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[360px] h-[800px] px-6 bg-white flex flex-col justify-center items-center gap-6">
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
        <button
          type="submit"
          className="self-stretch px-4 py-2 bg-black rounded-lg flex justify-center items-center gap-2"
        >
          <span className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
            Log in
          </span>
        </button>
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
