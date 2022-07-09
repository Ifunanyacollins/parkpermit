

function numberFormat(count:number) {
    return Intl.NumberFormat("de-DE").format(count)
}

export default numberFormat;