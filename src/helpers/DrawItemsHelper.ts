// interfaces
import { IDrawerItemsHelperProps } from "../interfaces";

// utils
import { EDrawerItems } from "../utils";

// packages
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from '@mui/icons-material/Add';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export const DrawItemsHelper: IDrawerItemsHelperProps = {
    primary: [
        { name: "Overview", icon: DashboardIcon, tab: "overview" },
        { name: "Add candidacy", icon: AddIcon, tab: "new"},
        { name: "Candidacies", icon: ContentPasteSearchIcon, tab: "candidacies"},
        { name: "Companies", icon: ApartmentIcon, tab: "companies"},
        { name: "Job boards", icon: LanguageIcon, tab: "links"}
    ],
    secondary: [
        { name: "Profile", icon: PersonIcon, tab: "profile" },
        { name: "Settings", icon: SettingsIcon, tab: "settings"}
    ],

    getItems: (items: EDrawerItems) => {
        return DrawItemsHelper[items];
    }
};