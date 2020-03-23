const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeStringify = require("rehype-stringify");
const rehypeLayout = require(".");

function parseHtml(input) {
  return unified().use(rehypeParse, { fragment: true }).parse(input);
}

function processDocument(input, options) {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeLayout, options)
    .use(rehypeStringify)
    .process(input);
}

test("wrap content with layout", async () => {
  const layoutHtml =
    `<header>` +
    `<h1 id="title"></h1>` +
    `</header>` +
    `<article>` +
    `<div id="body"></div>` +
    `</article>`;
  const layout = parseHtml(layoutHtml);
  const input = `<p>Hello, world.</p>` + `<p>Welcome to my world.</p>`;
  const options = {
    selector: "#body",
    layout: layout,
  };
  const expected =
    `<header>` +
    `<h1 id="title"></h1>` +
    `</header>` +
    `<article>` +
    `<div id="body">` +
    `<p>Hello, world.</p>` +
    `<p>Welcome to my world.</p>` +
    `</div>` +
    `</article>`;

  const output = await processDocument(input, options);
  expect(output.contents).toBe(expected);
});
