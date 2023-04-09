const data = require('./structure.json')

module.exports = function () {
    // `reduce` takes in an accumulator (empty array in this case)
    // and then iterates through the array
    const galleries =  data.reduce((acc, folder) => {
        if (folder.galleries?.length > 0) {
            acc.push({title: folder.name, galleries: folder.galleries});
        }
        // return the accumulator for the next iteration
        return acc
    }, [])
return galleries;
}
