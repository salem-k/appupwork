import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.page.html',
  styleUrls: ['./app2.page.scss'],
})
export class App2Page implements OnInit {
  currentNumber:any = '0';
  firstOperand:any = null;
  operator:any = null;
  waitForSecondNumber:any = false;

  constructor() { }

  ngOnInit() {
  }

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op:any , secondOp:any){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp;
      case '%': 
      return this.firstOperand / (secondOp * 100);
      case '-+':
      let resultt = Number(this.firstOperand)
      this.firstOperand =  -1 * resultt
      this.currentNumber = -1 * resultt
      return -1 * resultt;
      case '=':
      return secondOp;
    }
  }
  public getOperation(op: string){
    if(op=="-+")
    this.operator = op
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = Number(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
 
  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
