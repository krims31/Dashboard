import cors from 'cors'
import express from 'express'
import session from 'express-session'

const app = express()

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true
	})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000
		}
	})
)

const requireAuth = (req, res, next) => {
	if (req.session.user) {
		next()
	} else {
		res.status(401).json({ message: 'Unauthorized' })
	}
}

app.post('/login', (req, res) => {
	const { email, password } = req.body

	console.log('Try login', { email, password })

	const testUsers = [
		{ email: 'test@test.ru', password: 'password123' },
		{ email: 'admin@test.ru', password: 'admin123' },
		{ email: 'user@test.ru', password: 'user123' },
		{ email: 'demo@test.ru', password: 'demo123' }
	]

	const user = testUsers.find(u => u.email === email && u.password === password)

	if (user) {
		req.session.user = { email: user.email, id: 1 }
		res.json({
			success: true,
			message: 'Success login',
			user: { email: user.email }
		})
	} else {
		res
			.status(401)
			.json({ success: false, message: 'Invalid email or password' })
	}
})

app.get('/me', requireAuth, (req, res) => {
	res.json({ user: req.session.user })
})

app.post('/logout', (req, res) => {
	req.session.destroy(err => {
		if (err) {
			res.status(500).json({ message: 'Logout failed' })
		} else {
			res.json({ message: 'Success logout' })
		}
	})
})

app.get('/dashboard', requireAuth, (req, res) => {
	res.json({
		message: 'Welcome to dashboard',
		data: [
			'dashboard',
			'payment',
			'customers',
			'message',
			'general',
			'tools',
			'product',
			'invoice',
			'analytics',
			'automation',
			'support',
			'settings',
			'security',
			'help'
		]
	})
})

app.listen(3000, () =>
	console.log('App listening on port http://localhost:3000')
)
