const weakMap = new WeakMap();

export function queryAPI({ protocol, name }) {
  if (typeof protocol !== 'string' || typeof name !== 'string') {
    throw new Error('Invalid endpoint');
  }

  let counter = weakMap.get(this)?.[name] || 0;
  weakMap.set(this, { ...(weakMap.get(this) || {}), [name]: counter + 1 });

  if (counter + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }

  return counter + 1;
}
