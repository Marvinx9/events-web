import Logo from "/Logo.svg";

export function Subscribe() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: "url('/src/assets/blur.png')" }}
    >
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-1.5">
            <img src={Logo} alt="logo of events platform" />
            <h1 className="text-gray-400">| Python Advanced</h1>
          </div>
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Learn the
            <strong className="text-blue-500"> main technologies</strong> of
            today learn<strong className="text-blue-500"> Python</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master one of the most innovative
            technologies on the market, learn how to automate processes and
            stand out from the rest
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Subscribe free</strong>
          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Your full name"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
              type="submit"
            >
              Secure my Place
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/mockup.png" className="mt-10" alt="" />
    </div>
  );
}
