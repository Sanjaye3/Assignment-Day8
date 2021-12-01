class person {
    constructor(name,age,marital_status,designation,phone_number){
        this.name=name;
        this.age=age;
        this.marital_status=marital_status;
        this.designation=designation;
        this.phone_number=phone_number
        console.log("This is the person class to hold all the data of a individual!");
        console.log("My Name is "+this.name,"age is "+this.age,"designation is "+this.designation,"phonenumber is"+this.phone_number);
    }
}

let obj=new person("Arun","20","single","student",123456)