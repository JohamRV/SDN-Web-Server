//For Resource Page
const resourceView = (req, res) => {
    res.render("resource", {
    } );
}
// For View 
const loginView = (req, res) => {

    res.render("login", {
    } );
}
module.exports =  {
    resourceView,
    loginView
};