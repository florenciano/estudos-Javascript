// gerando itens de paginacao
var urlLink = [
	{ url: "http://blackboard.insper.com/page1" },
	{ url: "http://blackboard.insper.com/page2" },
	{ url: "http://blackboard.insper.com/page3" },
	{ url: "http://blackboard.insper.com/page4" },
	{ url: "http://blackboard.insper.com/page5" }
]

var divPagination = document.createElement("div");
divPagination.className = "pagination";

for(i = 0; i < urlLink.length; i++) {
	var tagLink = document.createElement("a");

	tagLink.setAttribute("href", urlLink[i].url);
	tagLink.textContent = i + 1;

	divPagination.appendChild(tagLink);
}
// poderia inserir em qualquer elemento do DOM
document.body.appendChild(divPagination);