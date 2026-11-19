class Account{
    constructor(name, accNo, balance) {
        this.name = name
        this.account_number = accNo
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        if (amount>this.balance){
            console.log("Insufficient balance")
        }else {
            this.balance -=amount
        }
    }

    printDetails(){
        console.log(`${this.name} ${this.account_number} USD ${this.balance}`)
    }
}
//objects
let acc1 = new Account("Jane", "001", 10000)
let acc2 = new Account("Ahmed", "002", 12000)
acc1.deposit(6000)
acc1.printDetails()
acc1.withdraw(300)
acc1.printDetails()

//copy the link
//git init