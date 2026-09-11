let holdingKey = ""

export function clear() {
    holdingKey = ""
}

export function getHoldingKey() {
    return holdingKey
}

export function boot() {
    document.addEventListener("keydown", (e) => {
        holdingKey = e.key
    })

    document.addEventListener("keyup", (e) => {
        clear()
    })

    window.addEventListener('blur', function () {
        clear()
    })
}
