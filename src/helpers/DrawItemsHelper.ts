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
import LogoutIcon from '@mui/icons-material/Logout';

export const DrawItemsHelper: IDrawerItemsHelperProps = {
    primary: [
        { name: "Dashboard", icon: DashboardIcon },
        { name: "Add candidacy", icon: AddIcon},
        { name: "Candidacies", icon: ContentPasteSearchIcon},
        { name: "Companies", icon: ApartmentIcon},
        { name: "Job boards", icon: LanguageIcon}
    ],
    secondary: [
        { name: "Profile", icon: PersonIcon },
        { name: "Settings", icon: SettingsIcon},
        { name: "Logout", icon: LogoutIcon}
    ],

    getItems: (items: EDrawerItems) => {
        return DrawItemsHelper[items];
    }
};