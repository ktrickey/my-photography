---
pagination:
    data: categories
    size: 1
    alias: category
    addAllPagesToCollections: true
permalink: "galleries/{{ category.title | slug }}/"

layout: 'layouts/gallery.njk'
eleventyComputed:
  category: {{ category}}
  eleventyNavigation:
    key: "{{ category.title  }}"
    parent: Gallery
---
