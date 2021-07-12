class HoldNumber {
  constructor(public data: number) {}
}

class HoldString {
  constructor(public data: string) {}
}

class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) {}
}

const holdString = new HoldString('adsf');
console.log('init holdstring is', holdString.data);

holdString.data = 'adsfasdf';
console.log('holdstring new', holdString.data);

const holdNumber = new HoldAnything<number>(1);

holdNumber.data = 123;
