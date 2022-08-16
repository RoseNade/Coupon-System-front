import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CouponModel } from "../../../../Models/Beans";
import store from "../../../Redux/Store/Store";
import web from "../../../../Services/WebApi";
import notify from "../../../../Services/Notification";
import { couponsUpdatedAction } from "../../../Redux/CouponsAppState";

function EditCoupon(): JSX.Element {
    const params = useParams();

    const couponId = +(params.id || 0);

    const navigate = useNavigate();

    const coupon = store.getState().couponsReducer.coupons.filter(c => c.id === couponId)[0];

    const [origin, setOrigin] = useState<CouponModel>({
        'category': coupon.category,
        'title': coupon.title,
        'description': coupon.description,
        'startDate': coupon.startDate,
        'endDate': coupon.endDate,
        'amount': coupon.amount,
        'price': coupon.price,
        'image': coupon.image
    });

    const schema = yup.object().shape({
        category:
            yup.string()
                .required("Category is required"),

        title:
            yup.string()
                .required("title is required"),

        description:
            yup.string()
                .required("description is required"),

        startDate: yup
            .date()
            .min(new Date(), "Insert Start Date? come on!")
            .default(new Date())
            .typeError("You must specify a Start Date")
            .required("Start Date is required")
            .nullable(),

        endDate: yup
            .date()
            .min(yup.ref("startDate"), "end date can't be before start date")
            /* .min(new Date(), "Insert End Date? come on!") */
            .default(new Date())
            .typeError("You must specify a End Date")
            .required("End Date is required")
            .nullable(),

        amount:
            yup.number()
                .min(0, ("can't be zero")),

        price:
            yup.number()
                .min(0, "can't be zero"),

        image:
            yup.string()
                .required("Image is required")
    });

    // let defaultValuesObj = { id: 0, title: "", description: "", group: "", when: new Date() };
    let defaultValuesObj = { ...origin };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<CouponModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({
        control
    });

    const updateCoupon = async (todo: CouponModel) => {
        web.updateCoupon(couponId, todo)
            .then(res => {
                notify.success("Coupon updated");
                store.dispatch(couponsUpdatedAction(res.data));
                navigate('/company/coupons/');
            })
            .catch(err => { notify.error("Error: " + err.message) })
    };

    return (
        <div className="EditCoupon flex-top-center">
            <h1>Update a Coupon</h1>
            <form onSubmit={handleSubmit(updateCoupon)} className="flex-top-center">
                <select {...register("category")} name="category" id="category">
                    <option value="ELECTRICITY">ELECTRICITY</option>
                    <option value="FOOD">FOOD</option>
                    <option value="VACATION">VACATION</option>
                    <option value="VEHICLES">VEHICLES</option>
                    <option value="ACCESSORIES">ACCESSORIES</option>
                </select>

                <label htmlFor="title">Title</label>
                <input {...register("title")} type="text" placeholder="Please enter title" name="title" id="title" />
                <span>{errors.title?.message}</span>

                <label htmlFor="description">Description</label>
                <input {...register("description")} type="text" placeholder="Please enter description" name="description" id="description" />
                <span>{errors.description?.message}</span>

                <label htmlFor="startDate">Start Date</label>
                <input {...register("startDate")} type="date" placeholder="Please enter start date" name="startDate" id="startDate" />
                <span>{errors.startDate?.message}</span>

                <label htmlFor="endDate">End date</label>
                <input {...register("endDate")} type="date" placeholder="Please enter end date" name="endDate" id="endDate" />
                <span>{errors.endDate?.message}</span>

                <label htmlFor="amount">Amount</label>
                <input {...register("amount")} type="number" placeholder="Please enter amount" name="amount" id="amount" />
                <span>{errors.amount?.message}</span>

                <label htmlFor="price">Price</label>
                <input {...register("price")} type="number" placeholder="Please enter price" name="price" id="price" />
                <span>{errors.price?.message}</span>

                <label htmlFor="image">Image</label>
                <input {...register("image")} type="text" placeholder="Please enter image" name="image" id="image" />
                <span>{errors.image?.message}</span>

                <button disabled={!isDirty}>Update</button>
            </form>
        </div>
    );
}

export default EditCoupon;
