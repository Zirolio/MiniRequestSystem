import { useForm } from "react-hook-form";
import styles from "./CreateTicketForm.module.scss"
import { useAppDispatch } from "@store/store";
import { addTicket } from "@store/slices/ticketsSlice";
import { MAX_TITLE_LENGTH } from "@/app/config/constants";

interface CreateTicketFormData {
    title: string;
    description: string;
}

export default function CreateTicketForm() {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CreateTicketFormData>();

    const onSubmit = (data: CreateTicketFormData) => {
        dispatch(addTicket({
            title: data.title,
            description: data.description,
            date: new Date().toDateString()
        }));

        reset();
    }

    // TODO: <input> -> <div>
    return (
        <div className={styles["form-container"]}>
            <p className={styles.title}>Create ticket</p>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles["inputs-container"]}>
                    <input
                        className={styles["input"]}
                        /* maxLength={MAX_TITLE_LENGTH}*/
                        placeholder="Title"
                        {...register("title", {
                            required: { value: true, message: "Title is required." },
                            maxLength: { value: MAX_TITLE_LENGTH, message: `Max title length is ${MAX_TITLE_LENGTH}.` }
                        })}
                        autoComplete="off"
                    />
                    { errors.title && <p className={styles["error"]}>{errors.title.message} </p> }

                    <input
                        className={styles["input"]}
                        placeholder="Description"
                        {...register("description", {
                            required: { value: true, message: "Description is required." }
                        })}
                        autoComplete="off"
                    />
                    { errors.description && <p className={styles["error"]}>{ errors.description.message }</p> }
                </div>
                
                <button className={styles["submit-btn"]} type="submit">Send</button>
            </form>
        </div>
    );
}