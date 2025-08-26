import { Telegraf } from "telegraf"

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('message', (ctx) => {
    console.log(ctx.chat.id)
})

bot.launch()
console.log("Bot started")

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))

export function sendContactForm(name, email, subject, message) {
    const logMessage = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`
    bot.telegram.sendMessage(process.env.CHAT_ID, logMessage)
}

export function sendCareersForm(
    type,
    name,
    email,
    phone,
    location,
    position,
    cover,
    experience,
    resumeFile
) {
    const logMessage = `New careers form submission\n\nType: ${type}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nPosition: ${position}\nExperience: ${experience}\nCover Letter:\n${cover}`
    bot.telegram.sendMessage(process.env.CHAT_ID, logMessage)
    if (resumeFile) {
        bot.telegram.sendDocument(process.env.CHAT_ID, { source: resumeFile.buffer, filename: resumeFile.originalname })
    }
}

export function sendConsultationForm(
    type,
    name,
    email,
    phone,
    company,
    services,
    date,
    time,
    medium,
    details
){
    // Format meeting type for better readability
    const meetingTypeMap = {
        'video': '🎥 Video Call (Google Meet/Zoom)',
        'phone': '📞 Phone Call',
        'in-person': '🏢 In-Person Meeting (Dhaka Office)'
    }
    
    const formattedMedium = meetingTypeMap[medium] || medium

    // Format the date for better readability
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const logMessage = `🗓️ NEW CONSULTATION BOOKING\n\n` +
        `📋 Consultation Type: ${type}\n` +
        `👤 Name: ${name}\n` +
        `📧 Email: ${email}\n` +
        `📱 Phone: ${phone}\n` +
        `🏢 Company: ${company}\n` +
        `⚙️ Services: ${services}\n` +
        `📅 Date: ${formattedDate}\n` +
        `⏰ Time: ${time}\n` +
        `💼 Meeting Type: ${formattedMedium}\n\n` +
        `📝 Project Details:\n${details}\n\n` +
        `🚨 Please follow up within 24 hours!`
    
    bot.telegram.sendMessage(process.env.CHAT_ID, logMessage)
}

