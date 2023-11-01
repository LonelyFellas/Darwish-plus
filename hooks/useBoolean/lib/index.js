"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 *
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
var useBoolean = function (defaultValue) {
    var _a = (0, react_1.useState)(defaultValue), state = _a[0], setState = _a[1];
    var toggle = function (settingValue) {
        setState(function (prev) {
            return typeof settingValue === 'boolean' ? settingValue : !prev;
        });
    };
    return [state, toggle];
};
exports.default = useBoolean;
