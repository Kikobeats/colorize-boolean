# colorize-boolean

<h1 align="center">
  <br>
  <img src="http://i.imgur.com/nxFJv4D.png" alt="colorize-boolean">
  <br>
  <br>
</h1>

![Last version](https://img.shields.io/github/tag/Kikobeats/colorize-boolean.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/colorize-boolean/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/colorize-boolean)
[![Coverage Status](http://img.shields.io/coveralls/Kikobeats/colorize-boolean/master.svg?style=flat-square)](https://coveralls.io/r/Kikobeats/colorize-boolean?branch=master)
[![Dependency status](http://img.shields.io/david/Kikobeats/colorize-boolean.svg?style=flat-square)](https://david-dm.org/Kikobeats/colorize-boolean)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/colorize-boolean.svg?style=flat-square)](https://david-dm.org/Kikobeats/colorize-boolean#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/colorize-boolean.svg?style=flat-square)](https://www.npmjs.org/package/colorize-boolean)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> Output a boolean with color. Pretty sweet for your terminal logs!

## Install

```bash
npm install colorize-boolean --save
```

## Usage

```coffee
colorizeBoolean = require 'colorize-boolean'
```

## API

```coffee
console.log colorizeBoolean().expected(true).actual(false)
console.log colorizeBoolean('human').expected(true).actual(false)
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
