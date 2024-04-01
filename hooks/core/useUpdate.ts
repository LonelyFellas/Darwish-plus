import { useCallback, useState } from "react";

export default function useUpdate() {
  const [, setState] = useState({});

  const update = useCallback(() => setState({}), []);

  return update;
}
