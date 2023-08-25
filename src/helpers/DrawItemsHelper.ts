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
import { Overview } from './../components/Dashboard/Overview/Overview';
import { NewCandidacy } from "../components";

export const DrawerItemsHelper: IDrawerItemsHelperProps = {
    primary: [
        { name: "Overview", icon: DashboardIcon, component: Overview  },
        { name: "Add candidacy", icon: AddIcon, component: NewCandidacy },
        { name: "Candidacies", icon: ContentPasteSearchIcon, component: Overview },
        { name: "Companies", icon: ApartmentIcon, component: Overview },
        { name: "Job boards", icon: LanguageIcon, component: Overview }
    ],
    secondary: [
        { name: "Profile", icon: PersonIcon, component: Overview },
        { name: "Settings", icon: SettingsIcon, component: Overview }
    ],

    getItems: (items: EDrawerItems) => {
        return DrawerItemsHelper[items];
    }
};