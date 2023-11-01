import { useState } from 'react';
/**
 *
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
var useBoolean = function (defaultValue) {
    var _a = useState(defaultValue), state = _a[0], setState = _a[1];
    var toggle = function (settingValue) {
        setState(function (prev) {
            return typeof settingValue === 'boolean' ? settingValue : !prev;
        });
    };
    return [state, toggle];
};
export default useBoolean;
