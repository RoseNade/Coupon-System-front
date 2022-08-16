import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { couponsDeletedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import "./DeleteCoupon.css";


function DeleteCoupon(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();

    const couponId = +(params.id || 0);

    const no = () => {
        navigate('/company/coupons/');
    }

    const deleteCoupon = () => {
        web.deleteCoupon(couponId)
            .then(() => {
                notify.success("Coupon deleted");
                store.dispatch(couponsDeletedAction(couponId));
                navigate('/company/coupons/');
            })
            .catch(err => { 
                notify.error("Error: " + err.message);
             });
    };

    return (
        <div className="DeleteCoupon flex-top-center">
            <h1>Delete Coupon</h1>

            <h3>Are you sure you want to delete coupon #{couponId}?</h3>
            <div>
                <button onClick={deleteCoupon}>YES</button> <button onClick={no}>NO</button>
            </div>

        </div>
    );
}

export default DeleteCoupon;
