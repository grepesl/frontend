const identity = <Type1>(data: Type1): Type1 => {
    return data;
  }
  
  const res0 = identity(5);
  const res1 = identity("Zodis");
  const res2 = identity({ name: "Piotr" });
  
  const identityArray = <Type1>(data: Type1): Type1[] => {
    // const result: Type1[] = [data, data, data, data, data];
    const result: Type1[] = [0,1,2,3,4].map(() => data);
    return result;
  }
  
  const res3 = identityArray(5);
  const res4 = identityArray("Zodis");
  const res5 = identityArray({ name: "Piotr" });
  
  class GenericNumber<Type> {
    zeroValue: Type;
    constructor(zeroValue: Type){
      this.zeroValue = zeroValue;
    }
    // nelabai asmeniškai patinka, kad tik toks sprendimas
    add(x: Type, y: Type): Type | void {
      if (typeof x === 'number' && typeof y === 'number') {
        return (x + y) as Type;
      } else if (typeof x === 'string' && typeof y === 'string') {
        return (x + y) as Type;
      }
      throw new Error('Both arguments must be of the same type: number or string');
    };
  }
  
  const myGenericNumber = new GenericNumber<number>(0);
  const myGenericString = new GenericNumber<string>('Zodis');
  
  const reverse = <T>(array: T[]): T[] => {
    return array.reverse();
  }
  
  const reversed1 = reverse([1,2,3,4,5,6]);
  const reversed2 = reverse(['a','b','c','d']);
  console.log(reversed1, reversed2);
  
  const orderWords = (array: string[], order: "ASC" | "DESC"): string[] => {
    if(order === "ASC"){
      return array.sort((a, b) => a.localeCompare(b));
    } else {
      return array.sort((a, b) => b.localeCompare(a));
    }
  }
  const orderNumbers = (array: number[], order: "ASC" | "DESC"): number[] => {
    if(order === "ASC"){
      return array.sort((a, b) => a - b);
    } else {
      return array.sort((a, b) => b - a);
    }
  }
  const order = <T extends string | number>(array: T[], order: "ASC" | "DESC"): T[] => {
    if(order === "ASC"){
      if(array.every(el => typeof el === 'string')){
        return orderWords(array, "ASC") as T[];
      } else if(array.every(el => typeof el === 'number')){
        return orderNumbers(array, "ASC") as T[];
      } else { 
        return array;
      }
    } else {
      if(array.every(el => typeof el === 'string')){
        return orderWords(array, "DESC") as T[];
      } else if(array.every(el => typeof el === 'number')){
        return orderNumbers(array, "DESC") as T[];
      } else {
        return array;
      }
    }
  }
  const nrIsrikiuotas = order([4,65,181,981,6,16,1,61], "ASC");
  const nrIsrikiuotas0 = order([4,65,181,981,6,16,1,61], "DESC");
  const strIsrikiuotas = order(['a','b','c','g','d','ew','yt','p'], 'ASC');
  const strIsrikiuotas0 = order(['a','b','c','g','d','ew','yt','p'], 'DESC');
  console.log(nrIsrikiuotas, nrIsrikiuotas0, strIsrikiuotas, strIsrikiuotas0);
  
  // Generic panaudojimas objekto viduje
  
  type Person<T> = {
    id: string,
    name: string,
    age: number,
    metadata: T
  }
  const person0: Person<(string|number)[]> = {
    id: 'sd6fg54',
    name: "Petras",
    age: 30,
    metadata: ['vyras', 180]
  }
  type MetaInfo = {
    lytis:string,
    ugis:number
  }
  const person1: Person<MetaInfo> = {
    id: 'sd6fg54',
    name: "Petras",
    age: 30,
    metadata: {
      lytis: 'vyras',
      ugis: 180
    }
  }
  
  // Klasė su keliais generic'ais
  class Asmuo<T, U>{
    private vardas: T;
    pavarde: T;
    private amzius: U;
    constructor(vardas: T, pavarde: T, amzius: U){
      this.vardas = vardas;
      this.pavarde = pavarde;
      this.amzius = amzius;
    }
    setVardas(naujasVardas: T): void{
      this.vardas = naujasVardas;
    }
    getVardas(): T{
      return this.vardas;
    }
    setAmzius(naujasAmzius: U): void{
      this.amzius = naujasAmzius;
    }
    getAmzius(): U{
      return this.amzius;
    }
  }
  const asmuo0 = new Asmuo('Rokas', 'B', 28);
  asmuo0.setAmzius(29);
  const asmuo1 = new Asmuo('Jonas', 'A', 'Dvidešimt')
  asmuo1.setAmzius('Dvidešimt du');
  
  // API request su generic
  type ApiResponse<Data = 'default tekstas'> = {
    data: Data,
    isError: boolean
  }
  type User = {
    name: string,
    surname: string,
    age: number,
  };
  type Post = {
    heading: string,
    description: string,
  }
  
  const userResponse: ApiResponse<User> = {
    data: {
      name: "",
      surname: "",
      age: 0
    },
    isError: false
  }
  const postResponse: ApiResponse<Post> = {
    data: {
      heading: "Savaitės įvykis",
      description: ""
    },
    isError: false
  }
  const dunnoResponse: ApiResponse = {
    data: "default tekstas",
    isError: true
  }