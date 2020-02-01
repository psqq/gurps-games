
export function roll(n = 1, adds = 0) {
    let a = n;
    let b = 6 * n;
    return Math.floor(a + Math.random() * (b - a + 1)) + adds;
}
