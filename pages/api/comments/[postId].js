import { comments } from "../../../data/comments";

export default function handler(req, res){
    const {postId} = req.query;
    if(req.method === 'GET'){
    //pick the value in the url
    const comment = comments.find(comment => comment.id === parseInt(postId));
    res.status(200).json(comment);
    } else if( req.method === "DELETE"){

      const comment2Delete = comments.find(comment => comment.id === parseInt(postId));
        const index = comments.findIndex(comment => comment.id === parseInt(postId))
        comments.splice(index,1);
      res.status(200).json(comment2Delete);
    }
}