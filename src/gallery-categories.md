---
pagination:
    data: photos
    size: 1
    alias: photos
    addAllPagesToCollections: true
permalink: "galleries/{{ photos.galleryName | slug }}/"

layout: 'layouts/gallery.njk'
eleventyComputed:
  category: {{ photos }}
  eleventyNavigation:
    key: "{{ photos.galleryName  }}"
    parent: Gallery
---
