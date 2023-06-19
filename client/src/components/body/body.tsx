import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <div
      className="h-screen w-screen bg-cover z-10"
      style={{
        backgroundImage: "url(/src/assets/clay-banks-w_qTfiPbjbg-unsplash.jpg)",
      }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-[35vh] w-[30vw] border">
          <p className="text-xl text-white font-serif mt-5 p-3 text-center font-semibold">
            Get the Best Fitness Routine and Diet plan for all your health goals
          </p>
          <div className="flex w-full justify-center mt-5">
            <NavLink
              to="signin"
              className="p-1.5 bg-[#75dc14] font-semibold text-white rounded-md m-3"
            >
              Sign in
            </NavLink>
            <NavLink
              to="login"
              className="p-1.5 bg-[#ff1f0f] font-semibold text-white rounded-md m-3"
            >
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
