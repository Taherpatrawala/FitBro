import axios from "axios";
import { useEffect, useState } from "react";
import Plan from "./PlansCard";

const ArticalPlans = () => {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  async function fetchPlans() {
    const stripeData = await axios.get("http://localhost:8080/subs/prices");
    setPlans(stripeData?.data.data);
  }

  console.log(plans);

  return (
    <div>
      <h1>Artical Plans</h1>
      <div className="flex flex-row-reverse">
        {plans.map((plan) => {
          return (
            <div key={plan.id}>
              <Plan plan={plan} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticalPlans;
