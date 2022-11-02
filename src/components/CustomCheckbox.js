import { useField } from "formik"

const CustomCheckbox = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props)

    return(
        <div className="checkbox">
            <label>{label}</label>
            <input {...field} {...props}
            className={meta.touched && meta.error ? "input-error" : ""}
            />
            <span>I accept the terms of service</span>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}

        </div>
    )
}

export default CustomCheckbox