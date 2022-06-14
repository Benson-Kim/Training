/************************************************
            1. keys() 
************************************************/
const arrKeyFunc = () => {
    const array = ['Alice', 'Bob', , 'Charles', 'Alice', 'David']
    const keys = array.keys()
    for (const key of keys) {
        console.log(key);
    }
}
// arrKeyFunc()

/************************************************
            2. lastIndexOf() 
************************************************/
const lastIndexOfFunc = () => {

    const array = ['Alice', 'Bob', 'Bob', 'Charles', 'Bob', 'David'];
    const Searchelement = 'Bob';

    console.log(array.lastIndexOf(Searchelement, -1));
}
// lastIndexOfFunc()

/************************************************
            3. pop() 
************************************************/
const popFunc = () => {
    const array = ['Alice', 'Bob', 'Bob', 'Charles', 'Alice', 'David'];
    const popped = array.pop()
    console.log('The Array: ' + array +'\tElement removed: ' +popped);
}
popFunc()
