export type SomeErrors<E extends Error> = {
    errors: E[];
    has(errType: typeof Error): boolean;
    get(errType: typeof Error): Error | null;
    set(err: E): void;
};
export declare function New<E extends Error>(errors: E[]): SomeErrors<E>;
