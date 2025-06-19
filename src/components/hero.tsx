export const Hero = () => {
  return (
    <div className="grid place-items-center grid-rows-[1ft_auto_1fr] lg:px-32 lg:py-20 rounded-3xl bg-transparent backdrop-blur-md">
      <div />
      <h1 className="text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm <span className="text-john">John</span>
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl">I build software (at <a href="https://ap-3.tech">AP-3</a>)</h2>
    </div>
  );
};
