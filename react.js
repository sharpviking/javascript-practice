import ExpenseItem from "./react3";

function Expenses() {

    const expenses = [
        {
            id: 'b1',
            title: 'News Paper',
            amount: 4.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'b2', title: 'New radio', amount: 99.49, date: new Date(2021, 2, 12) },
        {
            id: 'b3',
            title: 'Health Insurance',
            amount: 194.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'b4',
            title: 'New cycle',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]


    return (
        <div>
            <div className="expenses">
                <ExpenseItem>
                    title = {expenses[0].title}
                    amount = {expenses[0].amount}
                    date = {expenses[0].date}
                </ExpenseItem>
                <ExpenseItem>
                    title = {expenses[1].title}
                    amount = {expenses[1].amount}
                    date = {expenses[1].date}
                </ExpenseItem>
                <ExpenseItem>
                    title = {expenses[2].title}
                    amount = {expenses[2].amount}
                    date = {expenses[2].date}
                </ExpenseItem>
                <ExpenseItem>
                    title = {expenses[3].title}
                    amount = {expenses[3].amount}
                    date = {expenses[3].date}
                </ExpenseItem>
            </div>
        </div>

    )
};

export default Expenses;