import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NAVIGATION from "./layout/layout";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import { forwardRef, useMemo } from "react";
import type { ReactNode } from "react";
import type { LinkProps as ToolpadLinkProps } from "@toolpad/core/shared/Link";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const ToolpadRouterLink = forwardRef<HTMLAnchorElement, ToolpadLinkProps>(
  ({ href, history, ...props }, ref) => (
    <RouterLink
      ref={ref}
      to={href}
      replace={history === "replace"}
      {...props}
    />
  )
);
ToolpadRouterLink.displayName = "ToolpadRouterLink";

function AppBar({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (
        url: string | URL,
        options?: { history?: "auto" | "push" | "replace" }
      ) => {
        const target = typeof url === "string" ? url : url.toString();
        navigate(target, { replace: options?.history === "replace" });
      },
      Link: ToolpadRouterLink,
    }),
    [location.pathname, location.search, navigate]
  );

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: <AdminPanelSettingsIcon fontSize="large" />,
        title: "Admin Dashboard",
        homeUrl: "/",
      }}
    >
      <DashboardLayout>
        {children ? children : <DemoPageContent pathname={router.pathname} />}
      </DashboardLayout>
    </AppProvider>
  );
}

AppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default AppBar;
