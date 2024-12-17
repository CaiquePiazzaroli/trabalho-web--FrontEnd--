let singleRoom = document.querySelectorAll(".single-room");


singleRoom.forEach((room) => {
    room.addEventListener("mouseover", () => {

        //Aumenta o tamanho da imagem
        room.children[0].children[0].style.scale="1.1";
        room.children[0].children[0].style.transition="1s";

        //Exibe o botão de alugar
        room.children[0].children[1].children[1].style.visibility="visible";
        room.children[0].children[1].children[1].style.visibility="visible";
        room.children[0].children[1].children[1].style.transition="1s";
    })

    room.addEventListener("mouseout", () => {

        //Reajusta o tamanho da imagem para a escala normal
        room.children[0].children[0].style.scale="1.0";
        room.children[0].children[1].children[1].style.visibility="hidden";

        //
        room.children[0].children[0].style.transition="1s";
        room.children[0].children[1].children[1].style.transition="0.1s";
    })
})