// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

struct Node
{
  int data;
  struct Node *next;
}

void Print(Node *head)
{
  Node *current = head;
  while(current != NULL) {
    cout << current -> data << endl;
    current = current -> next;
  }
}
