const data = require('./structure.json')

module.exports = function () {
    // `reduce` takes in an accumulator (empty array in this case)
    // and then iterates through the array
    return data.reduce((acc, folder) => {
        // for every author, we look at every book
        folder.galleries.forEach((subGallery) => {
            // add the book to the new array, adding in the author's name
            acc.push({category: folder.name, gallery: subGallery.name})
        })
        // return the accumulator for the next iteration
        return acc
    }, [])


}
