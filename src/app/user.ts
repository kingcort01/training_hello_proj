export class User {
    name : string;
    age : number;
    weight : number;
    height : number;
    password : string;

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name;
        this.age = age;
        this.password = password;
        this.height = height;
        this.weight = weight;
    }

    isOld() : boolean{
        if(this.age >= 100)
            return true;
        else
            return false;
    }
    getBMI():number{ // 
        //BMI = weight / height * 2
        var converted_height = this.height / 100;
        // var bmi = this.weight / (converted_height * 2);
        // var bmi = this.weight /(this.height * this.height);
        return this.weight /(converted_height * converted_height);
    }
    isHealthy():boolean{
        //range of bmi 18.5 => 24.9 ==> healthy
        if(this.getBMI() >= 18.5 && this.getBMI() <= 24.9)
            return true;
        return false;
    }
}
