"use client";

import { createContext } from "react";
import BlankProject from "./blankProject";
import WorkflowTemplate from "./workflowTemplate";
import RecentProjectColumns from "./recentProjectColumns";
import PopUpWindow from "./popUpWindow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import NavigationSidebar from "./navigation-dheeraj";
import DashboardHeader from "./dashboard-header";
import {
  Unknown,
  Twitch,
  Stripe,
  Dropbox,
  Dell,
  Github,
  Figma,
  Chrome,
  Shopify,
  Tiktok,
  Evernote,
} from "./popularApps";
import VideoCard from "./videoCard";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const Dashboard = ({ args = [1, 2, 3] }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <section id="dashboard-header">
        <NavigationSidebar />
      </section>
      <div className="flex flex-col">
        <section>
          <DashboardHeader />
        </section>
        <ScrollArea.Root className="h-full w-[97vw] overflow-hidden bg-gray-50">
          <ScrollArea.Viewport className="flex h-full w-full flex-col gap-10 py-[66px]">
            <section
              id="dashboard-body"
              className="m-auto h-fit w-[1105px] min-w-[1105px] bg-gray-50 py-[34px]"
            >
              <div className="flex flex-col gap-[50px]">
                <section className="flex flex-col gap-2.5">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-2xl font-semibold leading-5 text-gray-600">
                        Start a new workflow
                      </h3>
                      <p className="text-sm leading-5 text-gray-500">
                        Pick one of our workflow templates below or start with a
                        blank workflow.
                      </p>
                    </div>
                    <div
                      id="popup-target"
                      className="relative text-sm font-semibold leading-5 text-gray-500"
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
                    <div className="w-full">
                      <Tabs
                        defaultValue="all-projects"
                        {...args}
                        className="w-full"
                      >
                        <div className="flex justify-between">
                          <TabsList className="border-none px-[-20px] pb-4">
                            <TabsTrigger
                              value="all-projects"
                              className="border-transparent"
                            >
                              All Projects
                            </TabsTrigger>
                            <TabsTrigger
                              value="owned-by-me"
                              className="border-transparent"
                            >
                              Owned By Me
                            </TabsTrigger>
                            <TabsTrigger
                              value="shared-with-me"
                              className="border-transparent"
                            >
                              Shared With Me
                            </TabsTrigger>
                          </TabsList>
                          <div className="flex items-end pb-4 text-sm font-semibold leading-5 text-gray-500 transition-all duration-300 ease-in hover:cursor-pointer hover:underline">
                            <p>View All Projects</p>
                          </div>
                        </div>
                        <TabsContent value="all-projects" className="w-full">
                          <RecentProjectColumns
                            projects={["Project 1", "Project 2"]}
                          />
                        </TabsContent>
                        <TabsContent value="owned-by-me" className="w-full">
                          <RecentProjectColumns
                            projects={["Project 1", "Project 2", "Project 3"]}
                          />
                        </TabsContent>
                        <TabsContent value="shared-with-me" className="w-full">
                          <RecentProjectColumns
                            projects={[
                              "Project 1",
                              "Project 2",
                              "Project 3",
                              "Project 4",
                            ]}
                          />
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                  <div></div>
                </section>
                <section className="flex flex-col gap-2.5">
                  <div className="text-2xl font-semibold leading-5 text-gray-600">
                    Most popular apps
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-5 text-gray-500">
                      Pick one of our templates below or start with a blank
                      project.
                    </p>
                    <p className="text-sm font-semibold capitalize leading-5 text-gray-500 transition-all duration-300 ease-in hover:cursor-pointer hover:underline">
                      browse all apps
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <Evernote />
                    <Tiktok />
                    <Shopify />
                    <Chrome />
                    <Figma />
                    <Github />
                    <Dell />
                    <Dropbox />
                    <Stripe />
                    <Twitch />
                    <Unknown />
                  </div>
                </section>
                <section className="flex flex-col gap-2.5">
                  <div className="text-2xl font-semibold leading-5 text-gray-600">
                    Show me how to blend
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-5 text-gray-500">
                      Get started with videos resources that show you how to get
                      the most out of Blend Metrics!
                    </p>
                    <p className="text-sm font-semibold capitalize leading-5 text-gray-500 transition-all duration-300 ease-in hover:cursor-pointer hover:underline">
                      view more tutorials
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                  </div>
                </section>
              </div>
            </section>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="duration-[160ms] absolute right-[10px] flex touch-none select-none bg-transparent px-1 py-[3px] transition-colors ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-[13px] data-[orientation=horizontal]:flex-col"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-[7px] bg-[#EAECF0] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[7px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </div>
  );
};

export default Dashboard;
