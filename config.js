const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process BWM-XMD;;;H4sIAAAAAAAAA5VUXXOqOhT9L3nVngoEEWc6c8UPxA+EiojeOQ8RAkQFIgkg7fjfz1Db2z7cc24vT5mErL2y1tr7FaQZYXiOa9B/BTQnJeK4WfKaYtAHWhGGOAdtECCOQB9kC3lRK3lmrLN97xIIxmbcVQ8TL9xORrInSqdrvYopdq4b9gRubUCLw5n4fwDsyiPoyruzOHVkwzmtk9BxqtJcZWbL3EVSEsGkddwU+kz3n8CtQUQkJ2k0pjFOcI7Oc1xbiOTfo7/R9ClK7S1lqiwKHaG25yYKrcu+y/z4ZRHuF1ieKHWNJON79Ote0RqWHkwmYbUP1DmEDG6UQF+w+llRyGITlD5inu57nTt9RqIUB0aAU054/W3dqyl/1Gq+6pxt5MT2eEoTa6FpYTmXc8unoWYXCT7YMz/ZfY/4Xqe2t07k7LHsjYzyYmyLktKVKqiQsMreLFtuSPKrZL4p8Q9xK//Iyun/6H5axSr3iUlmdBj7PcE8j831Np2TVmvAqImywSx2WoZ1Tr4ZG0F3PNgqymVHfinJbnDVu2VM/JI7mptfKuux2pqatn7GwvKTPuJF/ieWsHLsYoeQpaQX87JPVlcn30bEpePEVVJoBSvBeiSYovLiD9gEIn3RC6JsN3assR6NpJmxcpmJgrLbShdupD4LZKsNnt5edMK1EYC+cGuDHEeE8RxxkqXNnihLbYCCco39HPM3eYFTXytxTT19MUrHajXkbjFad/YjVPSEPFC8IVO641SItrvBE2gDmmc+ZgwHU8J4ltdLzBiKMAP9v3+2QYqv/G5cU04S2iAkOeObtKDnDAUfrn4cIt/PipSv69QfNgucg37ncxtzTtKINToWKcr9mJR4GCPOQD9EZ4ZvbRDgkvi4wQPd4JnvbfjgXIY9Y3Uizz2F1VFDOc7S+y+CDFVJgfBBDgLpAcJu+HBQROFBlJBykLqqGGIM2oC890xz57cWyrXwQuLHGDujkZ3bvHWcXaELDyK6B+uuPc5xAPo8L3AbHJB/KqiTnXD6B1xxNA/0rlUnR+MyRk6JqpCI4kvF084X3LunoP/6OaeGWdDgjXbewlIVAbRB8hZB0rxclKECe5IiSUKvL/7FflSNjojSHynmDey75s2FAHNEzgz0wXA55NF8Nx1bYc0OUNcHRjQYRgPw6dFH2O9hkqLo8VSJrkt3qrgU0DiVKmUzcRZR2qnyTY+29jF+Vlt15T/9C0iDYJrGdaPzUJ5PBc+JN2PP9ef7WtzvhrPjbH/q0oDJp6kw5SsP6r4/kBeQd9UXuoRr2HXcySqajuyjoHYuAizDGh2Fof3UVLtn5WuxZH8oe8/HWYJavq4eW0k1mQ4PzsGwhFp97GotjZ+qkBZxlId8Le1305U7i6ZKPlftcRaUladdhytTKnw6nqnoqknyeWTf2/BtDJzfxy95a5DX92SFBL9NsxQ1Dv2HN18z3rm1v0C8j8ff5EgLoGHJS/Psoq0VHM1tPFN7K0Hb1HCmLueCNQ+TnXcKQ8am4Hb72Qb0jHiY5QnoA5QGeUYC0AZnxPjgs00dkmDGUUJBX1CgAGVJ6YhtkNQDStcc8Y/uBoPmmwYU3H4B+lghjvkHAAA= || '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ephy",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

