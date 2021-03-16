//implement a queue 
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
        this.s1 = []; // main stack
        this.s2 = []; // temp stack
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
        if (this.s1.length < 1) {
        this.s1.push(x);
        return;
    }
    while(this.s1.length !== 0) {
        this.s2.push(this.s1.pop())
    }
    
    this.s2.push(x)
    while(this.s2.length !== 0) {
        this.s1.push(this.s2.pop())
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1[this.s1.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length < 1
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */