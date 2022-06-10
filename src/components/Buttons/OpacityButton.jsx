import './OpacityButton.scss'
export default function OpacityButton({link,children,...props}) {
   
    return(
        <a className="OpacityButton"  href={link}  {...props}>
           {children}
        </a>
    )
}