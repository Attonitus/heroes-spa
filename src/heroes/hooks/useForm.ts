import { useState } from "react"

interface DataForm{
    [key: string]: any
}


export const useForm = (dataForm: DataForm) => {
    const [form, setForm] = useState<DataForm>(dataForm);

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setForm({
            [name]: value
        })
    }

    const onResetForm = () => {
        setForm(dataForm);
    }

    return{
        form,
        onInputChange,
        onResetForm
    }
}