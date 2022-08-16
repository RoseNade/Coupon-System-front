import { CompanyModel } from "../../../../Models/Beans";
import "./CompanyItem.css";

interface CompanyItemProps{
    company: CompanyModel;
}

function CompanyItem(props: CompanyItemProps): JSX.Element {
    return (
        <div className="CompanyItem">
			<h1>Company id: {props.company.id}</h1>
			<h1>Company email: {props.company.email}</h1>
			<h1>Company name: {props.company.name}</h1>
        </div>
    );
}

export default CompanyItem;
