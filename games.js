let score=0;

async function startClickGame(){

if(!currentUser){
loginWarning.innerText="⚠ Faça login para salvar pontuação.";
}

score++;

if(currentUser){
await supabase.from("ranking")
.insert([{username:currentUser.username,score}]);
loadRanking();
}
}