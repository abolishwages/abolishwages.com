// react imports
import React from 'react'
import ReactDOMServer from 'react-dom/server'

// function to inject content into an html shell
export default function transformIndex(index, title, metaProperties, styles, Component, script) {

    // generate react markup
    const content = ReactDOMServer.renderToString(<Component/>)

    // alter and return the markup
    const markup = index
        .replace(
            '<title></title>',
            `<title>${title}</title>`
        )
        .replace(
            '<meta property="og:url"/>',
            `<meta property="og:url" content="${metaProperties.url}"/>`
        )
        .replace(
            '<meta property="og:title"/>',
            `<meta property="og:title" content="${metaProperties.title}"/>`
        )
        .replace(
            '<link rel="stylesheet"/>',
            `<link rel="stylesheet" href="${styles}"/>`
        )
        .replace(
            '<div id="root"></div>',
            `<div id="root">${content}</div>`
        )
        .replace(
            '<script></script>',
            `<script src="${script}"></script>`
        )
    return markup
}