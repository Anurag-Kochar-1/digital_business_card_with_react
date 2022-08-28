import face_img from '../face-women.png'


export default function UpperSection () {
    return (
        <>
        <div className='firstSection'>
            <img src={face_img} alt="face-image-women" className='women-image'></img>
            <h1 className='name'>Joe mama</h1>
            <h3 className='role'>Frontend Developer</h3>
            <h4 className='website'> joemama.com</h4>
        </div>

        <div className='buttons'>
            <button className='emailBtn'><i class="fa-solid fa-envelope emailIcon"></i> Email </button>
            <button className='linkedinBtn'><i class="fa-brands fa-linkedin linkedinIcon"></i>Linkedin</button>
        </div>
        </>
    )
}