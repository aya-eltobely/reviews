var persons = [
  {
    img : "images/person-4_t9nxjt.jpg" ,
    name: "bill anderson" ,
    job : "the boss",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  },
  {
    img : "images/person-1_rfzshl.jpg" ,
    name: "susan smith" ,
    job : "web developer",
    info : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    img : "images/person-2_np9x5l.jpg" ,
    name: "anna johnson" ,
    job : "web designer",
    info : "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    img : "images/person-3_ipa0mj.jpg" ,
    name: "peter jones" ,
    job : "intern",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  }
]

var imge = document.getElementById('imge');
var author = document.getElementById('author');
var job = document.getElementById('job');
var info = document.getElementById('info');

var prev =document.getElementById('prev');
var next =document.getElementById('next');
var random =document.getElementById('random');

var curritem = 0;


function show(persn)
{
  var itemm = persons[persn];
  imge.src =  itemm.img;
  author.textContent = itemm.name;
  job.textContent = itemm.job;
  info.textContent = itemm.info;
}

//initial items

window.addEventListener('load' , function(){
  show(curritem);
})

next.addEventListener('click',function(){

  curritem++;
  if( curritem > persons.length -1){
    curritem =0;
  }
  show(curritem);
})

prev.addEventListener('click',function(){

  curritem--;
  if( curritem < 0 ){
    curritem =  persons.length -1 ;
  }
  show(curritem);
})

random.addEventListener('click',function(){

  curritem = Math.floor( Math.random() * persons.length );
  show(curritem);
})
