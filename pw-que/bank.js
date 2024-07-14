//Create a BankAccount class in *avaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

class BankAccount {
    constructor(AccountHolder,initialBalance){
        this.AccountHolder = AccountHolder
        this.balance = initialBalance
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposit successful ${amount} , Balance : ${this.balance}`)
        }
        else{
            console.log("Enter a valid Amount")
        }
    }

    Withdraw(amount){
        if(amount > 0){
            if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw successful ${amount}  , New Balance : ${this.balance}`)
        }else{
            console.log("Insufficient balance")
        }
    }
}

    checkBalance(amount){
        console.log(`Account balance for ${this.AccountHolder} is ${this.balance}`)
    }
}
const myAccount = new BankAccount("Ashish" , 1000)

myAccount.checkBalance();
myAccount.deposit(100);
myAccount.Withdraw(600);
myAccount.Withdraw(700);
myAccount.checkBalance()