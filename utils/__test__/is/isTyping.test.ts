import { describe, it, expect } from "vitest";
import { isObject, isInfinity, isArray } from "../../is/isTypings";

describe("isObject", () => {
  it("should return true for objects", () => {
    // expect(isObject({})).toBe(true);
    // expect(isObject({ a: 1 })).toBe(true);
    // expect(isObject(new Object())).toBe(true);
    // expect(isObject(Object.create(null))).toBe(true);
  });
  it("should return false for other values", () => {
    // expect(isObject(null)).toBe(false);
    // expect(isObject(undefined)).toBe(false);
    // expect(isObject(0)).toBe(false);
    // expect(isObject(1)).toBe(false);
    // expect(isObject("")).toBe(false);
    // expect(isObject("object")).toBe(false);
    // expect(isObject([])).toBe(false);
    // expect(isObject(Infinity)).toBe(false);
    // expect(isObject(-Infinity)).toBe(false);
    // expect(isObject(new ArrayBuffer(8))).toBe(false);
    // expect(isObject(new DataView(new ArrayBuffer(8)))).toBe(false);
    // expect(isObject(new Map())).toBe(false);
    // expect(isObject(new Set())).toBe(false);
    // expect(isObject(new WeakMap())).toBe(false);
    // expect(isObject(new WeakSet())).toBe(false);
    // // expect(isObject(new Proxy({}, {}))).toBe(false);
    // expect(isObject(new Promise(() => {}))).toBe(false);
    // expect(isObject(new Int8Array())).toBe(false);
    // expect(isObject(new Uint8Array())).toBe(false);
    // expect(isObject(new Uint8ClampedArray())).toBe(false);
    // expect(isObject(new Int16Array())).toBe(false);
    // expect(isObject(new Uint16Array())).toBe(false);
    // expect(isObject(new Int32Array())).toBe(false);
    // expect(isObject(new Uint32Array())).toBe(false);
    // expect(isObject(new Float32Array())).toBe(false);
    // expect(isObject(new Float64Array())).toBe(false);
    // expect(isObject(new BigInt64Array())).toBe(false);
    // expect(isObject(new BigUint64Array())).toBe(false);
  });
});

describe("isInfinity", () => {
  it("should return true for Infinity", () => {
    expect(isInfinity(Infinity)).toBe(true);
    expect(isInfinity(-Infinity)).toBe(true);
  });
  it("should return false for other values", () => {
    expect(isInfinity(null)).toBe(false);
    expect(isInfinity(undefined)).toBe(false);
    expect(isInfinity(0)).toBe(false);
    expect(isInfinity(1)).toBe(false);
    expect(isInfinity("")).toBe(false);
    expect(isInfinity("Infinity")).toBe(false);
    expect(isInfinity([])).toBe(false);
    expect(isInfinity({})).toBe(false);
  });
});

describe("isArray", () => {
  it("should return true for arrays", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array(1, 2, 3))).toBe(true);
    expect(isArray(Array.from([1, 2, 3]))).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });
  it("should return false for other values", () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray("")).toBe(false);
    expect(isArray("[]")).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(Infinity)).toBe(false);
    expect(isArray(-Infinity)).toBe(false);
    expect(isArray(new ArrayBuffer(8))).toBe(false);
    expect(isArray(new DataView(new ArrayBuffer(8)))).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
    expect(isArray(new WeakMap())).toBe(false);
    expect(isArray(new WeakSet())).toBe(false);
    expect(isArray(new Proxy({}, {}))).toBe(false);
    expect(isArray(new Promise(() => {}))).toBe(false);
    expect(isArray(new Int8Array())).toBe(false);
    expect(isArray(new Uint8Array())).toBe(false);
    expect(isArray(new Uint8ClampedArray())).toBe(false);
    expect(isArray(new Int16Array())).toBe(false);
    expect(isArray(new Uint16Array())).toBe(false);
    expect(isArray(new Int32Array())).toBe(false);
    expect(isArray(new Uint32Array())).toBe(false);
    expect(isArray(new Float32Array())).toBe(false);
    expect(isArray(new Float64Array())).toBe(false);
    expect(isArray(new BigInt64Array())).toBe(false);
    expect(isArray(new BigUint64Array())).toBe(false);
  });
});
