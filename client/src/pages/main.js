import React, {useEffect, useState} from 'react';
import Granim from 'granim';
import '../styles/Main.css';

function Main (){
    const [name,setUserName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [setErrorMessage, errorMessage]= useState('');

    useEffect(() => {
const granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});
    return() => granimInstance.destroy();
}, []); 

const handleChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email'){
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)|| !userName){
        setErrorMessage('Invalid username/email entered');
return;
}
if (!checkPassword(password)) {
    setErrorMessage(
        `Make Password more secure or else: ${userName}`
    );
    return;
}
alert(`signed in as ${userName}`);
setUserName('');
setPassword('');
setEmail('');

return( 
<div>
    <canvas id="canvas-complex"></canvas> 
<h1>Code Gauntlet</h1>
<div>
<img src=" " alt='logo'>Logo?</img>
<div>
    <p>Code Gauntlet is a free interactive space to not only challenge your coding skills but your friends as well. Sign up to take full advantage of our features</p>
</div>
</div>
<div>
<form>
    {/* input for sign up? */} 
<input value-={setName} 
onChange={(e)=> 
setName(e.target.value)} 
/>
<input value={setEmail} 
onChange={(e)=> 
setEmail(e.target.value)} 
/>
<input value={setPassword} 
onChange={(e) => 
setPassword(e.target.value)} 
/>
<button type='button' onClick={handleFormSubmit}>Submit</button>
</form>
</div>
<div>
<form>
    {/* input for login? */}
<input value-={name} 
onChange={(e)=> 
setName(e.target.value)}
/> 
<input value-={password} 
onChange={(e)=> 
setPassword(e.target.value)}
/> 
<button type='button' onClick={handleFormSubmit}>SignIn</button>
</form>
{errorMessage && (
    <div>
        <p className='er-message'>{errorMessage}</p>
        </div>
)}
</div>
<div>About:Benefits to signing up, basic layout of challenges, etc</div>
{/* Difficulty Buttons for Navigation?? */}
<div>
<button>Select Beginner</button>
<button>Select Intermediate</button>
<button>Select Hard</button>
</div>
</div>
);
}
}



    

   export default Main;