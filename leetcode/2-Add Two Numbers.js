/*
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let l3 = head;
  let carry = 0;
  while (l1 !== null && l2 !== null) {
    const current = l1.val + l2.val + carry;
    const newNode = new ListNode(current % 10);
    carry = Math.floor(current / 10);
    l1 = l1.next;
    l2 = l2.next;
    l3.next = newNode;
    l3 = newNode;
  }

  while (l1 !== null && l2 === null) {
    const current = l1.val + carry;
    const newNode = new ListNode(current % 10);
    carry = Math.floor(current / 10);
    l1 = l1.next;
    l3.next = newNode;
    l3 = newNode;
  }

  while (l2 !== null && l1 === null) {
    const current = l2.val + carry;
    const newNode = new ListNode(current % 10);
    carry = Math.floor(current / 10);
    l2 = l2.next;
    l3.next = newNode;
    l3 = newNode;
  }

  if (carry > 0) {
    l3.next = new ListNode(carry);
  }

  return head.next;
};
