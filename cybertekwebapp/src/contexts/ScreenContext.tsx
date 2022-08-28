import React from "react";

export interface IScreenState {
  isMobile: boolean;
}

export const ScreenScopeContext = React.createContext<IScreenState>({
  isMobile: false,
});

interface IScreenScopeProviderProps {
  children: React.ReactNode;
}

export const ScreenScopeProvider: React.FC<IScreenScopeProviderProps> = ({
  children,
}) => {
  const [state, setState] = React.useState<IScreenState>({
    isMobile: false,
  });

  const resize = React.useCallback(() => {
    setState({ isMobile: window.innerWidth < 1080 });
  }, [setState]);

  React.useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <ScreenScopeContext.Provider value={state}>
      {children}
    </ScreenScopeContext.Provider>
  );
};

export const useScreenScopeContext = (): IScreenState => {
  const screenScopeContext = React.useContext(ScreenScopeContext);
  if (!screenScopeContext)
    throw new Error("You have to provide `ScreenScopeContext`.");
  return screenScopeContext;
};
