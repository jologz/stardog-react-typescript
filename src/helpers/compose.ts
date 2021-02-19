export const composeCoupleFn = (f: Function, g: Function) => (...args: any) =>
    f(g(...args))

export const compose = (...fns: Function[]) => fns.reduce(composeCoupleFn)

export const pipe = (...fns: Function[]) => fns.reduceRight(composeCoupleFn)
