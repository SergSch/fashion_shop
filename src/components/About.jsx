function About() {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row sm:justify-start items-center px-5 bg-[url('src/img/about.jpg')] bg-no-repeat bg-cover">
      <div className=" w-full lg:w-2/4 p-6 space-y-8 rounded-2xl border-2 border-secondary">
        <h1 className=" text-4xl font-bold leading-snug">
          Redefining Fashion, One Trend at a Time
        </h1>
        <p>
          Explore our exclusive collections and embrace fashion that speaks to
          your personality. Whether you're into bold statements or minimal
          elegance, we have something for everyone.
        </p>
      </div>
    </div>
  );
}
export default About;
