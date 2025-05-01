import { useForm } from 'react-hook-form'

type FormValues = {
    email: string;
    password: string;
}

export const FormsPage = () => {
    const { register, handleSubmit, formState, watch } = useForm<FormValues>({
        defaultValues: {
            email: "tales.com",
            password: "abcd"
        }
    });

    const onSubmit = (myFormData: FormValues) => {
        console.log("🚀 ~ onSubmit ~ myFormData:", { myFormData })
    }

    console.log(watch("email"));


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <input type="text" placeholder='email' {...register("email", { required: true })} />
                    <input type="text" placeholder='password' {...register("password")} />
                    <button type='submit'>Ingresar</button>
                </div>
            </form>
            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </div>
    )
}
