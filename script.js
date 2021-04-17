//Ekleme işlemi


const form = document.querySelector('.add-form');
const liste = document.querySelector('.todos');

function templateOlustur(yapilacak){

    let html =`

    <li class="list-group-item d-flex justify-content-between align-item-center">
                    <span>${yapilacak}</span>
                    <i class="far fa-trash-alt delete"></i>
                    </li>

    `;

    liste.innerHTML += html;
}

form.addEventListener('submit',e=>{

    e.preventDefault();

    const yapilacak = form.add.value.trim().toLowerCase();
    //templateOlustur(yapilacak);
    if(yapilacak.length){
        templateOlustur(yapilacak);
        form.reset();
    }
});

/// DElete Process

liste.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){

        console.log(e.target.parentElement.remove());
    }

});

// Filtreleme İşlemi

const aramaInput = document.querySelector('.search input');

aramaInput.addEventListener('keyup',e=>{

    const ifade= aramaInput.value.trim().toLowerCase();
    //console.log(ifade);
    filterOlustur(ifade);
});


// Aramaya göre Listeyi Düzenleme 

const filterOlustur = (ifade)=> {

    Array.from(liste.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return !yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        yapilacak.classList.add('filtered');
    });

    
    Array.from(liste.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        yapilacak.classList.remove('filtered');
    });
};





