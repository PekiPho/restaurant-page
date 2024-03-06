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
    let box=new Array(2);

    let phoneTxt=document.createElement('p');
    phoneTxt.classList.add('restxt');
    phoneTxt.textContent='+381 123456789';

    let mapTxt=document.createElement('p');
    mapTxt.classList.add('restxt');
    mapTxt.textContent='Your Location';
    for(let i=0;i<2;i++)
    {
        image[i]=document.createElement('img');
        image[i].classList.add('icon');

        box[i]=document.createElement('div');
        box[i].classList.add('box','flex-lay');

        box[i].appendChild(image[i]);
    }
    image[0].src="../assets/phone-in-talk.svg";
    image[1].src="../assets/map-marker-outline.svg";
    box[0].appendChild(phoneTxt);
    box[1].appendChild(mapTxt);

    container.appendChild(box[0]);
    container.appendChild(box[1]);
    container.appendChild(inputs);

    content.appendChild(container);
}