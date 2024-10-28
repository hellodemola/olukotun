class ConvertNumber{
    amount: number;

    constructor (amount: number){
        this.amount = amount;
    }

    get convertToCurrency (): string {
        if (!this.amount) return 'N/A';
        return this.amount.toLocaleString();
    }
}

export default ConvertNumber;