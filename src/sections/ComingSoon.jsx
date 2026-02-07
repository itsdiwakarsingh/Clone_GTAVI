const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />
        <div className="gradient-title text-wrapper ">
          <h3 className="text-5xl md:text-7xl">
            Comming <br /> November 19 <br /> 2026
          </h3>
        </div>
        <div className="flex-center gap-10">
          <img
            src="/images/ps-logo.svg"
            className="md:w-32 w-20"
            alt="PS-logo"
          />
          <img
            src="/images/x-logo.svg"
            className="md:w-52 w-40"
            alt="xbox-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
