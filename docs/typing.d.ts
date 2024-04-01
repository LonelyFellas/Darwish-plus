declare global {
  interface Window {
    TEST_SCRIPT?: {
      start: () => React.ReactNode;
    };
  }
}
export {};
