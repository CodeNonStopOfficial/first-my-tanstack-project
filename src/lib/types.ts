import type { LucideIcon } from "lucide-react";

export interface NavPrimalyProps {
    item : {
        title : string
        to : string,
        icon : LucideIcon,
         activeOptions :{
            exact:boolean
         }
    }[]
}
