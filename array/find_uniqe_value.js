const arr = [1, 1, 2, 3, 4, 4, 5, 5]

function getUniqeValue(arr = []) {

    const uniqeObj = {}
    const uniqeArr = []

    for (let i = 0; arr.length > i; i++) {


        const currentValue = arr[i]

        if (!uniqeObj[currentValue]) {
            uniqeObj[currentValue] = true
            uniqeArr.push(currentValue)
        }
    }

    return uniqeArr
}

console.log(getUniqeValue(arr))