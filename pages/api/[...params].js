//this is a cath all rotes file, if the adress
//does not exist it will return and array if the params
export default function handler(req, res){
    //take all params in an url
    const params = req.query.params;
    console.log(params);
    res.status(200).json(params);

}