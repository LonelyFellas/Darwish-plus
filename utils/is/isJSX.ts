import { isValidElement } from "react";
const isJSX = (value: unknown): value is JSX.Element => isValidElement(value);

export default isJSX;
