import { DetailedExperience } from "@/data/resume-data";

interface Props {
  experience: DetailedExperience;
  onClose: () => void;
}

export const DetailedExperienceView = ({ experience, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 overflow-y-auto p-8">
      <button onClick={onClose} className="absolute top-4 right-4">
        Close
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">{experience.position}</h1>
        <h2 className="text-xl text-gray-600">{experience.company}</h2>

        <section className="mt-8">
          <h3 className="text-2xl font-bold">Overview</h3>
          <p>{experience.detailedDescription}</p>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-bold">Projects</h3>
          {experience.projects.map((project) => (
            <div key={project.name} className="mt-4">
              <h4 className="text-xl font-bold">{project.name}</h4>
              <p>{project.description}</p>
              {/* Add more project details */}
            </div>
          ))}
        </section>

        {/* Add more sections */}
      </div>
    </div>
  );
};
