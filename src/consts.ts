export const obj = {
    foo: {
      bar: 42,
    },
  } as const;

  export type Object = keyof typeof obj;