export function New(errors) {
    return {
        has,
        get,
        set,
        errors,
    };
}
function has(errType) {
    return this.errors.some((err) => err instanceof errType);
}
function get(errType) {
    return this.errors.find((err) => err instanceof errType) || null;
}
function set(err) {
    this.errors.push(err);
}
