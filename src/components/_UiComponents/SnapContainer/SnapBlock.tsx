import "./SnapContainer.scss"

const SnapItem = ({children}) => {

    return (
        <div className="snap-container__block">
            {children}
        </div>

    )
}

export default SnapItem