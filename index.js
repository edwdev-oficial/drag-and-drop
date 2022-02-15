const container = document.querySelector('.container');
let contents,
    contentMov,
    insertBefore,
    arr;

for(let i = 1; i<=4; i++) {
    let content = document.createElement('div');
    content.classList.add('content', `content${i}`);
    content.textContent = `content ${i}`;
    content.setAttribute('draggable', true);
    container.appendChild(content);
    contents = document.querySelectorAll('.content');
}

Array.from(contents).map(content => {
    content.addEventListener('dragstart', dragstart);
    content.addEventListener('dragenter', dragenter);
    content.addEventListener('dragend', dragend);
});


function dragstart() {
    this.style.opacity = '0.4';
    this.dropEffect = 'copy';
    arr = Array.prototype.slice.call(container.children);
    contentMov = this;
    positionContent = arr.indexOf(contentMov);
};

function dragend() {
    this.style.opacity = '1';
    container.insertBefore(contentMov, container.children[insertBefore]);
}

function dragenter(){
    insertBefore = arr.indexOf(this);
    if(positionContent < insertBefore)
        insertBefore++
}