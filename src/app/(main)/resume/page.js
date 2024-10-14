import React from "react";
import EducationCard from "./components/EducationCard";
import WorkCard from "./components/WorkCard";
import { education, skills, workExperience } from "@/constants";
import Skill from "./components/Skill";

export default function Resume() {
  return (
    <div className="flex flex-col w-full gap-16 p-7 rounded-md shadow-md bg-foreground">
      {/* Previous Experience Section */}
      {/* <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4"> */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">	

        {/* <div className="grid grid-cols-1 content-start gap-4"> */}
          <div>
            <p className="text-xsm text-primary">My</p>
            <h2 className="text-4xl text-copy font-bold">Education</h2>
          </div>
          <div>
            {education.map(({ school, qualification, date, desc }, index) => (
              <EducationCard
                key={index}
                school={school}
                qualification={qualification}
                date={date}
                desc={desc}
              />
            ))}
          </div>
        </div>
        <div>
          {/* <div className="grid grid-cols-1 content-start gap-4">	 */}
          <div className="flex flex-col gap-4">	
            <div>
              <p className="text-xsm text-primary">My</p>
              <h2 className="text-4xl text-copy font-bold">Work Experience</h2>
            </div>
            <div className="overflow-y-auto max-h-80 scrollbar-hide flex flex-col gap-4">
              {workExperience.map(({ role, company, date, desc }, index) => (
                <WorkCard
                  key={index}
                  role={role}
                  company={company}
                  date={date}
                  desc={desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      
    </div>
  );
}
