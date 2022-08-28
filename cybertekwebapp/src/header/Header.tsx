import { useScreenScopeContext } from "contexts";
import { MobileHeader, WebHeader } from "header";

export const Header = () => {
  const { isMobile } = useScreenScopeContext();

  return isMobile ? <MobileHeader /> : <WebHeader />;
};
