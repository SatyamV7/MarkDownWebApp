# MarkDown

## Introduction
This is a sample Markdown file demonstrating basic writing and formatting syntax.

## Headings
# A first-level Heading
## A second-level Heading
### A third-level Heading

***Syntax***:
```
# A first-level Heading
## A second-level Heading
### A third-level Heading
```

## Styling text
You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and .md files.
| Style                  | Syntax                              | Example                                           | Output                                 |
|------------------------|-------------------------------------|---------------------------------------------------|----------------------------------------|
| Bold                   | ** ** or __ __                      | ```**This is bold text**```                       | **This is bold text**                  |
| Italic                 | * * or _ _ &emsp;&emsp;&emsp;&emsp; | ```_This text is italicized_```                   | _This text is italicized_              |
| Strikethrough          | ~~ ~~                               | ```~~This was mistaken text~~ ```                 | ~~This was mistaken text~~             |
| Bold and nested italic | ** ** and _ _                       | ```**This text is _extremely_ important**```      | **This text is _extremely_ important** |
| All bold and italic    | *** ***                             | ```***All this text is important***```            | ***All this text is important***       |
| Subscript              | &lt;sub&gt; &lt;/sub&gt;            | This is a &lt;sub&gt;subscript&lt;/sub&gt; text   | This is a <sub>subscript</sub> text    |
| Superscript            | &lt;sup&gt; &lt;/sup&gt;            | This is a &lt;sup&gt;superscript&lt;/sup&gt; text | This is a <sup>superscript</sup> text  |

## Quoting text
You can quote text with a ```>```.
***Syntax***:
```> Text that is a quote```

Text that is not a quote

> Text that is a quote

## Lists
### Unordered List
- Item 1
- Item 2
  - Sub-item A
  - Sub-item B
    - Sub-sub-item I
- Item 3

***Syntax***:
```
- Item 1
- Item 2
  - Sub-item A
  - Sub-item B
    - Sub-sub-item I
- Item 3
```
### Ordered List
1. First item
2. Second item
   1. Sub-item A
   2. Sub-item B
3. Third item

***Syntax***:
```
1. First item
2. Second item
   1. Sub-item A
   2. Sub-item B
3. Third item
```

## Links
You can create links like [this one](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) using the following ***syntax***:
```[Alt Text](URL)```

## Images
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
***Syntax***:
```![Alt Text](Image Source)```

## Code
Inline code can be highlighted like `this`.
***Syntax***: ```‎`this`‎```
For blocks of code, use triple backticks:
```python
def greet():
    print("Hello, world!")
```
***Syntax***:
```
```‎
def greet():
    print("Hello, world!")
‎```
```

## Task List
- [x] Task 1
- [ ] Task 2
- [ ] Task 3

***Syntax***:
```
- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

## Table
| Name  | Age | Gender |
|-------|-----|--------|
| John  | 25  | Male   |
| Alice | 30  | Female |

***Syntax***:
```
| Name  | Age | Gender |
|-------|-----|--------|
| John  | 25  | Male   |
| Alice | 30  | Female |
```

## Emojis
You can also use emojis! :smiley: :rocket: :tada:

***Syntax***: `:smiley: :rocket: :tada:`
