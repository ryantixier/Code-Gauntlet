import React, {useState} from 'react';


export default function MainPage(){
    const [name,setName] = useState("Gauntlet");
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const handleChange = (e) => {
        
    };
    return(
<div> 
    <h1>Code Gauntlet</h1>
<div>
    <img>Logo?</img>
    <div>
        <p>Code Gauntlet is a free interactive space to not only challenge your coding skills but your friends as well. Sign up to take full advantage of our features</p>
    </div>
</div>
<div>
    <form>
        {/* input for sign up? */} 
<input value-={setName} onChange={(e)=> setName(e.target.value)} />
<input value={setEmail} onChange={(e)=> setEmail(e.target.value)} />
<input value={setPassword} onChange={(e) => setPassword(e.target.value)} />
</form>
</div>
<div>
<form>
        {/* input for login? */}
<input value-={name} onChange={(e)=> setName(e.target.value)}/> 
<input value-={password} onChange={(e)=> setPassword(e.target.value)}/> 
</form>
</div>
<div>About:Benefits to signing up, basic layout of challenges, etc</div>
{/* Difficulty Buttons for Navigation?? */}
<div>
    <button>Select Beginner</button>
    <button>Select Intermediate</button>
    <button>Select Hard</button>
</div>
</div>
)
}