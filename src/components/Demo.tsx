import { FormEvent, useEffect, useState } from "react";

import { linkIcon, send } from "../assets";
import { UrlHistory, DisplayResult } from "./child";

import { useLazyGetSummaryQuery } from "../services/Article";

export interface ArticleProps {
  url: string;
  summary: string;
}

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") as string
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const [allArticles, setAllArticles] = useState<ArticleProps[]>([]);

  const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery<any>();

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updateAllArticles);

      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
      setArticle((prev) => ({ ...prev, url: "" }));
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSend}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArticle((prev) => ({ ...prev, url: e.target.value }))
            }
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700"
          >
            <img src={send} alt="send_icon" className="w-5 h-5" />
          </button>
        </form>

        {/* Browser URL History */}
        <UrlHistory
          allArticles={allArticles}
          copied={copied}
          onHandleCopyArticleUrl={(url) => handleCopy(url)}
          onHandleSaveArticle={(item) => setArticle(item)}
        />
      </div>

      {/* Display Result */}
      <DisplayResult isFetching={isFetching} error={error} article={article} />
    </section>
  );
}

export default Demo;
