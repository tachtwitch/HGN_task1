// GET <domain>/api/classify-number?number={number}
import axios from "axios";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

const isPrime = num => {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if(num % i === 0) return false;
            }
            return num > 1;
        }


const isPerfect = n => {
if (!Number.isInteger(n) || n <= 0) {
    return false;
}

let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sum += i;
    }
}
const isPerfect = sum === n;
return isPerfect;
}

const digitsum = (number) => {
    const n = number.toString().split('');
    const sum = n.reduce(
        (acc, digit) =>
            parseInt(acc) + parseInt(digit), 0);
 
    return sum;
}

const isArmstrong = (number) => {
    let n = number.toString().split('');
    let l = n.length;
    let sum = n.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), l), 0);
 
    if (sum == number) {
        return true;
    }
    else {
        return false;
    }
}
app.get('/api/classify-number', async (req,res)=>{
    try {
        const number = req.query.number;
        const properties= [];

        if(!number || typeof(number) != 'number'){
            res.status(400).json({number:'alphabet',error: true})
        }
            if (isArmstrong(number)){
                properties.push('armstrong')
            }
            if ((number%2==0)){
                properties.push('even');}
            else{
                properties.push('odd');
            }
            
        
        const response = await axios.get(`http://numbersapi.com/${number}/math?`);
        res.json(
            {
                number: parseInt(number),
                is_prime:isPrime(number),
                is_perfect:isPerfect(number),
                properties:properties,
                digit_sum:digitsum(number),
                fun_fact:response.data
            }
        );
        
        

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
});