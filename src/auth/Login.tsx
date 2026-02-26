import { Eye, Mail } from 'lucide-react'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { ILogin } from '../types/login'
export default function Login() {
	const navigate = useNavigate()
	const [serverError, setServerError] = useState<string | null>('')
	// const [isLoading, setIsLoading] = useState<boolean>(false)
	const [visible, setVisible] = useState<boolean>(false)
	const { register, handleSubmit, formState } = useForm<ILogin>({
		mode: 'onChange'
	})
	const formEmail = formState.errors['email']?.message

	const formPassword = formState.errors['password']?.message

	const onSubmit: SubmitHandler<ILogin> = async (data: ILogin, e) => {
		e?.preventDefault()
		// setIsLoading(true)
		// setServerError('')
		navigate('/dashboard')

		try {
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify(data)
			})

			const result = await response.json()

			if (response.ok) {
				console.log('Success', result)
				navigate('/dashboard')
			} else {
				setServerError(result.message || 'Something went wrong')
			}
		} catch (err) {
			console.log('Error network', err)
			setServerError('Something went wrong')
		}
	}

	const toggleVisible = () => {
		setVisible(!visible)
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
					<Mail
						className="ml-65 -mt-10 text-white cursor-pointer"
						size={30}
					/>
					{formEmail && <p style={{ color: 'red' }}>{formEmail}</p>}
					<input
						className="w-full bg-[#2a2a2a] text-white text-2xl p-2 mt-7 rounded-2xl border-2 border-transparent focus:border-amber-300 outline-none transition-all"
						type={visible ? 'text' : 'password'}
						placeholder="Password:"
						{...register('password', {
							required: true,
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
								message: 'Password should be at least 8 characters long'
							}
						})}
					/>
					<Eye
						onClick={toggleVisible}
						className="ml-65 -mt-10 text-white cursor-pointer"
						size={30}
					/>
					{formPassword && <p style={{ color: 'red' }}>{formPassword}</p>}

					{serverError && (
						<p className="text-red-500 mt-3 text-center">{serverError}</p>
					)}
					<button
						type="submit"
						// disabled={isLoading}
						className="mt-10 p-4 text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] bg-amber-300 rounded-xl hover:bg-amber-100 hover:shadow-[0_0_20px_rgba(252,211,77,0.5)] active:scale-95 transition-all duration-300 cursor-pointer"
					>
						{/* {isLoading ? 'Вход...' : 'Login'} */}
					</button>
				</form>
			</div>
		</>
	)
}
