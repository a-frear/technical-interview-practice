// Given a document, implement an algorithm to count 
//the number of word occurrences.
//input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
//output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

// First, we split the string by spaces in a
// Then, take a variable count = 0 and in every true condition we increment the count by 1
// Now run a loop at 0 to length of string and check if our string is equal to the word
// if condition true then we increment the value of count by 1 and in the end we print the value of count.

function wordCount(str) {
    const map = new Map()
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const newStr=str.replace(regex, '')
    const wordArray = newStr.split(' ')

    for (let i=0; i<wordArray.length; i++) {
        let word = wordArray[i]
        let val= 1
        if (map.get(word)) {
            map.set(word, val++)
        }
        map.set(word, val)
    }
    console.log(map)
}

wordCount("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?")

//Algorithm to delete all duplicates from a linked list

const LinkedList = require('./binaryLinkedLists')

const LL  = new LinkedList()
LL.insertFirst(1)
LL.insertLast(1)
LL.insertLast(1)
LL.insertLast(2)
LL.insertLast(3)
LL.insertLast(3)
LL.insertLast(3)

console.log(LL)

function deleteDupes(list) {
    if(!list.head) {
        return null
    }
    let currNode=list.head
    let nextNode=currNode.next
    while(nextNode){
    if(currNode.value !== nextNode.value) {
        currNode.next = nextNode
        currNode= nextNode
    }
    nextNode = nextNode.next
}   
    currNode.next = null
    return list
}

console.log(deleteDupes(LL))

// Given a string, write an algorithm to count the number of words 
// in the string that are palindromes. The output must include 
// a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

const HashMap = require('./Hashmap')

function checkPalin(str){
    let map = new Map()
    //use hash table to store letters
    let charCount = 0
    let lowercase = str.toLowerCase()
    let newStr = lowercase.split('')
    
  
    for (let i =0; i < newStr.length; i++) {
      let c = newStr[i]
      if (map.get(c) === undefined) {
        map.set(c, true)
        //add to hash table if key does not exist
      } else {
        map.delete(c)
        //if we see the same letter again, delete from hash table
      }
      charCount++;
    }
    if (charCount % 2 === 0) {
       //if the charCount is even, the hash map should be 0, which means the string is a palindrome permutation
       return map.size === 0;
    } else {
      //or there should only be 1 key left in order to be a palindrome permutation
      return map.size === 1;
      }
}

console.log(checkPalin('dad'))

function checkSentence(sentence){
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const newSentence=sentence.replace(regex, '')
    const words = newSentence.split(' ')
    const palindromes = []

    for (let i=0; i<words.length; i++){
        let newStr= words[i]
        if (checkPalin(newStr)) {
            palindromes.push(words[i])
        }
    }
    console.log(palindromes)
    return palindromes
}

console.log(checkSentence('Dad gave mom a Tesla as a racecar'))

/* How does a Hash Table work?
Assume that you have an object and you want to assign 
a key to it to make searching easy. 
To store the key/value pair, you can use a simple array 
like data structure where keys (integers) can be used directly 
as an index to store values. However, in cases where the keys 
are large and cannot be used directly as an index, you should use hashing.

In hashing, large keys are converted into small keys by using hash functions. 
The values are then stored in a data structure called hash table. 
The idea of hashing is to distribute entries (key/value pairs) uniformly across 
an array. Each element is assigned a key (converted key). 
By using that key you can access the element in O(1) time. 
Using the key, the algorithm (hash function) computes an index that 
suggests where an entry can be found or inserted.

Hashing is implemented in two steps:

An element is converted into an integer by using a hash function. 
This element can be used as an index to store the original element, 
which falls into the hash table.
The element is stored in the hash table where it can be 
quickly retrieved using hashed key.

hash = hashfunc(key)
index = hash % array_size

In this method, the hash is independent of the array size 
and it is then reduced to an index 
(a number between 0 and array_size − 1) by using the mod operator (%).

*/

// Given 2 linked lists, where each node in each linked list 
// represents a character in a string, write a function compare() 
// that compares the 2 strings, i.e., it returns 0 if both strings are the same, 
// 1 if the 1st linked list is lexicographically greater, 
// and -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`

function compare(LL1, LL2){
    let currNode1 = LL1.head
    let currNode2= LL2.head
    while(currNode1 !== null && currNode2 !== null && currNode1.value === currNode2.value) {
        currNode1 = currNode1.next
        currNode2=currNode2.next
    }
    if (currNode1 != null && currNode2 != null) { 
        return (currNode1.value > currNode2.value ? 1 : -1); 
    } 
    if (currNode1 !== null && currNode2 === null) {
        return 1; 
    } 
    if (currNode1 == null && currNode2 != null) { 
        return -1; 
    } 
    return 0
}

const bilbo = new LinkedList()
bilbo.insertFirst('b')
bilbo.insertLast('i')
bilbo.insertLast('l')
bilbo.insertLast('b')
bilbo.insertLast('o')
bilbo.insertLast('o')

const bilbo2 = new LinkedList()
bilbo2.insertFirst('b')
bilbo2.insertLast('i')
bilbo2.insertLast('l')

function display(list) {
    let output = ''
    let currNode = list.head
    while (currNode !== null) {
      output += currNode.value
      if (currNode.next !== null) {
        output += ' -> '
      }
      currNode = currNode.next
    }
    return output
  }

  console.log(display(bilbo))
  console.log(display(bilbo2))

console.log(compare(bilbo, bilbo2))

// Given a list of integers find the mode and the frequency of the mode. 
// The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

//Mode is the value which occurs most frequently in a set of observations. 
//For example, {6, 3, 9, 6, 6, 5, 9, 3} the Mode is 6, as it occurs most often.

function getMax(table){
    //I need to find the highest value and return the key and the value
}

function findMode(arr) {
    const modeMap= new Map()
    for (let i=0; i<arr.length; i++){
        let num = arr[i]
        let val = 1
        if (modeMap.get(num)) {
            modeMap.set(num, val++)
        } else {
            modeMap.set(num, val)
        }
    }
    return
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))


