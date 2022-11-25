import error from "../../assets/icons/error-24px.svg";
import "./ErrorState.scss";


const ErrorState = () => {
    return (
        <div className="error"> 
            <div className="error__box">
                <div className="error__box__icon">
                    <img className="error__box__icon--img" src={error} alt="red exclamation mark stating error" srcset="" />
                </div>

                <div className="error__box__statement">
                    <p className="error__box__statement--text">This field is required</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorState;