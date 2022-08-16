import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { customersDeletedAction } from "../../../Redux/CustomersAppState";
import store from "../../../Redux/Store/Store";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();

    const customerId = +(params.id || 0);

    const deleteCustomer = () => {
        web.deleteCustomer(customerId)
            .then(() => {
                notify.success("Customer deleted");
                store.dispatch(customersDeletedAction(customerId));
                navigate('/admin/customers/');
            })
            .catch(err => {
                notify.error("Error: " + err.message);
            });
    };

    const no = () => {
        navigate('/admin/customers/');
    }


    return (
        <div className="DeleteCustomer flex-top-center">
        <div className="flex-top-center">
            <h3>Are you sure you want to delete customer #{customerId}?</h3>
        </div>

        <div className="a">
            <button onClick={deleteCustomer}>YES</button>
            <button onClick={no}>NO</button>
        </div>
    </div>
    );
}

export default DeleteCustomer;
