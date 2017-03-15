/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */
'use strict'

const cheerio = require('cheerio')
const slugify = require('transliteration').slugify
const hljs = require('highlight.js')
const markdown = require('markdown-it')({ 
  html: true, 
  breaks: true,
  highlight: function (str, lang) {
    if (!(lang && hljs.getLanguage(lang))) {
      return ''
    }

    try {
      return hljs.highlight(lang, str, true).value.replace(/({{|}})/g, '<span>$1</span>')
    } catch (err) {}
  }
})

function strip(str, tags) {
  if (!tags || tags.length === 0) {
    return str
  }

  const $ = cheerio.load(str, {
    decodeEntities: false
  })  

  tags = !Array.isArray(tags) ? [tags] : tags

  tags.forEach((tag) => {
    $(tags).remove()
  })

  return $.html()
}

function fetch(str, tag) {
  if (!tag) {
    return str
  }

  const $ = cheerio.load(str, {
    decodeEntities: false
  })

  return $(tag).html()
}

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

markdown.use(require('markdown-it-anchor'), {
  level: 1,
  slugify: slugify,
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '#'
}).use(require('markdown-it-container'), 'demo', {
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/)
  },
  render(tokens, idx) {
    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    if (tokens[idx].nesting === 1) {
      const summary = (m && m.length > 1) ? m[1].split('|') : []
      const token = tokens[idx + 1]
      const content = tokens[idx + 1].content
      const html = convert(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
      const script = fetch(content, 'script')
      const style = fetch(content, 'style')
      const code = token.markup + token.info + '\n' + content + token.markup
      const codeHtml = code ? markdown.render(code) : ''

      summary.length = 2
      const subtitleHTML = summary[0] || '无标题示例'
      const descriptionHTML = summary[1] ? markdown.render(summary[1]) : '无描述信息'

      let jsfiddle = { html: html, script: script, style: style }
      jsfiddle = markdown.utils.escapeHtml(JSON.stringify(jsfiddle))

      return `<demo-section :jsfiddle="${jsfiddle}" title="${subtitleHTML}">
              <p class="demo" slot="demo">${html}</p>
              <p class="highlight" slot="code">${codeHtml}</p>
              <div class="description" slot="description">${descriptionHTML}</div>`
    }

    return '</demo-section>\n'
  }
})

exports = module.exports = markdown
