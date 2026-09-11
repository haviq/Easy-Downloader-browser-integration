import {getLatestConfig} from "~/configs/Config";


let holdingKey = ""

export function setHoldingKey(key: string) {
    holdingKey = key
}

export function isBypassShortcutPressed() {
    // When auto-capture of download links is enabled, holding down the shortcut key
    // and clicking on the download link uses the internal browser download method.
    return holdingKey === getLatestConfig().bypassShortcut
}
