const express = require("express")
const cors = require('cors')

const Services = require("../models/services")
const Messages = require("../models/messages")
const Customers = require("../models/customers")

const router = express.Router()
router.use(cors())

router.post('/register', (request, response) => {
    const today = new Date()

    const customer = {
        name: request.body.name,
        email: request.body.email,
        created: today
    }

    const service = {
        email: request.body.email,
        seo: request.body.seo,
        ssm: request.body.ssm,
        ppc: request.body.ppc,
        sem: request.body.sem,
        email_marketing: request.body.email,
        web_dev: request.body.web_dev,
        branding: request.body.branding,
        seller_support: request.body.seller_support,
        remarketing: request.body.remarketing,
        e_commerce: request.body.e_commerce,
        content_marketing: request.body.content_marketing,
        analytics: request.body.analytics,
        created: today
    }

    let message = {}

    if(request.body.message) {
        message = {
            email: request.body.email,
            message: request.body.message,
            created: today
        }    
    }

    Customers.findOne({
        where: {
            email: request.body.email
        }
    })
        .then(user => {
            if (!user) {            
                Customers.create(customer)
                    .then(
                        Services.create(service)
                            .then(() => {
                                if(request.body.message) {
                                    Messages.create(message)
                                    .then(
                                        response.sendStatus(200).send("Message sent")
                                    )
                                    .catch(error => {
                                        response.send('error: Couldn\'t send message' + error )
                                    })
                                } else {
                                    response.sendStatus(200).send("Message sent")
                                }
                            })
                            .catch(error => {
                                response.send('error: Couldn\'t send message' + error )
                            })    
                    )
                    .catch(error => {
                        response.send('error: Couldn\'t send message' + error )
                    })
                
            } else {
                Services.create(service)
                    .then(() => {
                        if(request.body.message) {
                            Messages.create(message)
                            .then(
                                response.sendStatus(200).send("Message sent")
                            )
                            .catch(error => {
                                response.send('error: Couldn\'t send message' + error )
                            })
                        } else {
                            response.sendStatus(200).send("Message sent")
                        }
                    })
                    .catch(error => {
                        response.send('error: Couldn\'t send message' + error )
                    })
            }
        })
        .catch(error => {
            response.send('error: Couldn\'t send message' + error )
        })
})

module.exports = router