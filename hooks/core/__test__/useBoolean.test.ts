import { act, renderHook } from "@testing-library/react";
import useBoolean from "../useBoolean";

describe("useBoolean()", () => {
  it("should use boolean", () => {
    const {
      result: {
        current: { value, setTrue, setFalse, toggle },
      },
    } = renderHook(() => useBoolean());
    expect(value).toBe(false);
    expect(typeof setTrue).toBe("function");
    expect(typeof setFalse).toBe("function");
    expect(typeof toggle).toBe("function");
  });
  it("should default value works(1)", () => {
    const {
      result: {
        current: { value },
      },
    } = renderHook(() => useBoolean(true));
    expect(value).toBe(true);
  });
  it("should set to true", () => {
    const { result } = renderHook(() => useBoolean(false));
    expect(result.current.value).toBe(false);
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toBe(true);
  });
  it("should set to false", () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current.value).toBe(true);
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.value).toBe(false);
  });
  it("should toggle", () => {
    const { result } = renderHook(() => useBoolean(false));
    expect(result.current.value).toBe(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });
  it("should set", () => {
    const { result } = renderHook(() => useBoolean(false));
    act(() => {
      result.current.set(true);
    });
    expect(result.current.value).toBe(true);
    act(() => {
      result.current.set(false);
    });
    expect(result.current.value).toBe(false);
  });
});
