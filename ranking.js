async function loadRanking(){
let { data } = await supabase
.from("ranking")
.select("*")
.order("score",{ascending:false})
.limit(100);

let html="";
data.forEach((r,i)=>{
let medal="";
if(i===0) medal="gold";
if(i===1) medal="silver";
if(i===2) medal="bronze";

html+=`<tr>
<td class="${medal}">${i+1}</td>
<td>${r.username}</td>
<td>${r.score}</td>
</tr>`;
});

rankingBody.innerHTML=html;
}

loadRanking();