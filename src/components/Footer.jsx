function Footer() {
  return (
    <div className=" mt-8 md:mt-0">
      <div className=" flex flex-col md:flex-row justify-between p-8 lg:px-14 md:px-10 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">StyleSphere web</h1>
          <p className=" text-sm">
            Join our fashion community and be the first to know about new
            arrivals, exclusive deals, and styling tips. Let's redefine fashion
            together!
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Servises</h1>
          <nav className=" flex flex-col gap-2">
            <a href="/">Exclusive Collections</a>
            <a href="/">Custom Styling</a>
            <a href="/">Gift Cards</a>
            <a href="/">Fashion Tips</a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Company & Policies
          </h1>
          <nav className=" flex flex-col gap-2">
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Terms & Conditions</a>
          </nav>
        </div>
        <div className=" w-full md:w-1/4 ">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a href="/">
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </a>
            <a href="/">+123-456-7890</a>
            <a href="/">fashionSphere@.com</a>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by <span className=" text-secondary">Serg</span>{' '}
          | All rights reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
