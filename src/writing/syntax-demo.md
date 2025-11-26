---
title: Syntax Highlighting Demo with PrismJS
date: 2023-01-02
---

This theme includes built-in syntax highlighting using PrismJS. Here are some examples of how code blocks look in different languages.

<!--more-->

## JavaScript

```javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
}

hello('Eleventy');
```

## CSS / SCSS

```scss
$primary-color: #ffc;

body {
  background-color: $primary-color;
  color: #333;

  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

## Rust

```rust
fn main() {
    println!("Hello, world!");
}
```

Code blocks are automatically styled with a dark theme to contrast with the light background of the site.
