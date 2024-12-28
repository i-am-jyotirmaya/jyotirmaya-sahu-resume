import { transition } from "@/transition";
import linkedinLogo from "@/assets/linkedin/linkedin_64.png";
import { cover, SubheadingItem, subheadingItems, title } from "@/data/resume-data";
import githubLogo from "@/assets/github/github_64.png";
import Markdown from "react-markdown";

export const Resume = transition(() => {
  const getSubheadingJsx = () => {
    return (
      <div className="flex flex-row gap-2 items-center">
        {subheadingItems.map((item, i) => {
          return (
            <>
              {i === 0 ? <></> : <>&bull;</>}
              {getSubheadingItemJsx(item)}
            </>
          );
        })}
      </div>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getSubheadingItemJsx = (item: SubheadingItem) => {
    if (item.type === "linkedin" || item.type === "github") {
      return (
        <p key={item.type} className={"font-bold"}>
          <a href={item.value} target="_blank">
            {item.type === "linkedin" ? (
              <img width={20} src={linkedinLogo} alt="linkedin" />
            ) : (
              <img width={20} src={githubLogo} alt="linkedin" />
            )}
          </a>
        </p>
      );
    }
    return (
      <p className="font-bold" key={item.type}>
        <span>{item.value}</span>
      </p>
    );
  };

  const getTitle = () => {
    return <p className="text-xl font-bold">{title}</p>;
  };

  const getCoverContent = () => {
    return <Markdown>{cover}</Markdown>;
  };

  const renderHorizontalLine = () => (
    <hr className="w-96 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
  );

  return (
    <div className="h-screen max-h-screen max-w-4xl container p-8 mx-auto flex flex-col items-center">
      <h1 className="text-6xl font-bold">Jyotirmaya Sahu</h1>
      <section className="mt-6 flex flex-col gap-4 items-center">
        {getSubheadingJsx()}
        {renderHorizontalLine()}
        {getTitle()}
        {getCoverContent()}
      </section>
    </div>
  );
});
