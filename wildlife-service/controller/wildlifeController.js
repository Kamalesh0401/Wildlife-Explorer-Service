const sgMail = require('@sendgrid/mail');

exports.sendContactEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields (name, email, message) are required'
            });
        }

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'wildlifeexplorer0415@gmail.com',
            from: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        await sgMail.send(msg);

        res.status(200).json({
            status: 'success',
            message: 'Message sent successfully'
        });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to send message',
            error: err.message
        });
    }
};