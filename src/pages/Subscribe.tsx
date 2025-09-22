import Logo from "/Logo.svg";

export function Subscribe() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: "url('/src/assets/blur.png')" }}
    >
      <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-1.5">
            <img src={Logo} alt="logo of events platform" />
            <h1 className="text-gray-400">| Python Advanced</h1>
          </div>
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Learn the main technologies of today
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master one of the most innovative
            technologies on the market, learn how to automate processes and
            stand out from the rest
          </p>
        </div>
        <div></div>
      </div>
      <img src="/src/assets/mockup.png" className="mt-10" alt="" />
    </div>
  );
}
