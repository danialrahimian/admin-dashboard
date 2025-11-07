import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NAVIGATION from "./layout/layout";

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: true },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
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
DemoPageContent.propTypes = { pathname: PropTypes.string.isRequired };

function AppBar({ children }: { children: React.ReactNode }) {
  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        logo: <AdminPanelSettingsIcon fontSize="large" />,
        title: "Admin Dashboard",
        homeUrl: "/",
      }}
    >
      <DashboardLayout>
        {children ?? <DemoPageContent pathname={window.location.pathname} />}
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
}

AppBar.propTypes = { window: PropTypes.func };
export default AppBar;
