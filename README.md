# Scrivito Eyecatcher
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An eyecatcher React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-eyecatcher/master/eyecatcher-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-eyecatcher
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-eyecatcher";
```

Also add the styling of the widget to your app. This can be done by either loading it via `css-loader` (e.g. in `index.js` or `Widgets/index.js`):

```
import "scrivito-eyecatcher/index.css";
```

Or by including the styling to your style sheets (e.g. in `index.scss`):

```scss
import "~scrivito-eyecatcher/index.css";
```

## Features
The Scrivito Eyecatcher Widget renders a blockquote tag, with optional borders, shadows and background colors.
Text can be edit inline.

## Widget properties

In the widget properties you can set:

- Text size
- Border
- Shadow
- Alignment
- Rounded Borders
- Background color