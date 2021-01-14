const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener('keyup', (e) => {
        console.log(e.key, document.activeElement.id);
    });
});

