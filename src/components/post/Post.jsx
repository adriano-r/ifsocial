import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setisLiked(!isLiked);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            src={
                                Users.filter((u) => u.id === post.userId)[0]
                                    .profilePicture
                            }
                            alt=""
                            className="postProfileImg"
                        />
                        <span className="postUsername">
                            {
                                Users.filter((u) => u.id === post.userId)[0]
                                    .username
                            }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            onClick={likeHandler}
                            src="/assets/like.png"
                            alt=""
                            className="likeIcon"
                        />
                        <img
                            onClick={likeHandler}
                            src="/assets/heart.png"
                            alt=""
                            className="likeIcon"
                        />
                        <span className="postLikeCounter">{like} liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
