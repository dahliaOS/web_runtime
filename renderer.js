console.log(require('@electron/remote').process.argv)

var args = require('@electron/remote').process.argv

function adjustCSSRules(selector, props, sheets) {

    // get stylesheet(s)
    if (!sheets) sheets = [...document.styleSheets];
    else if (sheets.sup) {    // sheets is a string
        let absoluteURL = new URL(sheet, document.baseURI).href;
        sheets = [...document.styleSheets].filter(i => i.href == absoluteURL);
    }
    else sheets = [sheets];  // sheets is a stylesheet

    // CSS (& HTML) reduce spaces to one. TODO: ignore quoted spaces.
    selector = selector.replace(/\s+/g, ' ');
    const findRule = s => [...s.cssRules].reverse().find(i => i.selectorText == selector)
    let rule = sheets.map(findRule).filter(i => i).pop()

    const propsArr = props.sup
        ? props.split(/\s*;\s*/).map(i => i.split(/\s*:\s*/)) // from string
        : Object.entries(props);                              // from Object

    if (rule) for (let [prop, val] of propsArr)
        rule.style[prop] = val;
    else {
        sheet = sheets.pop();
        if (!props.sup) props = propsArr.reduce((str, [k, v]) => `${str}; ${k}: ${v}`, '');
        sheet.insertRule(`${selector} { ${props} }`, sheet.cssRules.length);
    }
}


for (var i = 0; i < args.length; i++) {

    if (args[i].startsWith('--')) {
        if (args[i].startsWith('--title')) {

            //replace the text of #AppTitle with the value of --title
            document.getElementById("AppTitle").innerHTML = args[i].substring(8);
            console.log("Title: " + args[i].substring(8));
        }
        if (args[i].startsWith('--windowbar')) {

            //replace the text of #AppTitle with the value of --title
            document.getElementById("PangolinWindowToolbar").style.backgroundColor = args[i].substring(12);
        }
        if (args[i].startsWith('--mode')) {

            //replace the text of #AppTitle with the value of --title
            if (args[i].substring(7) == "dark") {
                document.getElementById("maxIcon").style.color = "white"
                document.getElementById("close").style.color = "white"
                document.getElementById("min").style.color = "white"

            }
            else {
                document.getElementById("maxIcon").style.color = "#212121"
                document.getElementById("close").style.color = "#212121"
                document.getElementById("min").style.color = "#212121"
            }

        }

        if (args[i].startsWith('--icon')) {
            console.log(args[i].substring(7));
            document.getElementById("AppIcon").src = args[i].substring(7);
            document.getElementById("bodyIcon").src = args[i].substring(7);
        }
        if (args[i].startsWith('--bg')) {
            console.log(args[i].substring(5));
            document.body.style.backgroundColor = args[i].substring(5);
        }
        if (args[i].startsWith('--accent')) {
            console.log(args[i].substring(9));
            adjustCSSRules('.mdl-spinner--single-color .mdl-spinner__layer-1', 'border-color: ' + args[i].substring(9));
            adjustCSSRules('.mdl-spinner--single-color .mdl-spinner__layer-2', 'border-color: ' + args[i].substring(9));
            adjustCSSRules('.mdl-spinner--single-color .mdl-spinner__layer-3', 'border-color: ' + args[i].substring(9));
            adjustCSSRules('.mdl-spinner--single-color .mdl-spinner__layer-4', 'border-color: ' + args[i].substring(9));
        }
        if(args[i].startsWith('--source')){
            console.log(args[i].substring(9));
            const webview = document.querySelector('webview')

    webview.src = args[i].substring(9)
  


    }
}
}
