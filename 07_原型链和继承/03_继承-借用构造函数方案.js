/**
 * 借用构造函数实现继承缺点：
 * 只能继承父类的实例属性和方法，不能继承父类原型上的属性和方法
 */

//父类
function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

//子类
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = sno;
}

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu1 = new Student("kebi", 18, ["xiaoming", "lining"], 100500);
var stu2 = new Student("james", 20, ["saigao"], 100600);
console.log(stu1);
console.log(stu2);
stu1.studying();
stu2.studying();
// stu1.eating();
