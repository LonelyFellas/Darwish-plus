/// <reference types="react" />
type UseBooleanAction = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
/**
 *
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
declare const useBoolean: (defaultValue: boolean) => [boolean, UseBooleanAction];
export default useBoolean;
