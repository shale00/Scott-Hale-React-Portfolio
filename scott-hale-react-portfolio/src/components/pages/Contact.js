import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: .25, stagger: 0.15 }
    );
  }, []);

  const [state, handleSubmit] = useForm("mjvqglra");
  if (state.succeeded) {
    return (
      <div className="md:h-1/2 p-5">
        <p className="text-center text-3xl italic">
          Message received, Thankyou!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto custom-border custom-border-none rounded-2xl">
      <div className="p-8 flex gap-2 justify-center" id="tween">
        <form
          className="w-full max-w-prose c-bord rounded-2xl bg-gray-700 p-2"
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
                className="appearance-none block w-full bg-gray-500 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
                id="grid-full-name"
                type="text"
                name="name"
                placeholder="First and Last"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label
                className="block uppercase tracking-wide text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-500 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
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
                className="appearance-none block w-full bg-gray-500 text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-400 shadow-black shadow-lg"
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="px-2 py-1 rounded-md shadow-black shadow-lg hover:scale-110 transition-all ease-in-out border border-gray-900 text-slate-900 hover:text-slate-950 bg-gray-500 font-extrabold submit"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
