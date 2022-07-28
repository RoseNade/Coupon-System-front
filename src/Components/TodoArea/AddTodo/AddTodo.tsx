import axios from "axios";
import { useEffect, useState } from "react";
import { TodoModel } from "../../../models/Todo";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./AddTodo.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";

function AddTodo(): JSX.Element {

    // Step 6 - Manage schema
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

    // Step 7 - useHook to validate
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TodoModel>({ mode: "all", resolver: yupResolver(schema) });

    // Step 8 - Send to remote as post request
    const addTask = async (todo: TodoModel) => {
        await axios.post</* TodoModel */ any>(globals.urls.tasks, todo)
            .then(res => { notify.success("New task created") })
            .catch(err => { notify.error("Error: " + err.message) })
    };

    return (
        <div className="AddTodo flex-top-center">
            <h1>Add a Task</h1>
            <form onSubmit={handleSubmit(addTask)} className="flex-top-center">
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

                <button disabled={!isValid}>Add</button>
            </form>
        </div >
    );
}

export default AddTodo;
