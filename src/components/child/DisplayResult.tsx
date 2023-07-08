import { loader } from "../../assets";

interface DisplayResultProps {
  isFetching: boolean;
  error: { data: { error: string } };
  article: { summary: string };
}

function DisplayResult({ isFetching, error, article }: DisplayResultProps) {
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      {isFetching ? (
        <div className="flex flex-col justify-center items-center">
          <img src={loader} alt="loader" className="w-10 h-10 object-contain" />
          <p className="mt-3 text-sm text-gray-700">
            Summarizing the Articles... please wait...
          </p>
        </div>
      ) : error ? (
        <p className="font-inter font-bold text-black text-center">
          Well, that wasn't supposed to happen...
          <br />
          <span className="font-satoshi font-normal text-gray-700">
            {error?.data?.error}
          </span>
        </p>
      ) : (
        article.summary && (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                {article.summary}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default DisplayResult;
