// alert("");
let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Deepak",
    age: 21,
    interests: [{
      interest:"Dancing "
    }],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui doloremque ab repellendus numquam explicabo ex voluptate facere animi, sapiente ?",
    // status: "",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1674069720020-41e6dea32366?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Bihar, India",
    name: "Ashok",
    age: 22,
    interests: [{
      interest:"painting"
    }],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui doloremque ab repellendus numquam explicabo ex voluptate facere animi, sapiente ?",
    // status: "",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Punjab, India",
    name: "Ashish",
    age: 24,
    interests: [{
      interest:"writing"
    }],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui doloremque ab repellendus numquam explicabo ex voluptate facere animi, sapiente ?",
    // status: "",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Bhopal, India",
    name: "Sudeep",
    age: 21,
    interests: [{
    interest:"photoshoot"
    }],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui doloremque ab repellendus numquam explicabo ex voluptate facere animi, sapiente ?",
    // status: "",
    isFriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;
 
function setData(index){
  select(".prfimg  img").src = users[index].profilePic;
  select(".badge h5 ").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;
  // select(" tags i  ").textContent = users[curr].tags;

  let clutter = "";
  users[curr].interests.forEach(function (interest) {
    clutter += `  <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3" >
   
    <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
  </div>`
  })
  select(".tags").innerHTML = clutter;

  select(".bio p ").textContent = users[curr].bio;
}
(function setInitial() {
  select(".maincard img ").src = users[curr].displayPic;
  select(".incomingcard img ").src = users[curr + 1]?.displayPic;
 setData(curr);
  curr = 2;
})();

function imageChange() {
  if(!isAnimating){
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete : function(){
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");
  
        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3");
        incoming.classList.remove("incomingcard");
  
        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main,{
          scale:1,
          opacity:1
        })
        if(curr === users.length) curr = 0;
        select(".maincard img ").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      }
    });
    tl.to(".maincard", {
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: .9,
    },"a")
    .from(".incomingcard", {
      scale: 0.9,
      opacity: 0,
      ease: Circ,
      duration: 1.1
    },"a")
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger: .1,
    ease: Power4.easeInOut,
    duration: 1
  })
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger: .1,
    ease: Power4.easeInOut,
    duration: 1
  })
});

(function containerCreater(){
document.querySelectorAll(".element")
.forEach(function(element){
  let div = document.createElement("div");
  div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
 div.appendChild(element);
 select(".details ").appendChild(div);
})
})();

