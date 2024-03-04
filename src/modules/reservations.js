export default function generateReserve(){
    let ReservationBtn=document.querySelector('.Reservations');
    ReservationBtn.disabled=true;
    let content=document.querySelector('#content');
    let container=document.createElement("div");
    container.classList.add('container');
    let containerInput=document.createElement('div');
    containerInput.classList.add('container-input');
    let inputs=document.createElement('input');
    let image= new Array(2);
    for(let i=0;i<2;i++)
    {
        image[i]=document.createElement('img');
        image[i].classList.add('icon');
    }
    image[0].src="../assets/phone-in-talk.svg";
    image[1].src="../assets/map-marker-outline.svg";


    container.appendChild(image[0]);
    container.appendChild(image[1]);

    content.appendChild(container);
}