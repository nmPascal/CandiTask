// interfaces
import { IDrawerItemsHelperProps } from "../interfaces";

// utils
import { EDrawerItems } from "../utils";

// packages
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

// components
import { Overview, NewCandidacy, Candidacies, CompanyList, JobBoardList } from '../components';

export const DrawerItemsHelper: IDrawerItemsHelperProps = {
    primary: [
        { name: "Overview", icon: DashboardIcon, component: Overview  },
        { name: "Add candidacy", icon: AddHomeWorkIcon, component: NewCandidacy },
        { name: "Candidacies", icon: ContentPasteSearchIcon, component: Candidacies },
        { name: "Companies", icon: ApartmentIcon, component: CompanyList },
        { name: "Job boards", icon: LanguageIcon, component: JobBoardList }
    ],
    secondary: [
        { name: "Profile", icon: PersonIcon, component: Overview },
        { name: "Settings", icon: SettingsIcon, component: Overview }
    ],

    getItems: (items: EDrawerItems) => {
        return DrawerItemsHelper[items];
    }
};