// const data = require('./structure.json')
//
// module.exports = function () {
//     // `reduce` takes in an accumulator (empty array in this case)
//     // and then iterates through the array
//     return data.reduce((acc, folder) => {
//         // for every author, we look at every book
//         folder.galleries.forEach((subGallery) => {
//             // add the book to the new array, adding in the author's name
//             acc.push({category: folder.name, gallery: subGallery.name})
//         })
//         // return the accumulator for the next iteration
//         return acc
//     }, [])
//
//
// }
const exif = require('./photo-exif');
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
const gallStruct = new Map();
function addSegment(previousSegment, nextSegment) {

}
module.exports = async function () {
    // `reduce` takes in an accumulator (empty array in this case)
    // and then iterates through the array
    const result = await exif();

    const  galleryPaths = Array.from(result.keys());



    galleryPaths.map(x=>{

        const pathSegs = x.split('|');

        const firstSegment = gallStruct.has(pathSegs[0])? gallStruct.get(pathSegs[0]): new Map();


    }})

//     const categories =  galleryPaths.reduce((acc, galleryPath) => {
//
//         const segments = galleryPath.split('|');
//
//
//
//         const category = photoKey.substring(0,photoKey.indexOf('|'));
//
//         console.log(category)
//         if (acc.every(cat => cat.title !== category) )
//         {
//
// console.log(category)
//             acc.push({name: category, galleries:[]});
//         }
//         // return the accumulator for the next iteration
//         return acc
//     }, [])
//
//     console.log(categories)
    return [];
}
