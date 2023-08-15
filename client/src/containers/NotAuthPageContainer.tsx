import { ReactNode } from "react";

export const NotAuthPageContainer = ({ children }: { children: ReactNode }) => {
  return <div className={`flex flex-col min-h-screen bg-zinc-50 justify-center items-center`}>{children}</div>;
};

export const withNotAuthContainer = (wrappedComponent: ReactNode) => (
  <NotAuthPageContainer>{wrappedComponent}</NotAuthPageContainer>
);
