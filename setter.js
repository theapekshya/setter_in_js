// setname property

var person = {
    name : "Anu",
    age  : 20,
    set setname(n)
    {
      this.name = n.toUpperCase();

    }
};
person.setname = "Apu";
console.log(person);
