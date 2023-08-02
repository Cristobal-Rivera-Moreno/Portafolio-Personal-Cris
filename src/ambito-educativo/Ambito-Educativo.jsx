export const AmbitoEducativo = () => {
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative p-6 w-full  
"
        datatime={"s"}
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="flex h-full  bg-blue-400/[0.25]">
            <div className="w-1/4 h-full bg-gray-800"></div>
            {/* Here Info */}
            <div className="w-2/4 h-full bg-blue-100/[0.05]">
              <h1 className="font-bold text-8xl">⚙</h1>
              <h2 className="font-mono">En desarrollo</h2>
            </div>

            <div className="w-1/4 grid grid-cols-6 grid-rows-6 h-full  bg-lime-100/[0.25]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
