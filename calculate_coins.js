//Blackboard User: mvharriett
//Date: 11-04-2020
//File: calculate_coins.js
//Purpose: External javascript file for index.html


// Assign function handleCalculateClick to the click event of the calculate button
document.getElementById("calculate").onclick = handleCalculateClick;

//set global variables
var cents, quarters, dimes, nickels, pennies = 0;


// function to determine number of coins based on cents value
function handleCalculateClick(e)
{
    //get value of cents text box
    cents = parseInt(document.getElementById("cents").value);

    //check to make sure the value enter for cents is between 1 and 99
    if (cents <= 0 || cents >= 100)
    {
        alert('Number of Cents must be at least 1 and less than 99');
    }
    //check to make sure the value enter for cents is not null or non number
    else if (Number.isNaN(cents))
    {
        alert('Please enter a numeric value between 1 and 99.');
    }
    //if validations pass, pass cents value to new function for coin breakdown
    else
    {
        determineCoins(cents);
    }
}

function determineCoins(cents)
{
    // To determine coin breakdown, start with the largest value, which is quarter, then work our way
    //down the line, dimes, nickels, pennies.


    // if cents value is greater than 24, then there should be a minimum of one quarter
    if (cents > 24)
    {
        // divide number of cents by 25 to determine number of quarters that fit into cents.
        //Use floor to round down to integer
        quarters = Math.floor(cents / 25);
        //assign number of quarters to quarter text box
        document.getElementById("quarters").value = quarters;
        //Use mod function to determine the cents value after being divide by quarter value.
        //Use floor function to round down to integer
        cents = Math.floor(cents % 25);
    }

    // if cents value is greater than 10, then there should be a minimum of one dime
    if (cents > 9)
    {
        // divide number of cents by 10 to determine number of dimes that fit into cents.
        //Use floor to round down to integer
        dimes = Math.floor(cents / 10);
        //assign number of dimes to dimes text box
        document.getElementById("dimes").value = dimes;
        //Use mod function to determine the cents value after being divide by dime value.
        //Use floor function to round down to integer
        cents = Math.floor(cents % 10);
    }

    // if cents value is greater than 5, then there should be a minimum of one nickel
    if (cents > 4)
    {
        // divide number of cents by 5 to determine number of nickels that fit into cents.
        //Use floor to round down to integer
        nickels = Math.floor(cents / 5);
        //assign number of nickels to nickels text box
        document.getElementById("nickels").value = nickels;
        //Use mod function to determine the cents value after being divide by nickel value.
        //Use floor function to round down to integer
        cents = Math.floor(cents % 5);
    }

    //anything less than 5 but greater than zero should be the leftover amount of cents in pennies
    if (cents > 0)
    {
        // divide number of cents by 1 to determine number of pennies that fit into cents.
        //Use floor to round down to integer
        pennies = Math.floor(cents / 1);
        //assign number of pennies to pennies text box
        document.getElementById("pennies").value = pennies;
    }
}

