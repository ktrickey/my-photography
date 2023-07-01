﻿// We're using the singleton here for convenience:
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
            console.log(`adding gallery ${galleryInfo[0]}`)
            gallery = {galleryName: galleryInfo[0], photos: []};
            galleries.push(gallery);
        }

        const photoRec = {
            tag: galleryInfo[1].toLowerCase().replace(/ /g, '-'),
            title: photo.Title ?? '',
            description: photo.Description,
            link: photo.SourceFile.replace('src/', '')
        };
        gallery.photos.push(photoRec);


    }

    console.log('********************')
    console.log(JSON.stringify(galleries));

    await writeFile('src/_data/ddd.json', JSON.stringify(galleries));

    return galleries;
}
