import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { ILogin } from '../types/login'
export default function Login() {
	const { register, handleSubmit, formState } = useForm<ILogin>({
		mode: 'onChange'
	})
	const formEmail = formState.errors['email']?.message

	const formPassword = formState.errors['password']?.message

	const onSubmit: SubmitHandler<ILogin> = (data: ILogin) => {
		console.log(data)
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen bg-linear-to-r from-slate-900 to-slate-700">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col border-[1px #1a1a1a] p-25 bg-[#1a1a1a] rounded-2xl"
				>
					<input
						className="w-full bg-[#2a2a2a] text-white text-2xl p-2 rounded-2xl border-2 border-transparent focus:border-amber-300 outline-none transition-all"
						type="email"
						placeholder="Email:"
						{...register('email', {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address'
							}
						})}
					/>
					{formEmail && <p style={{ color: 'red' }}>{formEmail}</p>}
					<input
						className="w-full bg-[#2a2a2a] text-white text-2xl p-2 mt-5 rounded-2xl border-2 border-transparent focus:border-amber-300 outline-none transition-all"
						type="password"
						placeholder="Password:"
						{...register('password', {
							required: true,
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
								message:
									'Password must be at least 8 characters long and contain at least one letter and one number'
							}
						})}
					/>
					{formPassword && <p style={{ color: 'red' }}>{formPassword}</p>}
					<button
						type="submit"
						className="mt-10 p-4 text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] bg-amber-300 rounded-xl hover:bg-amber-100 hover:shadow-[0_0_20px_rgba(252,211,77,0.5)] active:scale-95 transition-all duration-300 cursor-pointer"
					>
						Login
					</button>
				</form>
			</div>
		</>
	)
}
