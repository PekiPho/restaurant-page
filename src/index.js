import generateHome from "./modules/home";
import generateEvent from "./modules/events";
import generateReserve from "./modules/reservations";


let HomeBtn=document.querySelector('.Home');
let ReservationBtn=document.querySelector('.Reservations');
let EventBtn=document.querySelector('.Events');

HomeBtn.addEventListener('click',generateHome);
ReservationBtn.addEventListener('click',generateReserve);
EventBtn.addEventListener('click',generateEvent);