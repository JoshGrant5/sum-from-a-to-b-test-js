/* Make sum a recursive function that sums all the whole numbers from fromN to toN.
So if we called the function with the following values: sum(3, 7), it would sum 3 + 4 + 5 + 6 + 7 and output 25.
For this exercise, we can safely assume that fromN will always be less than or equal to toN. */

function sum(fromN, toN) {
  if (fromN !== toN) {
    return fromN + sum(fromN + 1, toN);
  } else {
    return fromN;
  }
}

module.exports = sum;

/*
sum(3,7)

3 = 7? -> no -> return 3 + sum(4,7)   (main will return 3 + loop1)      main function will return (3+22 = 25)
4 = 7? -> no -> return 4 + sum(5,7)   (loop 1 will return 4 + loop 2)   loop 2 = 18, so loop1 = (4+18 = 22)
5 = 7? -> no -> return 5 + sum(6,7)   (loop 2 will return 5 + loop 3)   loop 3 = 13, so loop 2 = (5+13 = 18)
6 = 7? -> no -> return 6 + sum(7,7)   (loop 3 will return 6 + loop 4)   loop 4 = 7, so loop 3 = (6+7 = 13)
7 = 7? -> yes! -> return 7            (loop 4 will return 7)

so the total function is returning 3 + 4 + 5 + 6 + 7 = 25
*/
