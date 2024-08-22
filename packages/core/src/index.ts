import { buildingActionsAsync } from "@halvaradop/building-actions"

export const coreAsync = async () => {
    console.log("core-package")
    buildingActionsAsync()
}

coreAsync()