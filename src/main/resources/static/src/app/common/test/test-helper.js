/**
 * Created by eryk on 09.05.17.
 */
function getComponentElem(wrapper, html) {
    return ($rootScope, $compile) => {
        wrapper.scope = $rootScope.$new(false);
        const elem = angular.element(html);
        wrapper.element = $compile(elem)(wrapper.scope);
        wrapper.scope.$apply();
    }
}

function stdTest(elem) {
    expect(elem).toBeDefined();
    expect(elem.html()).not.toEqual('');
}

export  {
    getComponentElem,
    stdTest
}

