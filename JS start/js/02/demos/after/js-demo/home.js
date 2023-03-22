
let welcome = 'Welcome'

let person = {
    name : "Jhon",
    age : 32,
    partTime : false,
    showInfo:function(realAge){
        showMessage(this.name + '\tis\t' + realAge);
    }
};
showMessage(typeof person.showInfo);
let arr = Array.of(1,2,3);
console.log(arr[5]);
