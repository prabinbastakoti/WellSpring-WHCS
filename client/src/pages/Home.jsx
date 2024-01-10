import DateTime from "../Components/Date";
import background from "../assets/19836.jpg";
import logo from "../assets/WellSpring.svg";

export default function Home() {
  return (
    <div className="h-screen flex bg-[#FAFAFA] relative px-20">
      <DateTime />
      <p className="absolute bottom-8 left-20 text-xs text-gray-400 font-serif lowercase">
        <a href="https://www.freepik.com/free-vector/medics-working-charts_4950249.htm#query=hospital%20management&position=0&from_view=keyword&track=ais&uuid=1eb5c821-c821-4428-8f49-83c3147d77d0">
          * Image by katemangostar
        </a>{" "}
        on Freepik
      </p>
      <div className=" w-1/2 flex justify-center">
        <img src={background} className="w-full object-cover" />
      </div>

      <div className="flex-1 my-auto pl-20">
        <img src={logo} className="mb-10 h-52 mx-auto" />
        <form className="flex flex-col items-center gap-6">
          <div class="relative w-1/2">
            <input
              type="text"
              id="username"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="username"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Username
            </label>
          </div>
          <div class="relative w-1/2">
            <input
              type="password"
              id="password"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Password
            </label>
          </div>

          <button className="bg-blue-500 my-3 py-2 px-8 rounded-md outline-none border-none text-white text-base text-center hover:brightness-105">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
