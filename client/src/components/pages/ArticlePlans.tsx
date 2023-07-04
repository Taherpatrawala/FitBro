import axios from "axios";
import { useEffect } from "react";
const ArticalPlans = () => {
  useEffect(() => {
    const stripeData = axios.get("http://localhost:8080/subs/prices");
    console.log(stripeData);
  }, []);

  return (
    <div>
      <h1>Artical Plans</h1>
    </div>
  );
};
export default ArticalPlans;
