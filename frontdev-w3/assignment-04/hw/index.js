document.body.onload = addElement;

function addElement() {
  const para = document.createElement("p");
  para.textContent = "hi im red";
  para.style.color = "red";

  const para2 = document.createElement("p");
  para2.textContent = "hi im blue";
  para2.style.color = "blue";

  const div = document.createElement("p");
  div.textContent = "hi im a div";
  div.style.border = "1px solid black";

  const h1 = document.createElement("h1");
  div.textContent = "hello world";
  div.style.border = "1px solid black";
  div.appendChild(h1);

  document.body.appendChild(para);
  document.body.appendChild(para2);
  document.body.appendChild(div);
}
