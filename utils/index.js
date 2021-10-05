export function formatCurrency(figure) {
    return `₦${Number(figure).toLocaleString()}`;
}

export function formatNumber(figure) {
    return Number(figure).toLocaleString();
}
