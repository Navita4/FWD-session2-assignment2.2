var Student = (function () {
    function Student(name, value) {
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.print = function () {
        console.log("My name is John ");
        console.log(12);
    };
    return Student;
}());
