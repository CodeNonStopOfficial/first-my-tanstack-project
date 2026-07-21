import type { User } from "better-auth";
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

export interface NavUserProps {
   user : User
}
