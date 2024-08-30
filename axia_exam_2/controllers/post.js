
const User = require('../models/user')
const Post = require('../models/post')

const addPost = async(req, res) => {
    const body = req.body
    const userID = body.userID
    const user = await User.findById(userID)
    if( user && user.creatorID){
        const newPost = new Post({
            title: body.title,
            content: body.content,
            creator: user._id
            // remember to add an id
        })
    try{
    const savedPost = await newPost.save()
    res.send("Post successful")
    console.log(savedPost)
    }
    catch(error){
        console.log(error)
    }
}}

const getPost = async(req, res) => {
    const body = req.body
    const posts = await Post.find({})
    res.json(posts)
}

const getOnePost = async(req, res) => {
    const body = req.body
    const title = body.title
    const post = await Post.findOne({ title })
    if( title ){
        res.send(post.content)
    }
    else{
        res.send("Post not found")
    }
}


module.exports = { addPost, getOnePost, getPost }
