import { useNavigate, useParams } from "react-router-dom";
import notify from "../../../../Services/Notification";
import web from "../../../../Services/WebApi";
import { companiesDeletedAction } from "../../../Redux/CompanyAppState";
import { couponsDeletedAction } from "../../../Redux/CouponsAppState";
import store from "../../../Redux/Store/Store";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
    const navigate = useNavigate();

    const params = useParams();

    const companyId = +(params.id || 0);

    const deleteCompany = () => {
        web.deleteCompany(companyId)
            .then(() => {
                notify.success("Company deleted");
                store.dispatch(companiesDeletedAction(companyId));
                navigate('/admin/companies/');
            })
            .catch(err => {
                notify.error("Error: " + err.message);
            });
    };

    const no = () => {
        navigate('/admin/companies/');
    }

    return (
        <div className="DeleteCompany flex-top-center">
            <div className="flex-top-center">
                <h3>Are you sure you want to delete company #{companyId}?</h3>
            </div>

            <div className="a">
                <button onClick={deleteCompany}>YES</button>
                <button onClick={no}>NO</button>
            </div>
        </div>
    );
}

export default DeleteCompany;