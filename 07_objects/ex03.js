let salaries = {
    Imad: 3500,
    Hamid: 2700,
    Mansour: 4200
}
/**
 * Write the code to sum all salaries and store in the variable sum.
 * If salaries is empty, then the result must be 0.
 */

    let sum=0;

    for(ob in salaries)
        sum+=salaries[ob];
    console.log(sum)

