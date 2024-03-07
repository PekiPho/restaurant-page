import clear from "..";

export default function generateEvent(){
    clear();
    let EventBtn=document.querySelector('.Events');
    EventBtn.disabled=true;
    let content=document.querySelector('#content');
    let container=new Array(2);
    function event(title,date){
        this.title=title;
        this.date=date;
    }
    const ev=new Array(2);
    ev[0]=new event('Event One','07/03/24');
    ev[1]=new event('Event Two','26/02/24');

    let box=new Array(2);
    let head=new Array(2);
    let dates=new Array(2);
    for(let i=0;i<2;i++)
    {
        head[i]=document.createElement('h2');
        head[i].textContent=ev[i].title;
        dates[i]=document.createElement('p');
        dates[i].classList.add('homep');
        dates[i].textContent=ev[i].date;
        box[i]=document.createElement('div');
        box[i].classList.add('eventBox')
        container[i]=document.createElement('div');
        container[i].classList.add('container','flex-lay2');

        box[i].appendChild(head[i]);
        box[i].appendChild(dates[i]);
        container[i].appendChild(box[i]);
    }


    content.classList.add('flex-lay2');
    content.appendChild(container[0]);
    content.appendChild(container[1]);
}