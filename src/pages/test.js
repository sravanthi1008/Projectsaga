const users = ['Kumar', 'Ramesh', 'John', 'Shukla', 'Abdul'];

const result = users.sort();
console.log(result);
const result = users.sort.reverse();
console.log(result);


const user = [{ name: 'Kumar' }, { name: 'Ramesh' }, { name: 'John' }, { name: 'Shukla' }, { name: 'Abdul' }];
//sort for asc
const sort_result = user.sort((a, b) => {
    const A = a.user.toUpperCase();
    const B = b.user.toUpperCase();

    if (A > B) {
        return 1;
    }
    if (A < B) {
        return -1;
    }
    return 0;
})
console.log(user);

//sort for desc
const sort_desc = user.sort((a, b) => {
    const A = a.user.toUpperCase();
    const B = b.user.toUpperCase();
    if (A < B) {
        return -1;
    }
    if (A > B) {
        return 1;
    }
    return 0;
})
console.log(user);


const user_filter = user.filter((item) => {
    return item.name.includes("k");

})
console.log(user_filter);


const user_find = user.find((item) => {
    return item.name.includes("k");

})
console.log(user_filter);


const user = [{ name: 'Kumar' }, { name: 'Ramesh' }, { name: 'John' }, { name: 'Shukla' }, { name: 'Abdul' }];
const Splice_result_add = user.splice(1, 0, { name: 'guna' })
console.log(user);

const user = [{ name: 'Kumar' }, { name: 'Ramesh' }, { name: 'John' }, { name: 'Shukla' }, { name: 'Abdul' }];
const Splice_result_remove_and_add = user.splice(2, 1, { name: 'guna' })
console.log(user);

const myFish = [{ name: 'Kumar' }, { name: 'Ramesh' }, { name: 'John' }, { name: 'Shukla' }, { name: 'Abdul' }];
const removed = myFish.splice(3, 1);
console.log(myFish)

