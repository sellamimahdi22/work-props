import './App.css';
import  Profile  from './comp/Profile';

function App() {
  let data = [
    {
      FullName:"Sellami mahdi",
      Bio:"10",
      Profession:"Développeur web"
    },
   {
      FullName:"Ahmed Abdelmoula",
      Bio:"11",
      Profession:"Instructeur"
    },
    {
      FullName:"Maysssa Mallek",
      Bio:"12",
      Profession:"chouchou "
    }, 
  ]
  const handleName=(x)=> alert(`${x} is the profile user `)
  return (
    <div className="App">
      <Profile mahdi={data} details={handleName}/>
     
    </div>
  );
}

export default App;
