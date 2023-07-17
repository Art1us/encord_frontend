import { RoutePath } from "shared/config/routeConfig/const"
import { SidebarItemType } from "../model/types/types"
import { BsImages } from "react-icons/bs"
import { MdOutlineBatchPrediction } from "react-icons/md"

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.images,
        Icon: BsImages,
        text: "Images",
    },
    {
        path: RoutePath.predictions,
        Icon: MdOutlineBatchPrediction,
        text: "Predictions",
    },
]
