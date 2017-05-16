/**
 * Created by eryk on 09.05.17.
 */
function getComponentFromHtml(wrapper, html) {
    return ($rootScope, $compile) => {
        wrapper.scope = $rootScope.$new(false);
        const elem = angular.element(html);
        wrapper.element = $compile(elem)(wrapper.scope);
        wrapper.scope.$apply();
    }
}

function getComponent(wrapper, elemName, props, transclude) {
    return getComponentFromHtml(wrapper, genHtmlString(elemName, props, transclude))
}


function stdTest(elem) {
    expect(elem).toBeDefined();
    expect(elem.html()).not.toEqual('');
}

function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getTagName(elemName) {
    return 'app-' + camelCaseToDash(elemName);
}

function genHtmlString(elemName, props, transclude) {

    props = props || {};
    const tagName = camelCaseToDash(getTagName(elemName));
    let htmlString = '<' + tagName;
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            htmlString += ' ' + (camelCaseToDash(key) + '="' + props[key] + '"');
        }
    }
    if (transclude === true) {
        return htmlString + '><p>stub</p></' + tagName + '>';
    } else if (typeof transclude === 'string') {
        return htmlString + '>' + transclude + '</' + tagName + '>';
    }
    return htmlString + '></' + tagName + '>';
}

export  {
    getComponentFromHtml,
    getComponent,
    stdTest
}

