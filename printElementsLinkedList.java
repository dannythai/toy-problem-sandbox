void Print(Node head) {
  Node current = head;
  while(current != null) {
    System.out.println(current.data);
    current = current.next;
  }
}
