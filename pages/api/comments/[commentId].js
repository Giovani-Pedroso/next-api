import { comments } from "../../../data/comments";

export default handler(req, res){
    //pick the value in the url
    const {commentId} = req.query;

    const comment = commentId.find(comment => comment.id === parseInt(commentId));

    res.status(200).json(comment);
}