class Student{
    private _name;
    private _value;
    constructor(name:string , value:number){
        this._name = name;
        this._value = value;
    }
    get name():string{
        return this.name;
    }
    get value():number{
        return this.value;
    }
    print():void{
        console.log(`My name is John `);
        console.log(12);
    }
}