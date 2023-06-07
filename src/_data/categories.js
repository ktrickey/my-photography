// const data = require('./structure.json')
//
// module.exports = function () {
//     // `reduce` takes in an accumulator (empty array in this case)
//     // and then iterates through the array
//     const galleries =  data.reduce((acc, folder) => {
//         if (folder.galleries?.length > 0) {
//             acc.push({title: folder.name, galleries: folder.galleries});
//         }
//         // return the accumulator for the next iteration
//         return acc
//     }, [])
// return galleries;
// }

const exif = require('./photo-exif');

module.exports = async function () {
    // `reduce` takes in an accumulator (empty array in this case)
    // and then iterates through the array
    const result = await exif();

    const categories =  Array.from(result.keys()).reduce((acc, photoKey) => {


        const category = photoKey.substring(0,photoKey.indexOf('|'));


        if (acc.some(cat => cat.title === category) )
        {


            acc.push({title: category, galleries:[]});
        }
        // return the accumulator for the next iteration
        return acc
    }, [])

    return categories;
}
