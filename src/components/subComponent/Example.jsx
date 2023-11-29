import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { VscChromeClose } from "react-icons/vsc";

export default function Example() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6  text-green">
        <span>Solutions</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 ">
          <div className=" w-screen max-w-md flex-auto overflow-hidden rounded-3xl border border-green bg-dark text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <Popover.Button className=" flex justify-end">
                <VscChromeClose className=" cursor-pointer stroke-red-600 stroke-0 text-4xl text-green transition-all duration-300 hover:text-red-500" />
              </Popover.Button>

              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight  ">
                  update your course
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium capitalize leading-6 "
                    >
                      title
                    </label>
                    <div className="mt-2">
                      <input
                        //   value={getEmail}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-dark  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                        //   onChange={(e) => setGetEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium capitalize leading-6 "
                      >
                        description
                      </label>
                    </div>
                    <div className="mt-2">
                      <textarea
                        // value={description} // Uncomment this line if you want a controlled component
                        //   defaultValue={description} // Use defaultValue if you want an uncontrolled component
                        required
                        name="description"
                        id="description"
                        rows="4"
                        cols="50"
                        placeholder="Type your message here..."
                        className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                        //   onChange={handleChange} // Use this if you want a controlled component
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold capitalize leading-6 text-white shadow-sm ring-offset-4 hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                    >
                      update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
