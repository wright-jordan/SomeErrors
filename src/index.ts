export type SomeErrors<E extends Error> = {
  errors: E[];
  has(errType: typeof Error): boolean;
  get(errType: typeof Error): Error | null;
  set(err: E): void;
};

export function New<E extends Error>(errors: E[]): SomeErrors<E> {
  return {
    has,
    get,
    set,
    errors,
  };
}

function has<E extends Error>(
  this: SomeErrors<E>,
  errType: typeof Error
): boolean {
  return this.errors.some((err) => err instanceof errType);
}

function get<E extends Error>(
  this: SomeErrors<E>,
  errType: typeof Error
): Error | null {
  return this.errors.find((err) => err instanceof errType) || null;
}

function set<E extends Error>(this: SomeErrors<E>, err: E): void {
  this.errors.push(err);
}
