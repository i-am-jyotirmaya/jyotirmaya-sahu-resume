import { transition } from "@/transition";
import linkedinLogo from "@/assets/linkedin/linkedin_64.png";
import {
  cover,
  SubheadingItem,
  subheadingItems,
  title,
  significantAchievements,
  keySkills,
  technicalSkills,
  experiences,
  education,
} from "@/data/resume-data";
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

  const renderSection = (title: string, children: React.ReactNode) => (
    <section className="w-full mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );

  const renderSignificantAchievements = () => (
    <div className="grid grid-cols-2 gap-4">
      {significantAchievements.map((achievement) => (
        <div key={achievement.title} className="p-4 border rounded-lg">
          <h3 className="font-bold">{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>
      ))}
    </div>
  );

  const renderKeySkills = () => (
    <div className="flex flex-wrap gap-2">
      {keySkills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  );

  const renderTechnicalSkills = () => {
    const groupedSkills = technicalSkills.reduce((acc, skill) => {
      acc[skill.group] = [...(acc[skill.group] || []), skill];
      return acc;
    }, {} as Record<string, typeof technicalSkills>);

    return (
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([group, skills]) => (
          <div key={group}>
            <h3 className="font-bold mb-2">{group}</h3>
            <ul className="list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderExperience = () => (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="border-l-4 pl-4">
          <h3 className="font-bold">{exp.position}</h3>
          <p className="text-gray-600">
            {exp.company} | {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside mt-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.degree}>
          <h3 className="font-bold">
            {edu.degree} in {edu.major}
          </h3>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p>Graduated: {edu.year}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen max-w-4xl container p-8 mx-auto">
      <h1 className="text-6xl font-bold text-center">Jyotirmaya Sahu</h1>
      <section className="mt-6 flex flex-col gap-4 items-center">
        {getSubheadingJsx()}
        {renderHorizontalLine()}
        {getTitle()}
        {getCoverContent()}
      </section>

      {renderSection("Significant Achievements", renderSignificantAchievements())}
      {renderSection("Key Skills", renderKeySkills())}
      {renderSection("Technical Skills", renderTechnicalSkills())}
      {renderSection("Professional Experience", renderExperience())}
      {renderSection("Education", renderEducation())}
    </div>
  );
});
