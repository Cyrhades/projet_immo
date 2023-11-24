const Contact = require("../entity/Contact.js")
const Realty = require("../entity/Realty.js")
const ContactRepository = require('../repository/ContactRepository.js')
const RealtyRepository = require('../repository/RealtyRepository.js')

class RealtyController {

    index (request, response) {
        response.render('admin/realty/index')
    }

    
    addRealty (request, response) {
        response.render('admin/realty/form', {realty:{}, contact: {}})
    }


    addRealtyProcess (request, response) {
        if(request.body.contact) {
            const entityContact = new Contact();
            entityContact
                .setCivility(request.body.contact.civility)
                .setEmail(request.body.contact.email)
                .setFirstname(request.body.contact.firstname)
                .setLastname(request.body.contact.lastname)
                .setMobile(request.body.contact.mobile)
                .setPhone(request.body.contact.phone)
                .setInfo(request.body.contact.info)
                ;
            delete entityContact.id;   
            const ContactRepo = new ContactRepository();
            ContactRepo.add(entityContact).then((contact) => {
                if(contact[0].insertId) {
                    const entityRealty = new Realty();
                    entityRealty
                        .setIdUser(request.session.user.id)
                        .setIdContact(contact[0].insertId)
                        .setAddress1(request.body.realty.address1)
                        .setAddress2(request.body.realty.address2)
                        .setZipcode(request.body.realty.zipcode)
                        .setTown(request.body.realty.town)
                        .setInfoAddress(request.body.realty.info_address)
                        .setType(request.body.realty.type)
                        .setPrice(request.body.realty.price)
                        .setArea(request.body.realty.area)
                        .setRoom(request.body.realty.room)
                        .setInfo(request.body.realty.info);
                    delete entityRealty.id;  
                    const RealtyRepo = new RealtyRepository();
                    RealtyRepo.add(entityRealty).then((realty) => {
                        request.flash("notify", "Le bien a été créé");
                        response.redirect("/admin/realty");
                        // On pourrait (si on l'avait) renvoyer vers l'édition du bien
                        // response.redirect("/admin/realty/edit/"+realty[0].insertId);
                        
                    });
                } else {
                    response.render('admin/realty/form', {realty:request.body.realty, contact: request.body.contact})
                }
            });
        } else {
            response.render('admin/realty/form', {realty:request.body.realty, contact: request.body.contact})
        }
    }

};

module.exports = new RealtyController();