import express from 'express';

const app = express();
const PORT = 3001;


const grocery = [
    { Item: "Bread", Quantity: "1 Loaf", Price: "$4.50" },
    { Item: "Milk", Quantity: "3L",Price: "$6.79" },
    { Item: "Yogurt", Quantity: "500 Gm", Price: "$2.50" }];

const semester = [
    { CourseName: "Web Programming", Semester: "Fall 2024", Duration: "4 months" },
    { CourseName: "Python", Semester: "Spring 2024",Duration: "4 months" },
    { CourseName: "Psychology", Semester: "Spring 2024", Duration: "4 months" }];

const expenses = [
    { ExpenseItem: "Grocries", Amount: "$250" },
    { ExpenseItem: "Rent", Amount: "$500" },
    { ExpenseItem: "Entertainment", Amount: "$50" }];

app.get("/",(req,res) =>{
    res.render('homepage.ejs')
} 
)

app.get("/grocery",(req,res) =>{
    res.render('grocery.ejs',{grocery:grocery})
} 
)

app.get("/semester",(req,res) =>{
    res.render('semester.ejs',{semester:semester})
} 
)

app.get("/expenses",(req,res) =>{
    res.render('expenses.ejs',{expenses:expenses})
} 
)

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
    });