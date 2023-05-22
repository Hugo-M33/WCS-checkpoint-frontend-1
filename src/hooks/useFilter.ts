import { useMemo } from "react";

interface List
  extends Array<
    Record<any, any> & {
      name: string;
    }
  > {}

export default function useFilter(list: List, filter: string) {
  const filtered = useMemo(() => {
    return list.filter((listElem) =>
      listElem.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }, [list, filter]);

  return filtered;
}
