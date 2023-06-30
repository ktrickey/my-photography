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

const galleries = [];


module.exports =async function(){

    if (galleries.size > 0)
    {
        return galleries;
    }
    const allPhotos = await getFileList('src/images/galleries');
    let count = 0;
    for (const x of allPhotos) {


        const photo = await exiftool.read(x);


        const galleryInfo = photo.Subject.find(p => p.startsWith('website|')).substring(8).split('|');


        let gallery = galleries.find(g=> g.galleryName === galleryInfo[0])
        if (!gallery) {
            console.log(`adding gallery ${galleryInfo[0]}`)
            gallery = {galleryName: galleryInfo[0], photos: []};
            galleries.push(gallery);
        }

        const photoRec = {tag: galleryInfo[1].toLowerCase().replace(/ /g, '-'), title: photo.Title, description: photo.Description, link: x.replace('src/', '')};
        gallery.photos.push(photoRec);

        console.log(photoRec)
        console.log(++count)
    }



    return galleries;
}
