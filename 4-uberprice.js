class uberfare{
    constructor(basefare,costperminute,timeinride,costperkm,ridedistance,bookingfee){
        this.basefare=basefare;
        this.costperminute=costperminute;
        this.timeinride=timeinride;
        this.costperkm=costperkm;
        this.ridedistance=ridedistance;
        this.bookingfee=bookingfee;
        let value=++basefare+(costperminute*timeinride)+(costperkm*ridedistance)+bookingfee;
        console.log("the uber fee is"+this.value)
    }
}
let obj=new uberfare(100,10,10,10,10,25);