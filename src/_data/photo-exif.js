// We're using the singleton here for convenience:
const exiftool = require("exiftool-vendored").exiftool;

const {readdir} = require('fs').promises;

const getFileList = async (dirName) => {
    let files = [];
    const items = await readdir(dirName, {withFileTypes: true});

    for (const item of items) {
        if (item.isDirectory()) {
            files = [
                ...files,
                ...(await getFileList(`${dirName}/${item.name}`)),
            ];
        } else {
            files.push(`${dirName}/${item.name}`);
        }
    }

    return files;
};

const structure = new Map();


module.exports =async function(){

    if (structure.size > 0)
    {
        return structure;
    }
    const allPhotos = await getFileList('src/images/galleries');
    for (const x of allPhotos) {

        const photo = await exiftool.read(x);
        const gallery = photo.Subject.find(p => p.startsWith('website|')).substring(8);

        if (!structure.has(gallery)) {
            structure.set(gallery, []);
        }
        structure.get(gallery).push({title: photo.Title, description: photo.Description, location: x});

    }
console.log(structure)

    return structure;
}
