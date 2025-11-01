function Contact() {
  return (
    <>
      <div
        id="contact"
        className="pb-5 bg-amber-100 h-fit w-fit rounded-2xl p-20 mx-auto mb-10 sm:w-100 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
      >
        <h1 className="text-4xl text-center font-bold">Contact Us</h1>
        <div className="flex justify-center mt-6">
          <form className="flex flex-col items-center space-y-4 w-full px-4 sm:px-6 md:px-0">
            <label className="text-2xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="rounded-xl border border-black h-10 w-full max-w-xs sm:max-w-sm md:max-w-md px-3 text-center"
            />
            <label className="text-2xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="rounded-xl border border-black h-10 w-full max-w-xs sm:max-w-sm md:max-w-md px-3 text-center"
            />
            <label className="text-2xl" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your Message"
              className="rounded-xl border border-black h-32 w-full max-w-xs sm:max-w-sm md:max-w-md text-center p-2"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
