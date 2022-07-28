import "./EditTodo.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { TodoModel } from "../../../models/Todo";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import axios from "axios";

function EditTodo(): JSX.Element {
    const [origin, setOrigin] = useState<TodoModel>({'caption': 'aaa', 'info':'bbb', 'classification':'ccc', 'dueDate': new Date() });

    const [id, setId] = useState<number>(5);

    const schema = yup.object().shape({
        caption:
            yup.string()
                .required("Caption is required"),

        info:
            yup.string()
                .required("Info is required"),

        classification:
            yup.string()
                .required("Classification is required"),

        dueDate:
            yup.date()
                .min(new Date(), "Task to add can't be in the past")
                .default(new Date())
                .typeError("You must specify a due date")
                .required("Due date is required")
                .nullable().default(() => new Date()),
    });

    // let defaultValuesObj = { id: 0, title: "", description: "", group: "", when: new Date() };
    let defaultValuesObj = { ...origin };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<TodoModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({
        control
    });

    const updateTask = async (todo: TodoModel) => {
        await axios.put</* TodoModel */ any>(globals.urls.tasks + '/' + id, todo)
            .then(res => { notify.success("Task updated") })
            .catch(err => { notify.error("Error: " + err.message) })
    };

    return (
        <div className="EditTodo flex-top-center">
            <h1>Update a Task</h1>
            <form onSubmit={handleSubmit(updateTask)} className="flex-top-center">
                <label htmlFor="caption">Caption</label>
                <input {...register("caption")} type="text" placeholder="Please enter caption" name="caption" id="caption" />
                <span>{errors.caption?.message}</span>
                <label htmlFor="info">Info</label>
                <input {...register("info")} type="text" placeholder="Please enter info" name="info" id="info" />
                <span>{errors.info?.message}</span>
                <label htmlFor="classification">Classification</label>
                <input {...register("classification")} type="text" placeholder="Please enter classification" name="classification" id="classification" />
                <span>{errors.classification?.message}</span>
                <label htmlFor="dueDate">Due date</label>
                <input {...register("dueDate")} type="datetime-local" placeholder="Please enter date" name="dueDate" id="dueDate" />
                <span>{errors.dueDate?.message}</span>

                <button disabled={!isDirty}>Update</button>
            </form>
        </div>
    );
}

export default EditTodo;
