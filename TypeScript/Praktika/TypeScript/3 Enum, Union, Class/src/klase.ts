export default class Klase1{
    public par1: number;
    private par2: string;
    readonly par3: boolean;
    constructor(par1: number, par2: string, par3: boolean){
        this.par1 = par1;
        this.par2 = par2;
        this.par3 = par3;
    }
    getPar2(): string{
        return this.par2;
    }
    setPar2(text: string): void{
        this.par2 = text;
    }
}