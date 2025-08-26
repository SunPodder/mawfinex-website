import express from 'express'
import { sendContactForm, sendCareersForm, sendConsultationForm } from './tele'
import multer from 'multer'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())

// Multer setup for file upload (memory storage)
const upload = multer({ storage: multer.memoryStorage() })

app.post('/api/contact', (req, res) => {
	const { name, email, subject, message } = req.body

	// Validation
	if (!email || typeof email !== 'string' || email.trim() === '') {
		return res.status(400).json({ error: 'Email is required.' })
	}
	if (!message || typeof message !== 'string' || message.trim() === '') {
		return res.status(400).json({ error: 'Message is required.' })
	}
	if (message.trim().length < 10) {
		return res.status(400).json({ error: 'Message is too short.' })
	}

	sendContactForm(name, email, subject, message)
	return res.status(200).json({ success: true, message: 'Contact form submitted successfully.' })
})

app.post('/api/consultation', (req, res) => {
	const {
		consultationType,
		name,
		email,
		phone,
		company,
		service,
		date,
		time,
		meetingType,
		details
	} = req.body

	// Validation
	if (!name || typeof name !== 'string' || name.trim().length < 2) {
		return res.status(400).json({ error: 'Full name is required and must be at least 2 characters.' })
	}
	if (!email || typeof email !== 'string' || email.trim() === '') {
		return res.status(400).json({ error: 'Email is required.' })
	}
	if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
		return res.status(400).json({ error: 'Phone number is required and must be valid.' })
	}
	if (!service || typeof service !== 'string' || service.trim() === '') {
		return res.status(400).json({ error: 'Service selection is required.' })
	}
	if (!date || typeof date !== 'string' || date.trim() === '') {
		return res.status(400).json({ error: 'Preferred date is required.' })
	}
	if (!time || typeof time !== 'string' || time.trim() === '') {
		return res.status(400).json({ error: 'Preferred time is required.' })
	}
	if (!meetingType || typeof meetingType !== 'string' || meetingType.trim() === '') {
		return res.status(400).json({ error: 'Meeting type is required.' })
	}
	if (!details || typeof details !== 'string' || details.trim().length < 10) {
		return res.status(400).json({ error: 'Project details are required and must be at least 10 characters.' })
	}

	// Validate date is not in the past
	const selectedDate = new Date(date)
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	
	if (selectedDate < today) {
		return res.status(400).json({ error: 'Selected date cannot be in the past.' })
	}

	try {
		sendConsultationForm(
			consultationType || 'General Consultation',
			name,
			email,
			phone,
			company || 'Not specified',
			service,
			date,
			time,
			meetingType,
			details
		)
		return res.status(200).json({ success: true, message: 'Consultation booked successfully! We will contact you soon to confirm the details.' })
	} catch (error) {
		console.error('Error sending consultation form:', error)
		return res.status(500).json({ error: 'Failed to book consultation. Please try again.' })
	}
})

app.post('/api/careers', upload.single('file'), (req, res) => {
	const {
		applicationType,
		fullName,
		email,
		phone,
		location,
		position,
		message,
		experience,
	} = req.body
	const file = req.file

	// Validation
	if (!applicationType || typeof applicationType !== 'string') {
		return res.status(400).json({ error: 'Application type is required.' })
	}
	if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
		return res.status(400).json({ error: 'Full name is required and must be at least 2 characters.' })
	}
	if (!email || typeof email !== 'string' || email.trim() === '') {
		return res.status(400).json({ error: 'Email is required.' })
	}
	if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
		return res.status(400).json({ error: 'Phone number is required and must be valid.' })
	}
	if (!location || typeof location !== 'string' || location.trim().length < 2) {
		return res.status(400).json({ error: 'Location is required.' })
	}
	if (!position || typeof position !== 'string' || position.trim().length < 2) {
		return res.status(400).json({ error: 'Position/Area of Interest is required.' })
	}
	if (!message || typeof message !== 'string' || message.trim().length < 10) {
		return res.status(400).json({ error: 'Cover letter/message is required and must be at least 10 characters.' })
	}
	if (!file) {
		return res.status(400).json({ error: 'Resume/Portfolio is required.' })
	}

	// For demo: just send file name
	try {
		sendCareersForm(
			applicationType,
			fullName,
			email,
			phone,
			location,
			position,
			message,
			experience || '',
			file // pass the file object directly
		)
		return res.status(200).json({ success: true, message: 'Application submitted successfully.' })
	} catch (error) {
		return res.status(500).json({ error: 'Failed to send application.' })
	}
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Express server running on port ${PORT}`)
})
