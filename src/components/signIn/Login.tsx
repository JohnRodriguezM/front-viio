export const SignIn = (): JSX.Element => {
  return (
    <div className="w-[360px] h-[800px] px-6 bg-white flex-col justify-center items-center gap-6 inline-flex">
      <div className="w-[360px] h-14 p-4 flex-col justify-start items-start flex">
        <div className="w-6 h-6 relative" />
        <div className="text-center text-black text-base font-semibold font-['Inter'] leading-normal">
          Log In
        </div>
      </div>
      <div className="text-center text-black text-2xl font-bold font-['Inter'] leading-loose">
        MAYNOOTH
      </div>
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
          Email
        </div>
        <div className="w-[312px] h-10 px-4 py-2 bg-white rounded-lg border-2 border-black justify-center items-center inline-flex">
          <div className="w-[280px] h-6 text-black text-opacity-60 text-base font-normal font-['Inter'] leading-normal">
            your@email.com
          </div>
        </div>
      </div>
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
          Password
        </div>
        <div className="w-[312px] h-10 px-4 py-2 bg-white rounded-lg border-2 border-black justify-center items-center inline-flex">
          <div className="w-[280px] h-6 text-black text-opacity-60 text-base font-normal font-['Inter'] leading-normal">
            Your password
          </div>
        </div>
      </div>
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-6 h-6 relative bg-white rounded border-2 border-black" />
          <div className="text-black text-sm font-normal font-['Inter'] leading-tight">
            Remember me
          </div>
        </div>
        <div className="text-center text-black text-sm font-normal font-['Inter'] leading-tight">
          Forgot password?
        </div>
      </div>
      <div className="self-stretch px-4 py-2 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
          Log in
        </div>
      </div>
      <div className="text-center text-black text-xs font-semibold font-['Inter'] uppercase leading-none tracking-wide">
        OR
      </div>
      <div className="self-stretch px-4 py-2 bg-white rounded-lg border-2 border-black justify-center items-center gap-2 inline-flex">
        <div className="text-center text-black text-base font-medium font-['Inter'] leading-normal">
          Continue with Google
        </div>
      </div>
      <div className="self-stretch px-4 py-2 bg-white rounded-lg border-2 border-black justify-center items-center gap-2 inline-flex">
        <div className="text-center text-black text-base font-medium font-['Inter'] leading-normal">
          Continue with Facebook
        </div>
      </div>
      <div className="justify-center items-start gap-2 inline-flex">
        <div className="text-center text-black text-sm font-normal font-['Inter'] leading-tight">
          Don’t have an account?
        </div>
        <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-tight">
          Sign up
        </div>
      </div>
    </div>
  );
};
