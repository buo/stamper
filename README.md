# Stamper

Stamper is a PhantomJS script to take a screenshot of a web page with CSS selectors.

## Examples

```
phantomjs stamper.js 'http://www.urbandictionary.com/define.php?term=sugar+daddy' '.def-panel[data-defid="527271"]' output.png
```

This will produce:

![output.png](https://raw.githubusercontent.com/buo/stamper/master/output.png?t=1449409109)
