import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CompanyModel } from "../../../../Models/Beans";
import "./CompanyItem.css";

interface CompanyItemProps{
    company: CompanyModel;
}
function CompanyItem(props: CompanyItemProps): JSX.Element {
    return (
        <div className="CompanyItem ">
			<div className="coupon flex-top-center">
                <h1>Company id: {props.company.id}</h1>
                <p>Company email: {props.company.email}</p>
                <p>Company password: {props.company.password}</p>
                <p>Company name: {props.company.name}</p>
                <div className = "flex-row-non-wrap-list gap">
                    <span >Click to delete:</span>
                    <Link to = {`/admin/companies/delete/${props.company.id}`}>
                       <AiOutlineDelete size = {42}/>
                    </Link>

                    <span >Click to update:</span>
                    <Link to = {`/admin/companies/update/${props.company.id}`}>
                       <AiOutlineEdit size = {42}/>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default CompanyItem;
