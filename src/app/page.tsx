'use client'
import useMeatCal from "./hooks/useMeatCal";
import ConvertNumber from "./utils/convertNumber.class";

export default function Home() {
  const {metrics, handleRange} = useMeatCal();
  const { amount, max, range, totalAmount } = metrics
  const number = new ConvertNumber(amount);
  const date = new Date();
  const handleBuy = () => {
    alert(amount)
    // paystack
  }
  
  return (
    <div className="grid grid-row-[repeat(1fr)] place-items-center place-content-center my-4">
    <div className="">
     <h1>Today Meat</h1>
     <i>Total Metrics ({totalAmount})</i>
     <p>{date.toLocaleDateString()}</p>
     <p> {max} Slots to go</p>
      
      <input onChange={(e) => handleRange(e.target.value)} type="range" min="1" max={max} defaultValue={1} className="slider" />
      <p>
      {range} Portion 
      </p>
      <p>
       N {number.convertToCurrency}
      </p>

      <h1>Share contains</h1>
      <p>
        1 Kg of Meat
      </p>
      <p>
        A PCS of all part of the cow
      </p>
    </div>
    <button onClick={handleBuy} className="p-2 bg-[green] text-white">Grab a slice</button>
    </div>
  );
}
