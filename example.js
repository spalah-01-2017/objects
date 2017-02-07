function createJavascriptStudent(name, surname, phoneNumber) {
    return {
        name: name,
        surname: surname,
        'programming language': 'JavaScript',
        phone: phoneNumber
    };
}

function fetchPhones(arr) {
    var phones = [];
    for(var i = 0; i < arr.length; i += 1) {
        // var currentObj = arr[i];
        // var currentPhone = currentObj.phone;
        // phones.push(currentPhone);
        phones.push(arr[i].phone);
    }
    return phones;
}

///////////////////////



function foo() {
    console.log(this.bar);
}

var bar = 'bar1';
var o2 = {
    bar: 'bar2',
    'foo': foo
};
var o3 = { bar: 'bar3', 'foo': foo };

foo(); //'bar1'
o2.foo(); //'bar2'
o3.foo(); //'bar3'

////////////////////////////

var o1 = {
    bar: 'bar1',
    foo: function() {
        console.log(this.bar);
    }
};

var o2 = { bar: 'bar2', foo: o1.foo };

var bar = 'bar3';
var foo = o1.foo;

o1.foo(); //'bar1'
o2.foo(); //'bar2'
foo(); //'bar3'
window.foo() === foo(); //true

///////////////////

function foo() {
    var bar = 'bar1';
    var o = {
        baz: baz,
        bar: 'Hello'
    };
    o.baz();
}
function baz() {
    console.log(this.bar);
}

var bar = 'bar2';
foo(); // ??

////////////////

var human = {
    speak: function(name) {
        console.log('My name is ', name);
    }
};
human.speak('Taras');
human.speak('John');


function Human(name) {
    return {
        speak: function() {
            return ('Hello, my name is ' + this.name);
        },
        name: name
    };
}
