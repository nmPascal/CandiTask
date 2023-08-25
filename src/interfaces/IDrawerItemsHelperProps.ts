import { FC } from "react";

// utils
import { EDrawerItems } from "../utils";

// packages
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IDrawerItemsHelperProps {
    primary: IDrawerItem[];
    secondary: IDrawerItem[];
    getItems: (items: EDrawerItems) => IDrawerItem[];
}

export interface IDrawerItem {
    name: string;
    icon: OverridableComponent<SvgIconTypeMap<NonNullable<unknown>, "svg">> & { muiName: string; };
    component: FC;
}