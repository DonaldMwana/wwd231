const container=document.getElementById("spotlight-container");

async function loadSpotlights(){

const response=await fetch("data/members.json");
const members=await response.json();

const qualified=members.filter(m =>
m.membership==="Gold" || m.membership==="Silver"
);

const random=qualified.sort(()=>0.5-Math.random()).slice(0,3);

random.forEach(member=>{

const card=document.createElement("div");
card.classList.add("member-card");

card.innerHTML=`
<h3>${member.name}</h3>
<img src="${member.logo}" alt="${member.name}">
<p>${member.phone}</p>
<p>${member.address}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
<p>${member.membership} Member</p>
`;

container.appendChild(card);
});
}

loadSpotlights();