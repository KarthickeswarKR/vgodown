
var environment =  'development';
var config = {
    development: {
        mailer: {
            from: 'info@virtualgodown.com',
            host: 'smtp.gmail.com', // hostname
            secureConnection: false, // use SSL
            port: 25, // port for secure SMTP
            transportMethod: 'SMTP',
            requiresAuth: true,
            domains: 'gmail.com',
            auth: {
                user: 'info@virtualgodown.com',
                pass: 'passiontomakesuccess'
            }
        }
    }
};

exports = module.exports = config[environment];
