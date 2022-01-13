// document.querySelectorAll('p').forEach((elem) =>)

document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '<hr/>');
});