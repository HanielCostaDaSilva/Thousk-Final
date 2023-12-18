export abstract class Message {
    abstract sucess(msg: string): void;
  
    abstract error(msg: string): void;
  
    abstract inform(msg: string): void;
  
    abstract alert(msg: string): void;
  
  }
  