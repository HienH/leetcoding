// Reverse Linked List
//
// Given the head of a singly linked list, reverse the list and return the new head.
//
// Examples:
//   1 -> 2 -> 3 -> 4 -> 5    becomes    5 -> 4 -> 3 -> 2 -> 1
//   1 -> 2                   becomes    2 -> 1
//   (empty)                  becomes    (empty)
//
// Constraints:
//   0 <= list length <= 5000

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  // TODO
  return head;
}

// Helpers (don't modify):
export function fromArray(arr: number[]): ListNode | null {
  let head: ListNode | null = null;
  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i]!, head);
  return head;
}

export function toArray(head: ListNode | null): number[] {
  const out: number[] = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}
