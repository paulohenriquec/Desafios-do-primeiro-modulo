const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){
    user.transactions.push(transaction);

    if(transaction.type=="credit"){
        user.balance = user.balance + transaction.value;
    }else{
        user.balance = user.balance - transaction.value;
    }
};

function getHigherTransactionByType(type){
    let higherValue = 0;
    let higherTransaction;
    for(let transaction of user.transactions){

        if(transaction.type == type){
            if(transaction.value > higherValue){
                higherValue = transaction.value;
                higherTransaction = transaction;
            }
        }
    }
    return higherTransaction;
};

function getAverageTransactionValue(){
    const length = user.transactions.length;
    let sum = 0;

    for(let transaction of user.transactions){
        sum = sum + transaction.value;
    }
    return sum/length;
};

function getTransactionCount(){
    let credit = 0;
    let debit = 0;
    for(let transaction of user.transactions){
        if(transaction.type=="credit"){
            credit++;
        }else{
            debit++;
        }
    }
    console.log(`credit: ${credit}, debit: ${debit}`);
};


createTransaction({type:"credit", value: 50});
createTransaction({type:"credit", value: 120});
createTransaction({type:"debit", value: 80});
createTransaction({type:"debit", value: 30});

console.log(user.balance);


console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));


console.log(getAverageTransactionValue());

getTransactionCount();
