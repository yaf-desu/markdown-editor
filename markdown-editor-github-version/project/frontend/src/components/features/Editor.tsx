import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useAtom } from "jotai";
import { currentBodyAtom } from "@/atoms/atom.ts";
import { useParams } from "react-router";
const container = "w-full flex flex-col h-[80vh]";
export default function Editor({ v }: { v: string }) {
  const [currentBody, setCurrentBody] = useAtom(currentBodyAtom);
  const articleId = Number(useParams().articleId) || null;
  useEffect(() => {
    setCurrentBody(v ?? "");
  }, [v, setCurrentBody]);
  return (
    <div className={container}>
      <MDEditor
        height="100%"
        value={currentBody}
        onChange={(val?: string) => setCurrentBody(val ?? "")}
        preview={
          articleId
            ? "preview"
            : typeof window !== "undefined" &&
              window.matchMedia("(max-width: 768px)").matches
            ? "edit"
            : "live"
        }
        id="mdEditor"
      />
    </div>
  );
}
