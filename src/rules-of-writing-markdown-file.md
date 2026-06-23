
## 1. Headings

Put `#` at the beginning of a line.

```md
# Heading 1
## Heading 2
### Heading 3
```

Usually there is a space after the `#`.

Good:

```md
# Heading
```

Not recommended:

```md
#Heading
```

---

## 2. Paragraphs

Separate paragraphs with a blank line.

```md
This is paragraph one.

This is paragraph two.
```

---

## 3. Line Breaks

A single Enter is often ignored:

```md
Line one
Line two
```

To force a line break, either:

```md
Line one  
Line two
```

(two spaces at the end of the first line)

or:

```md
Line one<br>
Line two
```

---

## 4. Emphasis

Italic:

```md
*text*
```

or

```md
_text_
```

Bold:

```md
**text**
```

or

```md
__text__
```

Bold + italic:

```md
***text***
```

---

## 5. Lists

Unordered list:

```md
- Item 1
- Item 2
- Item 3
```

or

```md
* Item 1
* Item 2
```

Ordered list:

```md
1. First
2. Second
3. Third
```

---

## 6. Links

```md
[Google](https://google.com)
```

Format:

```md
[text](url)
```

---

## 7. Images

```md
![Description](image.png)
```

Format:

```md
![alt text](image-url)
```

The `!` distinguishes an image from a normal link.

---

## 8. Inline Code

Use a single backtick:

```md
Use `querySelector()`.
```

Result:

Use `querySelector()`.

---

## 9. Code Blocks

Use three backticks:

````md
```js
console.log("Hello");
```
````

The language (`js`) is optional but enables syntax highlighting.

---

## 10. Blockquotes

Use `>`:

```md
> This is a quote.
```

Result:

> This is a quote.

---

## 11. Horizontal Rules

Use three or more dashes:

```md
---
```

or

```md
***
```

---

## 12. Tables

```md
| Name | Age |
|------|-----|
| Tom  | 20  |
| Bob  | 25  |
```

Result:

| Name | Age |
| ---- | --- |
| Tom  | 20  |
| Bob  | 25  |

---

## The 90% Rule

For most Markdown files (especially `README.md` files on GitHub), you'll use only these:

````md
# Heading

Some text.

## Subheading

- List item
- List item

[Link](https://example.com)

`inline code`

```js
code block
````

```

If you know headings, paragraphs, lists, links, and code blocks, you can read and write about 90% of Markdown files you'll encounter.
```
