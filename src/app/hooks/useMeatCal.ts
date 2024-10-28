import { useState } from "react";

const useMeatCal = () => {
    const totalSlots = 24;
    const currentSlots = 12;
    const totalAmount = 1200000;
    const max = totalSlots - currentSlots
    const [range, setRange] = useState<number>(1);
    const [amount, setAmount] = useState<number>(totalAmount/totalSlots * range);

    const handleRange = (e: string) => {
        const convertToNumber = Number(e)
        const calAmount = totalAmount/totalSlots * convertToNumber;
        setRange(convertToNumber);
        setAmount(calAmount);
    }   
    return {
        metrics: {range, max, amount, totalAmount},
        handleRange
    }
}

export default useMeatCal