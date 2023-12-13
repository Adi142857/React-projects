import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", path: "/", current: false },
  { name: "About", path: "/about", current: false },
  { name: "Contact", path: "/contact", current: false },
  { name: "Grocery", path: "/grocery", current: false },
  { name: "Cart", path: "/cart", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [loginbtn, setloginbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <Disclosure as="nav" className="bg-blue-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-[30px] w-auto"
                    src={LOGO_URL}
                    alt="Swiggy"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600 ml-[20px]"
                      onClick={() =>
                        loginbtn === "Login"
                          ? setloginbtn("Logout")
                          : setloginbtn("Login")
                      }
                    >
                      {loginbtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => close()}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              className="ml-[14px] mb-[5px] rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600"
              onClick={() =>
                loginbtn === "Login"
                  ? setloginbtn("Logout")
                  : setloginbtn("Login")
              }
            >
              {loginbtn}
            </button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
