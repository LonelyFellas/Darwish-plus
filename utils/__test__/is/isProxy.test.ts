import { describe, it, expect } from "vitest";
import isProxy from "../../is/isProxy";

describe("Proxy", () => {
  it("should return true for Proxy object", () => {
    expect(isProxy(new Proxy({}, {}))).toBe(true);
    // expect(isProxy(new Proxy([], {}))).toBe(true);
    // expect(isProxy(new Proxy(new Date(), {}))).toBe(true);
    // expect(isProxy(new Proxy(new Map(), {}))).toBe(true);
    // expect(isProxy(new Proxy(new Set(), {}))).toBe(true);
    // expect(isProxy(new Proxy(new WeakMap(), {}))).toBe(true);
    // expect(isProxy(new Proxy(new WeakSet(), {}))).toBe(true);
  });
  it("should return false for non-Proxy object", () => {
    expect(isProxy({})).toBe(false);
    // expect(isProxy([])).toBe(false);
    // expect(isProxy(new Date())).toBe(false);
    // expect(isProxy(new Map())).toBe(false);
    // expect(isProxy(new Set())).toBe(false);
    // expect(isProxy(new WeakMap())).toBe(false);
    // expect(isProxy(new WeakSet())).toBe(false);
  });
});
