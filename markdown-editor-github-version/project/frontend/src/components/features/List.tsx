import ListItem from "../ui/ListItem.tsx";
import type { article } from "@/types/article.ts";
import getAllArticles from "@/services/allArticles.ts";
import { useAtom } from "jotai";
import { searchQueryAtom } from "@/atoms/atom.ts";
import { useSearch } from "@/hooks/useSearch.ts";
import { useEffect } from "react";
export function List() {
  const [searchQuery] = useAtom(searchQueryAtom);
  const { data } = getAllArticles();
  function filterItems(articles: article) {
    return articles.body;
  }
  const { setQuery, filteredItems } = useSearch(data, filterItems);
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);
  const message = "text-white text-[1.5rem] text-center font-serif bg-gray-900";
  return (
    <div>
      <div className={message}>
        {searchQuery ? (
          <div>
            {filteredItems.length} out of {data.length}
          </div>
        ) : (
          <div>Total: {data.length}</div>
        )}
      </div>

      {filteredItems?.map((i: article) => (
        <ListItem item={{ body: i.body, id: i.id }} key={i.id} />
      ))}
    </div>
  );
}
