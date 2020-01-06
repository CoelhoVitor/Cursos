export function executionTimeLog(seconds: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      let unity = "ms";
      let divider = 1;

      if (seconds) {
        unity = "s";
        divider = 1000;
      }

      console.log("-----------------------");
      console.log(
        `Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`
      );

      const t1 = performance.now();
      const ret = originalMethod.apply(this, args);

      console.log(`Resultado do método: ${JSON.stringify(ret)}`);

      const t2 = performance.now();

      console.log(`${propertyKey} demorou ${(t2 - t1) / divider} ${unity}`);
      console.log("-----------------------");

      return ret;
    };

    return descriptor;
  };
}
