//ES5/ES6

// let a  = 0;
// const b = 10;

// console.log(a);
// var c = 5;
// console.log(c);

// i = 'Hello';
// console.log(i);

// string expression ``

const first_name ="Anna";
const last_Name = "Borisova";

// console.log(first_name + ' ' + last_Name);
// console.log(`${first_name} ${last_Name}`);

const getFullName = (user) => {
    // return `first Name: ${user.first_name}\nlast Name: ${user.last_name}`
    return "First Name:" + user.first_name + "\n" + "Last Name:" + user.last_name;
}
const user = {
    first_name: "Anna",
    last_name: "Borisova"
}
// getFullName(user);
// console.log(getFullName(user));

// spread operator

// const mass = [1,2,3,4,5];
// const mass2 = [];

// const obj = {
//     username: "Anna",
//     age: 18,
//     last_name: "Borisova",
//     full_name: "Anna Borisova"
// }
// const mass2 = [{...obj}]
// console.log(mass2);

// const  newObj={
//         ...obj,
//     key: "value",
//     key2: "value2",
//     // ...obj
// }

// console.log(newObj);


const props = {
    onSubmit: () => {
        console.log('Submited');
    },
    data: [
        {
            key: "value",
        },
        {
            key: "value",
        },
        {
            key: "value",
        }
    ]
}

const { data, onSubmit } = props
console.log(data);
// onSubmit()

props.onSubmit()
props.data









// for(let i = 0; i < mass.length; i++) {
//     mass2.push(mass[i])
// }
// console.log(mass2);







