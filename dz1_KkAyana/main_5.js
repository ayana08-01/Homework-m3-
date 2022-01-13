for (let e of document.body.querySelectorAll("div")) {
    if (e.textContent.startsWith("Cola 1.5 l"))
        e.remove();
    if (e.textContent.startsWith("Chocolate bar")) {
        let newChild = document.createElement("span");
            newChild.className = "qty";
            newChild.textContent = "x 4";
            e.replaceChild(newChild, e.firstElementChild);
            e.replaceChild(document.createTextNode("Canned Fish"), e.firstChild); // Исправлено
    }
}