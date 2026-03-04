const supabase = window.supabase.createClient(
"https://ijrivkgrmkqhtmqpgqms.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
);

let currentUser=null;

async function register(){
let username=usernameInput.value;
let password=passwordInput.value;

let { data } = await supabase.from("users").select("*").eq("username",username);
if(data.length>0){
loginStatus.innerText="Usuário já existe!";
return;
}

await supabase.from("users").insert([{username,password}]);
loginStatus.innerText="Registrado!";
}

async function loginUser(){
let username=usernameInput.value;
let password=passwordInput.value;

let { data } = await supabase.from("users")
.select("*")
.eq("username",username)
.eq("password",password);

if(data.length>0){
currentUser=data[0];
loginStatus.innerText="Logado!";
}else{
loginStatus.innerText="Erro!";
}
}