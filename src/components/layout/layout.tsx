import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageIcon from "@mui/icons-material/Message";
import TuneIcon from "@mui/icons-material/Tune";
import type { Navigation } from "@toolpad/core/AppProvider";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Dashboard",
  },

  {
    segment: "",
    title: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    segment: "Analytics",
    title: "Analytics",
    icon: <TimelineOutlinedIcon />,
  },
  {
    segment: "Sales",
    title: "Sales",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    kind: "header",
    title: "Quick Menu",
  },
  {
    segment: "Users",
    title: "Users",
    icon: <PermIdentityOutlinedIcon />,
  },
  {
    segment: "NewUser",
    title: "New User",
    icon: <PersonAddOutlinedIcon />,
  },
  {
    segment: "Products",
    title: "Products",
    icon: <StorefrontOutlinedIcon />,
    pattern: "Product/:ProductId",
  },

  {
    segment: "Transactions",
    title: "Transactions",
    icon: <MonetizationOnOutlinedIcon />,
  },
  {
    segment: "Reports",
    title: "Reports",
    icon: <ReportGmailerrorredOutlinedIcon />,
  },
  {
    kind: "header",
    title: "Notifications",
  },
  {
    segment: "Mail",
    title: "Mail",
    icon: <EmailOutlinedIcon />,
  },
  {
    segment: "Feedback",
    title: "Feedback",
    icon: <DashboardIcon />,
  },
  {
    segment: "massages",
    title: "massages",
    icon: <MessageIcon />,
  },
  {
    kind: "header",
    title: "Staff",
  },
  {
    segment: "Manage",
    title: "Manage",

    icon: <TuneIcon />,
  },
];
export default NAVIGATION;
