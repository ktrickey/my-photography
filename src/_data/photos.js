// We're using the singleton here for convenience:
const exiftool = require("exiftool-vendored").exiftool;

const {readFile} = require('fs').promises;

const {writeFile} = require('fs').promises;
const galleries = [];


module.exports = async function () {

    if (galleries.size > 0) {
        return galleries;
    }
    const photoExif =await readFile('src/_data/exif-data.json');
    const allPhotos = JSON.parse(photoExif);


    for (const photo of allPhotos) {

        const galleryInfo = photo.Subject
            .find(p => p.startsWith('website|'))?.substring(8)?.split('|');


        let gallery = galleries.find(g => g.galleryName === galleryInfo[0])
        if (!gallery) {
            gallery = {galleryName: galleryInfo[0], photos: []};
            galleries.push(gallery);
        }

        const link = photo.SourceFile.replace('src/', '/');
        const photoRec = {
            tag: galleryInfo[1].toLowerCase().replace(/ /g, '-'),
            tagTitle: galleryInfo[1],
            title: photo.Title ?? '',
            description: photo.Description,
            width: photo.ImageWidth,
            height: photo.ImageHeight,
            thumbWidth: 461,
            thumbHeight: photo.ImageHeight * (461 / photo.ImageWidth),
            link: link,
            thumbLink: `${link}?nf_resize=fit&h=461`,
            isGalleryHeaderBackground: photo.Subject.some(x=>x.endsWith("|cover")),

        };
        gallery.photos.push(photoRec);
    }

    return galleries;
}
