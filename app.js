document.body.style.backgroundColor = "#222222"
//Task-1
let getDuplicates = array => {
    if (!Array.isArray(array)) return "is not an array";
    let duplicates = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i != j && array[i] === array[j] && !duplicates.includes(array[j])) {
                duplicates.push(array[i]);
            }
        }
    }
    return duplicates;
}
let array = ["lalala", "nanana", "zzz", "lalala", "vvvv", "zzz", "ccc"];
console.log(getDuplicates(array));

//Task-2
let prepre = 0;
let pre = 1;
while (pre < 1000) {
    let current = prepre + pre;
    console.log(pre);
    prepre = pre;
    pre = current;
}