const Plan = ({ plan }: any) => {
  return (
    <div className={`w-[30vw] h-[40vh] bg-blue-600 m-1 rounded-2xl`}>
      <div className="flex flex-col justify-center items-center text-white">
        <p>{plan.nickname}</p>
        <p>
          {plan.unit_amount / 100}₹ per {plan.recurring.interval}
        </p>
      </div>
    </div>
  );
};
export default Plan;
