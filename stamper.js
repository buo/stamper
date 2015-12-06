var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

if (system.args.length < 4 || system.args.length > 5) {
    console.log('Usage: '+system.args[0]+' URL selector filename [zoom]');
    phantom.exit(1);
} else {
    address = system.args[1];
    selector = system.args[2];
    output = system.args[3];
    if (system.args.length > 4) {
        page.zoomFactor = system.args[4];
    }
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit(1);
        } else {
            window.setTimeout(function () {
                var rect = page.evaluate(function(selector) {
                  var el = document.querySelector(selector);
                  if (!el) {
                    return null;
                  }
                  return el.getBoundingClientRect();
                }, selector);
                if (!rect) {
                  console.log('Unabled to find the element!');
                  phantom.exit(2);
                  return false;
                }
                for (k in rect) {
                    rect[k] *= page.zoomFactor;
                }
                page.clipRect = rect;
                page.render(output);
                phantom.exit();
            }, 500);
        }
    });
}
