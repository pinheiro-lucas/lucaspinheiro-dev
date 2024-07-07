"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { routes } from "./routes";

export default function Home() {
  const [project, setProject] = useState<typeof routes>(routes);

  const [fileSelected, setFileSelected] = useState<string>("teste.txt");
  const [isProjectCollapsed, setIsProjectCollapsed] = useState<boolean>(false);
  const [fileContent, setFileContent] = useState<JSX.Element | undefined>(
    undefined,
  );

  function handleCloseFolder(folder: string) {
    setProject({
      ...project,
      [folder]: { ...project[folder], isClosed: !project[folder].isClosed },
    });
  }

  useEffect(() => {
    const currentFile = Object.values(project)
      .flatMap(({ files }) => files)
      .find(({ name }) => name === fileSelected);

    setFileContent(currentFile?.content);
  }, [project, fileSelected]);

  return (
    <div
      className="h-screen flex items-center justify-center select-none"
      style={{
        backgroundImage: "linear-gradient(180deg, #00070f 0%, #121521 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="rounded-lg bg-base-300 h-5/6 w-9/12 flex *:flex flex-col shadow-md">
        {/* Topbar */}
        <section className="w-full h-14 *:flex *:flex-1 *:items-center border-b items-center px-3">
          <div className="gap-5">
            <Icon icon="vscode-icons:file-type-vscode" className="size-6" />
            <button>File</button>
            <button>Edit</button>
            <button>Selection</button>
            <button>View</button>
          </div>
          {/* Search bar */}
          <button className="bg-base-200 self-center my-0.5 py-1 gap-2 items-center justify-center font-medium rounded-md border">
            <Icon icon="codicon:search" />
            Search
          </button>
          <div className="*:flex gap-10 justify-end pr-3">
            <div className="gap-3 *:*:size-6">
              <button>
                <Icon icon="codicon:layout-sidebar-left" />
              </button>
              <button>
                <Icon icon="codicon:layout-panel" />
              </button>
              <button>
                <Icon icon="codicon:layout-sidebar-right-off" />
              </button>
              <button>
                <Icon icon="codicon:layout" />
              </button>
            </div>
            <div className="gap-6 *:*:size-6">
              <button>
                <Icon icon="codicon:chrome-minimize" />
              </button>
              <button>
                <Icon icon="codicon:chrome-maximize" />
              </button>
              <button>
                <Icon icon="codicon:chrome-close" />
              </button>
            </div>
          </div>
        </section>
        <div className="h-full">
          {/* Navbar */}
          <section className="flex flex-col *:flex *:flex-col flex-none justify-between *:*:*:size-7 *:*:p-3 border-r">
            <div>
              <button className="border-l-accent border-l-2">
                <Icon icon="codicon:files" />
              </button>
              <button>
                <Icon icon="codicon:search" />
              </button>
              <button>
                <Icon
                  icon="codicon:git-merge"
                  className="transform scale-y-[-1]"
                />
              </button>
              <button>
                <Icon icon="codicon:debug-alt" />
              </button>
              <button>
                <Icon icon="codicon:extensions" />
              </button>
              <button>
                <Icon icon="codicon:beaker" />
              </button>
            </div>
            <div>
              <button>
                <Icon icon="codicon:account" />
              </button>
              <button>
                <Icon icon="codicon:settings-gear" />
              </button>
            </div>
          </section>
          {/* File explorer */}
          <section className="flex-1 *:flex flex-col border-r">
            <div className="justify-between py-2 px-4 items-center">
              <span className="text-sm">EXPLORER</span>
              <button>
                <Icon icon="codicon:ellipsis" />
              </button>
            </div>
            <div className="px-1 flex-col">
              <button
                onClick={() => {
                  setIsProjectCollapsed(!isProjectCollapsed);
                }}
                className="flex items-center gap-1 font-medium my-0.5"
              >
                {isProjectCollapsed ? (
                  <Icon icon="codicon:chevron-right" />
                ) : (
                  <Icon icon="codicon:chevron-down" />
                )}
                Projeto
              </button>

              {!isProjectCollapsed &&
                // Folder list
                Object.entries(project).map(
                  (
                    [folder, { files, iconOpened, iconClosed, isClosed }],
                    index,
                  ) => {
                    return (
                      <div key={index}>
                        <button
                          className="flex items-center gap-1.5 px-4 my-0.5"
                          onClick={() => {
                            handleCloseFolder(folder);
                          }}
                        >
                          {/* Maybe pre load */}
                          <Icon icon={isClosed ? iconClosed : iconOpened} />
                          {folder}
                        </button>

                        {!isClosed && (
                          <div className="*:px-8 *:flex *:items-center *:gap-1 *:mb-0.5 my-0.5">
                            {files.map(({ name }) => {
                              return (
                                <button
                                  key={name}
                                  className="truncate"
                                  onClick={() => {
                                    setFileSelected(name);
                                  }}
                                >
                                  <Icon icon="vscode-icons:default-file" />{" "}
                                  {name}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  },
                )}
            </div>
          </section>
          <section className="flex-[4_4_0%] flex-col bg-base-100">
            <div className="flex border-b bg-base-300">
              <div className="flex gap-1 items-center border-t-accent border-t-2 px-4 py-2 bg-base-100">
                <Icon icon="vscode-icons:default-file" />
                {fileSelected}
                <button>
                  <Icon icon="codicon:chrome-close" className="ml-2" />
                </button>
              </div>
            </div>
            <div className="mx-3 my-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1 mb-2">
                Pasta <Icon icon="codicon:chevron-right" />
                {fileSelected}
              </div>
              {/* Lines */}
              <code className="select-text *:before:mx-5 *:before:text-[#808080]">
                {fileContent && fileContent}
              </code>
            </div>
          </section>
        </div>
        {/* Bottom Bar */}
        <section className="items-center *:*:flex *:*:items-center *:*:gap-0.5 justify-between border-t">
          <div className="flex gap-2">
            <div className="bg-accent px-2.5 py-1.5 rounded-bl-md">
              <Icon icon="codicon:remote" />
            </div>
            <div>
              <Icon icon="codicon:error" />0
            </div>
            <div>
              <Icon icon="codicon:warning" />0
            </div>
            <div>
              <Icon icon="codicon:radio-tower" />0
            </div>
          </div>
          <div className="flex gap-5 pr-3">
            <span>Ln 5, Col 29</span>
            <span>Spaces: 4</span>
            <span>UTF-8</span>
            <span>CRLF</span>
            <Icon icon="codicon:bell" className="self-center" />
          </div>
        </section>
      </main>
    </div>
  );
}
