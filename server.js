const email = "armongolia42@gmail.com"
const password = "zizplewqccmgdoak"

require("dotenv").config({ path: '.env' });
const express = require('express')
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express();
const port = 9000

var whitelist = [
    process.env.CLIENT_URL,
    "http://localhost:3000"
]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    allowedHeaders: "Authorization, Set-Cookie, Content-Type, Accept, SameSite",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}

//  middlewares
app.use(cors(corsOptions))

//  middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post(
    "/send-email/",
    async (req, res, next) =>
    {
        const body = req.body

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password,
            }
        });

        const mailOptions = {
            subject: `Хүсэлт ирсэн байна ${body.name}-c: ${body.subject}`, // Subject line
            html: `<b>EMAIL:</b> ${body.email}
                    <b>PHONE:</b> ${body.phone}
                <hr />
                ${body.feedback}
            `, // html body
        }

        mailOptions.from = email
        mailOptions.to = email
        transporter.sendMail(mailOptions)

        res.send({})
    }
)

//  server
const server = require('http').createServer(app)
server.listen(port, () =>
    {
        console.log(`Сервер ${port} порт дээр аслаа`)
    }
);
