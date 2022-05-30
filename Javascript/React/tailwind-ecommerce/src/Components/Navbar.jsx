import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-4 bg-slate-800 text-white">
      <div className="p-navbar-item">
        <a href="#">Logo</a>
          </div>
          <div className="block fixed top-0 left-0 bottom-0 h-full bg-slate-900 md:hidden transition-all w-[220px]">
              <ul>
                  <li>
                      <a href="#" className="p-navbar-mobile">
                          Collections
                      </a>
                  </li>
                  <li>
                      <a href="#" className="p-navbar-mobile">
                          Men
                      </a>
                  </li>
                  <li>
                      <a href="#" className="p-navbar-mobile">
                          Women
                      </a>
                  </li>
                  <li>
                      <a href="#" className="p-navbar-mobile">
                          About Us
                      </a>
                  </li>
                  <li>
                      <a href="#" className="p-navbar-mobile">
                          Contact Us
                      </a>
                  </li>
              </ul>
              <ul>
                  <li>
                      <a href="#" className="flex items-center p-navbar-mobile">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                          Cart
                      </a>
                  </li>
                  <li className="relative">
                      <a href="#" className="flex items-center p-navbar-item">
                          My Account
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 ml-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                          >
                              <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19 9l-7 7-7-7"
                              />
                          </svg>
                      </a>
                      <ul className="w-full py-3 bg-slate-800">
                          <li>
                              <a
                                  href="#"
                                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5 mr-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                  </svg>
                                  My Profile
                              </a>
                          </li>
                          <li>
                              <a
                                  href="#"
                                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5 mr-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                      />
                                  </svg>
                                  Watchlist
                              </a>
                          </li>
                          <li>
                              <a
                                  href="#"
                                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5 mr-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                      />
                                  </svg>
                                  Orders
                              </a>
                          </li>
                          <li>
                              <a
                                  href="#"
                                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5 mr-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                      />
                                  </svg>
                                  Logout
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="hidden">
                      <a href="#" className="flex items-center ml-4 p-navbar-item">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="mr-2 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                          >
                              <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                          </svg>
                          Login
                      </a>
                  </li>
                  <li className="hidden">
                      <a
                          href="#"
                          className="bg-emerald-500 rounded-md px-2 py-1 hover:bg-emerald-600 transition-colors "
                      >
                          Signup
                      </a>
                  </li>
              </ul>
          </div>
      <nav className="hidden md:block">
        <ul className="grid grid-flow-col list-none">
          <li>
            <a href="#" className="p-navbar-item">
              Collections
            </a>
          </li>
          <li>
            <a href="#" className="p-navbar-item">
              Men
            </a>
          </li>
          <li>
            <a href="#" className="p-navbar-item">
              Women
            </a>
          </li>
          <li>
            <a href="#" className="p-navbar-item">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="p-navbar-item">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:block">
        <ul className="grid grid-flow-col list-none items-center">
          <li>
            <a href="#" className="flex items-center p-navbar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Cart
            </a>
          </li>
          <li className="relative">
            <a href="#" className="flex items-center p-navbar-item">
              My Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <ul className="absolute w-36 r-0 py-3 bg-slate-800">
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Watchlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#" className="flex items-center ml-4 p-navbar-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="bg-emerald-500 rounded-md px-2 py-1 hover:bg-emerald-600 transition-colors "
            >
              Signup
            </a>
          </li>
        </ul>
      </nav>
      <button className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
}
