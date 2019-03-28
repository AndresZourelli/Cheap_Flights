require('dotenv').config();
var nodemailer = require('nodemailer');

var transport = {
	host: 'smtp.zoho.com',
	auth: {
		user: process.env.Mailer_User,
		pass: process.env.Mailer_Pass
	}
};

var transporter = nodemailer.createTransport(transport);

module.exports = function sendEmail(to, subject, message) {
	const mailOptions = {
		from: 'admin@tabletopmtg.com',
		to: 'azourelli@gmail.com',
		subject,
		html: message
	};

	transporter.sendMail(mailOptions, (error) => {
		if (error) {
			console.log(error);
		}
	});
};
