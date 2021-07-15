class HoldNumber {
  constructor(public data: number) {}
}

class HoldString {
  constructor(public data: string) {}
}

class HoldAnything<T> {
  constructor(public data: T) {}
}

const holdString = new HoldString('adsf');
console.log('init holdstring is', holdString.data);

holdString.data = 'adsfasdf';
console.log('holdstring new', holdString.data);

class HoldNumber2 {
  data: number = 0;

  constructor() {}
}

const holdNumber2 = new HoldAnything<string>('abc');
holdNumber2.data = 'def';
console.log(holdNumber2.data);

const holdNumber23 = new HoldAnything('abc');
holdNumber23.data = 'def';
console.log(holdNumber23.data);
