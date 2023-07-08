import { ArticleProps } from "../Demo";
import { copy, tick } from "../../assets";

interface UrlHistoryProps {
  allArticles: ArticleProps[];
  copied: string;
  onHandleSaveArticle: (item: ArticleProps) => void;
  onHandleCopyArticleUrl: (url: string) => void;
}

function UrlHistory({
  allArticles,
  copied,
  onHandleSaveArticle,
  onHandleCopyArticleUrl,
}: UrlHistoryProps) {
  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {allArticles.map((item, index) => (
        <div
          key={`link-${index}`}
          onClick={() => onHandleSaveArticle(item)}
          className="link_card"
        >
          <div
            className="copy_btn"
            onClick={() => onHandleCopyArticleUrl(item.url)}
          >
            <img
              src={copied === item.url ? tick : copy}
              alt="copy_icon"
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
          <p className="flex-1 font-satoshi text-blue-700 text-sm truncate">
            {item.url}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UrlHistory;
