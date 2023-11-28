const Contact = require("../entity/Contact.js")
const Realty = require("../entity/Realty.js")
const ContactRepository = require('../repository/ContactRepository.js')
const RealtyRepository = require('../repository/RealtyRepository.js')

class RealtyController {

    index (request, response) {
        const repo = new RealtyRepository();
        repo.getRealties().then((realties) => {
            response.render('admin/realty/index', {realties});
        })
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

   
    editRealty (request, response) {
        const repo = new RealtyRepository();
        repo.getRealtyById(request.params.id).then((infosRealty) => {
            const contact = new Contact();
            contact
                .setCivility(infosRealty.civility)
                .setEmail(infosRealty.email)
                .setFirstname(infosRealty.firstname)
                .setLastname(infosRealty.lastname)
                .setMobile(infosRealty.mobile)
                .setPhone(infosRealty.phone)
                .setInfo(infosRealty.info)
                ;
            contact.id  = infosRealty.id_contact;
            const realty = new Realty();
            realty
                .setIdUser(infosRealty.id_user)
                .setIdContact(infosRealty.id_contact)
                .setAddress1(infosRealty.address1)
                .setAddress2(infosRealty.address2)
                .setZipcode(infosRealty.zipcode)
                .setTown(infosRealty.town)
                .setInfoAddress(infosRealty.info_address)
                .setType(infosRealty.type)
                .setPrice(infosRealty.price)
                .setArea(infosRealty.area)
                .setRoom(infosRealty.room)
                .setInfo(infosRealty.info);
            realty.id = request.params.id;
            response.render('admin/realty/form', {realty, contact})
        });
    }


    editRealtyProcess (request, response) {
        if(request.body.contact) {
            const repo = new RealtyRepository();
            repo.getRealtyById(request.params.id).then((infosRealty) => {
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
                
                const ContactRepo = new ContactRepository();
                ContactRepo.update(infosRealty.id_contact, entityContact).then((contact) => {
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
                    entityRealty.id = request.params.id;
                    repo.update(infosRealty.id, entityRealty).then((realty) => {
                        request.flash("notify", "Le bien a été modifié");
                        response.redirect("/admin/realty");
                        // On pourrait (si on l'avait) renvoyer vers l'édition du bien
                        // response.redirect("/admin/realty/edit/"+realty[0].insertId);
                        
                    });
                });
            });
        } else {
            response.render('admin/realty/form', {realty:request.body.realty, contact: request.body.contact})
        }
    }

    deleteRealty (request, response) {
        const repo = new RealtyRepository();
        repo.getRealtyById(request.params.id).then((realty) => {
            if(realty.id_contact) {
                const ContactRepo = new ContactRepository();
                ContactRepo.deleteContact(realty.id_contact).then(() => {
                    repo.deleteRealty(realty.id).then(() => {
                        request.flash("notify", "Le bien a été supprimé.")
                        response.redirect("/admin/realty");
                    })
                });
            }
        })
    }

};

module.exports = new RealtyController();