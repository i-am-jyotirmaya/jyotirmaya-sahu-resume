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
  DetailedExperience,
  detailedExperiences,
} from "@/data/resume-data";
import githubLogo from "@/assets/github/github_64.png";
import Markdown from "react-markdown";
import { Fragment, useState } from "react";
import { CommentSystem } from "@/components/CommentSystem";
import { DetailedExperienceView } from "@/components/DetailedExperience";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Resume = transition(() => {
  const [selectedExperience, setSelectedExperience] = useState<DetailedExperience | null>(null);

  const getSubheadingJsx = () => {
    return (
      <div className="flex flex-row gap-2 items-center flex-wrap">
        {subheadingItems.map((item, i) => {
          return (
            <Fragment key={`${item.type}-${item.value}`}>
              {i === 0 ? <></> : <>&bull;</>}
              {getSubheadingItemJsx(item)}
            </Fragment>
          );
        })}
      </div>
    );
  };

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

  const renderSection = (title: string, children: React.ReactNode) => (
    <section className="w-full mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );

  const renderAchievements = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
      {significantAchievements.map((achievement) => (
        <Card key={achievement.title}>
          <CardHeader className="p-4">
            <CardTitle>{achievement.title}</CardTitle>
            <CardDescription>{achievement.description}</CardDescription>
          </CardHeader>
        </Card>
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

    const getProgress = (proficiency: "Proficient" | "Intermediate" | "Beginner") => {
      const progressValue =
        proficiency === "Proficient" ? 100 : proficiency === "Intermediate" ? 50 : 25;
      const progressColor = proficiency === "Proficient" ? "bg-green-500" : "bg-yellow-500";
      return <Progress inidicatorClassName={progressColor} value={progressValue} />;
    };

    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
        {Object.entries(groupedSkills).map(([group, skills]) => (
          <Card key={group}>
            <CardHeader className="p-4">
              <CardTitle>{group}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <ul className="list-none list-inside">
                {skills.map((skill) => (
                  <li className="mb-2 last-of-type:mb-0" key={skill.name}>
                    <span className="text-sm">{skill.name}</span> {getProgress(skill.proficiency)}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
          <button
            onClick={() =>
              setSelectedExperience(
                detailedExperiences.find((e) => e.company === exp.company) || null
              )
            }
            className="text-blue-600 hover:underline mt-2"
          >
            View Details
          </button>
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
    <>
      <div className="min-h-screen max-w-4xl container p-8 mx-auto">
        <h1 className="text-6xl font-bold text-center">Jyotirmaya Sahu</h1>
        <section className="mt-6 flex flex-col gap-4 items-center">
          {getSubheadingJsx()}
          <Separator />
          {getTitle()}
          {getCoverContent()}
        </section>

        {renderSection("Achievements", renderAchievements())}
        {renderSection("Key Skills", renderKeySkills())}
        {renderSection("Technical Skills", renderTechnicalSkills())}
        {renderSection("Professional Experience", renderExperience())}
        {renderSection("Education", renderEducation())}
        <CommentSystem
          sectionId="resume"
          onComment={(comment) => {
            // Handle comment submission
            console.log(comment);
          }}
        />
      </div>
      {selectedExperience && (
        <DetailedExperienceView
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </>
  );
});
