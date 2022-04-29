import './ContactButton.scss'
export default function ContactButton({children}) {


    return(
        <button className='ContactBTN'>
            {children}
        </button>
    )
}