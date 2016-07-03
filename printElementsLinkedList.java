// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

void Print(Node head) {
  Node current = head;
  while(current != null) {
    System.out.println(current.data);
    current = current.next;
  }
}
