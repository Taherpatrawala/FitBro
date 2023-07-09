import axios from "axios";

const Plan = ({ plan }: any) => {
  const createSession = async (priceId: string) => {
    const sessionData = await axios.post("http://localhost:8080/subs/session", {
      priceId,
    });
    console.log(sessionData);
    window.location.href = `${sessionData?.data.url}`;
  };

  return (
    <div className={`w-[30vw] h-[40vh] bg-[#524f4f] m-1 rounded-2xl`}>
      <div className="flex flex-col justify-center items-center text-white">
        <p className="bg-[#bd2727] rounded-md text-xl px-4">{plan.nickname}</p>
        <div
          className="flex justify-center tra items-center border-4 border-white
         rounded-full h-[8rem] w-[8rem] m-3"
        >
          <p className="">
            {plan.unit_amount / 100}₹/{plan.recurring.interval}
          </p>
        </div>

        <button
          onClick={() => createSession(plan.id)}
          className="text-white bg-[#639952] p-2 rounded-md"
        >
          Buy
        </button>
      </div>
    </div>
  );
};
export default Plan;
