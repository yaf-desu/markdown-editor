import { useState, useMemo } from "react";
import { useDebounce } from "use-debounce";

export function useSearch<T>(items: T[], searchKey: (item: T) => string) {
  const [query, setQuery] = useState("");
  const [input] = useDebounce(query, 300);

  const filteredItems = useMemo(() => {
    if (!input) return items;
    return items.filter((item) =>
      searchKey(item).toLowerCase().includes(input.toLowerCase())
    );
  }, [items, input]);

  return { input, query, setQuery, filteredItems };
}
