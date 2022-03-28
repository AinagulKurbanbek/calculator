function myFunc(arr) {
    for (let elem of arr) {
        console.log(elem)
    }
}

myFunc([1, 2, [3, 4, 5],
    [6, 7], 8, [9, 10]
])