let key = '';
let length = 8 ; // default value
let case_type ;

let Numbers = ['0','1' , '2' , '3' , '4' , '5' , '6' , '7', '8', '9'];
let Numbers_alphbates = ['0','1' , '2' , '3' , '4' , '5' , '6' , '7', '8', '9','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','M','o','O','p','P','Q','q','r','R','s','S','t','T','u','U','v','V','x','X','y','Y','z','Z'];
let Numbers_alphbates_special = ['0','1' , '2' , '3' , '4' , '5' , '6' , '7', '8', '9','a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','M','o','O','p','P','Q','q','r','R','s','S','t','T','u','U','v','V','x','X','y','Y','z','Z','|','!','@','#','$','%','^','&','(',')','[',']','~','='
];

//console.log(Numbers_alphbates_special.length);


document.querySelector('#id_generator_button').addEventListener('click', ()=>{
    
    // getting length
    length = Math.abs(document.querySelector('#length-input').value);
    length = Math.floor(length);
    
    // getting case_type
    let allRadios = document.querySelectorAll('.radio_type');
    allRadios.forEach((radio) =>{
      if(radio.checked){
        case_type = radio.value;
      }
    })

    // case 1 : Numbers
    if(case_type == 'numbers'){
       for(let i=0 ; i<length ; i++){
           let min = 0;
           let max = Numbers.length;
           let random_index =Math.floor(Math.random() * (+max - +min)) + +min;
           key += Numbers[random_index];
           document.getElementById('output').value = key;
       }
       key ='';
    }

    // case 2 : Numbers & Alphabates
    if(case_type == 'numbers_alphabates'){
        for(let i=0 ; i<length ; i++){
            let min = 0;
            let max = Numbers_alphbates.length;
            let random_index =Math.floor(Math.random() * (+max - +min)) + +min;
            key += Numbers_alphbates[random_index];
            document.getElementById('output').value = key;
        }
        key ='';
     }

     // case 2 : Numbers & Alphabates & Special Characters
    if(case_type == 'numbers_alphabates_special'){
        for(let i=0 ; i<length ; i++){
            let min = 0;
            let max = Numbers_alphbates_special.length;
            let random_index =Math.floor(Math.random() * (+max - +min)) + +min;
            key += Numbers_alphbates_special[random_index];
            document.getElementById('output').value = key;
        }
        key ='';
     }
    
    
});


// copy to clipboard
document.querySelector('#copy_button').addEventListener('click',()=>{
    document.querySelector('#output').select();
    document.execCommand('copy');

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.1;
    }, 100);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.2;
    }, 200);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.3;
    }, 300);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.4;
    }, 400);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.5;
    }, 500);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.4;
    }, 800);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.3;
    }, 1000);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.2;
    }, 1200);
    
    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0.1;
    }, 1400);

    setTimeout(() => {
        document.querySelector('#copy-msg').style.opacity = 0;
    }, 1600);
})
