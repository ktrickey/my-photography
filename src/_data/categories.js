const data = require('./structure.json')

module.exports = function () {
    // `reduce` takes in an accumulator (empty array in this case)
    // and then iterates through the array
    const galls =  data.reduce((acc, folder) => {
        acc.push(folder.name);
        // return the accumulator for the next iteration
        return acc
    }, [])
console.log(galls);
return galls;
}
