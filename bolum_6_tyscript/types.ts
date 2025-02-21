let a:number =5;
let b: string = 'a';
let c:boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a', true];
let h: [string, number, boolean] = ['a', 2,true]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=5, eft=2};

let kredi = Payment.kredi; //0
let havale = Payment.havale; //5
let eft = Payment.eft; //2
