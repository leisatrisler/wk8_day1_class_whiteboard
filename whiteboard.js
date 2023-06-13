const assert= require('assert')

// Given a list of numbers containing one duplicate and only one duplicated value,
// return the duplicated value.  That value will only be duplicated once.
// Input:
// [1, 2, 3, 2, 4]
// Output:
// 2
// Input:
// [5,8,5,2,3,4]
// Output:
// 5

//=====================================
// Write your function named "solution" here:

//=====================================

try{
    assert(solution([1, 2, 3, 2, 4])===2)
    assert(solution([5,8,5,2,3,4])===5)
    assert(solution([0,0,1,2,3])===0)
    assert(solution([-3,-5,-7,-7])===-7)
    assert(solution([1,5,2,11,50,55,55])===55)
    console.log("PASSED")
}catch{
    console.log("FAILED")
}

function solution(nums){
    let count = {};
    for (let num of nums){
        if (num in count){
            count[num]++;
        } else{
            count[num] = 1;
        };
    };
    for (let num in count){
        if (count[num] === 2){
            return parseInt(num)
        };
    };
};