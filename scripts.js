const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const Transaction = {
    all: [
        {
            description: 'Luz',
            amount: -50001,
            date: '23/01/2021'
        },
        {
            description: 'Website',
            amount: 500000,
            date: '23/01/2021'
        },
        {
            description: 'Internet',
            amount: -20012,
            date: '23/01/2021',
        },
        {
            description: 'App',
            amount: 200000,
            date: '23/01/2021',
        }
    ],    

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()
    },

    incomes() {
        let income = 0
        //pegar todas as transacoes 
        //para cada transacao,
        transactions.forEach(transaction =>  {
            //se ela for maior que zero 
            if (transaction.amount > 0) {
                //somar a uma variavel e retornar a variavel 
                income += transaction.amount
            }
        })
        return income
    },

    expenses() {
        let expense = 0
        //pegar todas as transacoes 
        //para cada transacao,
        transactions.forEach(transaction => {
            //se ela for menor que zero
            if (transaction.amount < 0) {
                //somar a uma variavel e retornar a variavel
                expense += transaction.amount
            }
        })
        return expense
    },

    total() {
        return Transaction.incomes() + Transaction.expenses()
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        // Adicionando dentro do recém criado tr (table row) os 
        // elementos td que estão na função innerHTMLTransaction
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        // Retornando os elementos td. Nesse caso precisa ter o mesmo nome da constante
        return html
    },

    updateBalance() {
        document
                .getElementById('incomeDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
                .getElementById('expenseDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
                .getElementById('totalDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

const Form = {    

    formatData() {
        console.log('formatei')
    },

    validateFields() {
        console.log('validei')
    },
    
    submit(event) {
        event.preventDefault()

        //validar se todos os campos do modal foram preenchidos
        Form.validateFields()
        //formatar os dados para salvar
        Form.formatData()
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        DOM.updateBalance
    },

    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()


//pesquisar arrow function
//foreach
//e dois pontos no javascript