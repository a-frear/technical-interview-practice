/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
class _Node {
    constructor(val, next) {
        this.value = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = new _Node(item, null)
        }
    }
    insertBefore(valBefore, item){
      //if list is empty
      if (!this.head) {
        return null
      }
      //if no head
      if (this.head === null) {
        this.insertFirst(item)
      }
      //if at head
      if (this.head.value === valBefore) {
        let temp = this.head
        this.head = new_Node(item, temp)
        return
      }
      let currNode = this.head;
      let next
      let previousNode
      while (currNode.value !== valBefore) {
        previousNode = currNode
        currNode = currNode.next
      }
      previousNode.next = new _Node(item, currNode)
    }
    insertAfter(valAfter, item) {
      if (!this.head) {
        return null
      }
      if (this.head === null) {
        this.insertFirst(item)
      }
      //if at head
      if (this.head.value === valAfter) {
        let temp = this.head.next
        this.head.next = new_Node(item, temp)
        return
      }
      let currNode = this.head
      let next = ''
      while (currNode.value !== valAfter) {
        currNode = currNode.next
      }
      if (currNode === null) {
        this.insertLast(item)
        return
      }
      next = currNode.next
      currNode.next = new _Node(item, next)
    }
    insertAt(position, item) {
      if (this.head === null) {
        this.insertFirst(item)
        return
      } else {
        let currNode = this.head
        let index = 0
        while (currNode.next !== null && position != index) {
          currNode = currNode.next
          index++
        }
        const temp = new _Node(item, currNode.next)
        currNode.next = temp
      }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
          return null;
        }
    
        while (currNode.value !== item) {
          if (currNode.next === null) {
            return null;
          } else {
            currNode = currNode.next;
          }
        }
        return currNode;
      }
      remove(item) {
        let previousNode = this.head;
        let currNode = this.head;
    
        if (!this.head) {
          return null;
        }
        if (this.head.value === item) {
          this.head = this.head.next;
          return;
        }
        while (currNode.value !== item && currNode !== null) {
          previousNode = currNode;
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log("Item does note exist")
          return
        }
        previousNode.next = currNode.next
      }
}

function main(){
    const LL = new LinkedList()
    LL.insertFirst(1)
    LL.insertLast(0)
    LL.insertLast(1)
    
    // let currNode=LL.head 
    // const str = ''
    // while(currNode) {
    //     str.push(currNode.value)
    //     currNode=currNode.next
    // }
    // let decimal = parseInt(str, 2)
    // return decimal
    let res = 0
    let currNode = LL.head
    while(currNode) {
        if (currNode.value==1) {
            res+=1
        }
        currNode = currNode.next
        res*=2
    }
    return res/2
}

console.log(main())

//both of these solutions are O(n)

module.exports = LinkedList

