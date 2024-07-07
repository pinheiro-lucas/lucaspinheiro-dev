// Pages
import Teste1 from "@/components/teste1";
import Teste2 from "@/components/teste2";

export const routes: {
  [key: string]: {
    iconOpened: string;
    iconClosed: string;
    files: {
      name: string;
      content: () => JSX.Element;
    }[];
    isClosed: boolean;
  };
} = {
  Pasta: {
    iconOpened: "vscode-icons:default-folder-opened",
    iconClosed: "vscode-icons:default-folder",
    files: [
      { name: "teste.txt", content: Teste1 },
      { name: "teste2.txt", content: Teste2 },
    ],
    isClosed: false,
  },
  Certificados: {
    iconOpened: "vscode-icons:default-folder-opened",
    iconClosed: "vscode-icons:default-folder",
    files: [],
    isClosed: false,
  },
};
