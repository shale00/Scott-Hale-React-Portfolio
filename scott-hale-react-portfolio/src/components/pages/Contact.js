import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  }, [] );

  const [state, handleSubmit] = useForm("mjvqglra");
  if (state.succeeded) {
    return (
      <div className="md:h-1/2 p-5">
        <p className="text-center text-3xl italic">Message received, Thankyou!</p>
      </div>
    );
  }

  return (
    // <div className="p-4 grid gap-2">
    //   <p id="tween">
    //     You can reach me via email at:
    //     <a className="font-bold" href="mailto:sth0067@gmail.com">
    //       {" "}
    //       sth0067@gmail.com
    //     </a>
    //     .
    //   </p>
    //   <p id="tween">Also check out my links below!</p>
    // </div>

    <div 
      className="p-8 flex gap-2 justify-center"
      id="tween"
    >
      <form
        className="w-full max-w-lg border-2 rounded-md bg-gray-700 border-blue-700 p-2 shadow-black shadow-lg"
        onSubmit={handleSubmit}
        id="fs-frm"
      >
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sm text-gray-300 text-s font-bold m-2"
              htmlFor="email"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-500 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
              id="grid-full-name"
              type="text"
              name="name"
              placeholder="First and Last"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label
              className="block uppercase tracking-wide text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-500 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
              id="grid-email"
              type="email"
              name="email"
              placeholder="Your@Email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              className="block uppercase tracking-wide text-sm text-gray-300 text-s font-bold mb-2"
              htmlFor="email"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-500 text-gray-700 border border-blue-400 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="border-2 border-blue-800 px-2 py-1 rounded-md bg-gray-500 hover:bg-blue-700 hover:text-gray-300 shadow-black shadow-lg hover:border-gray-950 hover:shadow-gray-300 hover:shadow-sm"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
