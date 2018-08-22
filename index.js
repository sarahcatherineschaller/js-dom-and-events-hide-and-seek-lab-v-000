function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget(nested) {
  return document.querySelector('#nested .target')
};

function deepestChild() {
  let grandNode = document.getElementById('grand-node');
  let nextNode = grandNode.children[0];
  while (nextNode) {
    grandNode = nextNode
    nextNode = grandNode.children[0]
  }
  return grandNode
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li')
  for (let i = 0, i < rankedList.length; i++) {
    let rankedListValue = parseInt(rankedList[i].innerHTML);
    rankedList[i].innerHTML = rankedListValue + n;
  }
}
