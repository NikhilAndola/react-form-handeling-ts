export {}
//Generic type
function Logging<Mango>(arg: Array<Mango>): Array<Mango> {
    console.log(arg.length);
    return arg;
  }
  
//   function identity<Type>(arg: Type): Type {
//     return arg;
//   }
  
  // let myIdentity: <Input>(arg: Input) => Input = identity;
//   let myIdentity: { <Type>(arg: Type): Type } = identity;
  
//   interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
//   }
  
//   function identity2<Type>(arg: Type): Type {
//     return arg;
//   }
//   let myIdentity2: GenericIdentityFn = identity2;

//   ************************************************************************************************
  interface GenericIdentityFn<Type> {
    (arg: Type): Type;
  }
   
  function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: GenericIdentityFn<number> = identity;


  class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal {
    numLegs: number = 4;
  }
   
  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
   
//   createInstance(Lion).keeper.nametag;
//   createInstance(Bee).keeper.hasMask;