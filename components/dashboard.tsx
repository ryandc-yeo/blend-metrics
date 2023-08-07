"use client";

import { createContext } from "react";
import BlankProject from "./blankProject";
import WorkflowTemplate from "./workflowTemplate";
import recentProjectColumns from "./recentProjectColumns";
import PopUpWindow from "./popUpWindow";
import { useEffect } from "react";

const Dashboard = () => {
  const dropDownMenu =
    typeof document !== "undefined" && document.getElementById("popup-target");

  return (
    <div className="h-[704px] w-fit bg-gray-50 px-[100px] py-[34px]">
      <div className="flex flex-col gap-6 p-8">
        <section className="flex flex-col gap-2.5">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-2xl font-semibold leading-5 text-gray-600">
                Start a new workflow
              </h3>
              <p className="text-sm leading-5 text-gray-500">
                Pick one of our workflow templates below or start with a blank
                workflow.
              </p>
            </div>
            <div
              id="popup-target"
              className="text-sm font-semibold leading-5 text-gray-500"
            >
              <PopUpWindow />
            </div>
          </div>
          <div className="flex h-[150px] gap-2.5">
            <BlankProject />
            <WorkflowTemplate />
            <WorkflowTemplate />
            <WorkflowTemplate />
            <WorkflowTemplate />
            <WorkflowTemplate />
            <WorkflowTemplate />
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold leading-5 text-gray-600">
              Recent projects
            </div>
            <div className="">
              <div className="text-sm font-semibold leading-5 text-gray-500 hover:cursor-pointer hover:underline">
                View All Projects
              </div>
              {/* <recentProjectColumns projects=["Project 1", "Project 2"] /> */}
            </div>
          </div>

          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
