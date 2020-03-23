# rehype-layout

**rehype-layout** is a [**rehype**][rehype] plugin to wrap HTML content in a
layout template.

A layout template is an HTML fragment that wraps the content. It might contain
headers and footers, for example, or any other surrounding markup that you want
to repeat on every page.

**rehype-layout** inserts the content into a designated container element in the
layout. By default, the container element is an element with id `body`, like
`<div id="body">`.

You can designate any container element you want by providing a selector string
in the options. For example, you can use the selector `.content` to select an
element with class `content` as the contianer. The default selector string is
`#body`.

Your layout can build a full HTML page with `<html>`, `<head>` and `<body>`
elements, but if that's your goal, consider also using the
[**rehype-document**][rehype-document] plugin which is a configurable and
flexible solution, and it even generates the `<!doctype>` for you.

You can use **rehype-layout** to wrap your content in a layout and then use
**rehype-document** to wrap the result into a full HTML document.

By attaching the **rehype-layout** plugin multiple times in a row, you can nest
your content within multiple layouts.

The layout must be provided in the form of a [**HAST**][hast] tree. HAST trees
can be created by parsing HTML content with [**rehype-parse**] or by using
[**hastscript**][hastscript].

## Installation

The module is experimental and isn't published on NPM yet, but can be installed
directly from the GitHub repository.

```sh
npm install marekweb/rehype-layout
```

```js
const rehypeLayout = require("rehype-layout");
```

## Example Usage

TODO

## API

### `rehype().use(rehypeLayout[, options])`

##### `options`

###### `options.layout`

Value to insert. Possible values:

- a [**HAST**][hast] node
- an array of [**HAST**][hast] nodes
- a string (will be converted to a text node)

###### `options.container` (default: `#body`)

Selector string that designates the container element in the layout template.
The content will be inserted into the container element. Supports any selector
string that can be used by [**hast-util-select**][hast-util-select]

##### `options.action` (default: `'replace'`)

How to insert the content into the container element.

## License

MIT © Marek Zaluski

[rehype]: https://github.com/rehypejs/rehype
[rehype-parse]:
  https://github.com/rehypejs/rehype/tree/master/packages/rehype-parse
[hast-util-select]: https://github.com/syntax-tree/hast-util-select
[hast]: https://github.com/syntax-tree/hast
[hastscript]: https://github.com/syntax-tree/hastscript
