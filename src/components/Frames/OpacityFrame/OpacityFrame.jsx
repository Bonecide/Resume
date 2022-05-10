import './OpacityFrame.scss'
export default function OpacityFrame({children}) {


    return(
        <div className="OpacityFrame_container">
            <p>
                {children}
            </p>
        </div>
    )
}