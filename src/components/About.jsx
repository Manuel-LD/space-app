import img from '../assets/Neil_Armstrong_pose.jpg';
import './About.css'

function About(){
    return(
        <>
        <div className='container'>
            <div className='card'>
                <img src={img}/>
                <h2>Neil Armstrong</h2>
                <p className='desc'>Es una de las personas más destacadas en toda la historia de la humanidad debido a que (de acuerdo con la historia oficial) fue el primer ser humano en caminar sobre la superficie lunar.</p>
            </div>
        </div>
        </>
    )
}

export default About;