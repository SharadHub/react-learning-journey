import {Compo2} from "./Compo2"

//Method 1 to export this Component file to main.jsx or App.jsx files

// export const Compo = () => {
//     return (
//         <div>
//             <h1>
//                 Hello, I am a Component.
//             </h1>
//         </div>
//     )
// }

// Method 2 to export this Component file to main.jsx or App.jsx files

const Compo = ({user, email, age}) => {
    return (
        <div>
            <h1> className="font-medium text-2xl"   Hello, I am a Component. - {user}, {email}, {age}</h1>
            <Compo2 user={user} email={email} age={age}/>
        </div>
    )
}
export default Compo;