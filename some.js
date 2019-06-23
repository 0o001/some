Object.some = function (parameters = {}, func) {

    return new Function( ...Object.keys(parameters), 'return ' + func )( ...Object.values(parameters) )

}