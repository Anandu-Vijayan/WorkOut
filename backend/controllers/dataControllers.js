const formData=async(req,res)=>{
    const {FirstName,LastName,PhoneNumber,Email,Selector} = req.body;
    res.json({
        FirstName,LastName,PhoneNumber,Email,Selector
    })
}
module.exports = {formData}