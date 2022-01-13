
function myContainer(){
	const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	for(let i=0;i<5;i++){
	 const newLi = document.createElement('li');
	 newLi.className="task";

  newLi.innerHTML = tasks[i];
     const ol = document.querySelector('ol')
  ol.appendChild(newLi);
}
}
myContainer()