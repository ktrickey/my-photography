---
pagination:
    data: categories
    size: 1
    alias: category
    addAllPagesToCollections: true
permalink: "galleries/{{ pagination.items[0] | slug }}/"
layout: 'layouts/gallery.njk'
eleventyComputed:
  eleventyNavigation:
    key: "{{ pagination.items[0] | log }}"
    parent: Gallery
---
