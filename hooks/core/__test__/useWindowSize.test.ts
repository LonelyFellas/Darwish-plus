import { renderHook, act } from "@testing-library/react";
import useWindowSize from "../useWindowSize";

describe("useWindowSize", () => {
  it("should return window size", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  it("should update window size on resize", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 1000;
      window.innerHeight = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 1000,
      height: 500,
    });
  });

  it("should update window size on rize multiple times", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 1000;
      window.innerHeight = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 1000,
      height: 500,
    });

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 1000;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 500,
      height: 1000,
    });
  });
});
