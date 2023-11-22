module.exports = {
    HOST : "localhost",
    USER : "jame",
    PASSWORD : "qw34l",
    DB : "blogs",
    dialect : "postgres",
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    } 
}