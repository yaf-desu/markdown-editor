import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
export default function BackToTop() {
  const pst = "fixed bottom-8 right-8 bg-black/10";
  const btn = `wrapper ${pst}`;

  return (
    <div className={btn} onClick={topFunction}>
      <ArrowDropUpIcon className="icon" />
    </div>
  );
}

function topFunction() {
  const articleEl = document.getElementById("article-container");
  if (articleEl && typeof (articleEl as HTMLElement).scrollTo === "function") {
    (articleEl as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
  } else if (typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.body.scrollTop = 0; // Fallback for older browsers/Safari
    document.documentElement.scrollTop = 0; // Fallback for others
  }
  console.log("Reached the top");
}
// Not used
