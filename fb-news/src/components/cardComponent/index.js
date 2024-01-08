import { useState } from "react";
import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import SocialCard from "./social";

function Post(props) {
  const [isLiked, setIsLiked] = useState(true)
  const [CommentBtn, setCommentBtn] = useState(true)
  const [shareBtn, setshareBtn] = useState(true)
  return (
    <div className="postCard">
      <div className="Profile">
        <img className="profilePic" src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" />
        <div className="UserName">
          <span><b>User</b></span>
          <h6>31<sup>st</sup>Feb, 2023</h6>
        </div>
      </div>
      <div className="title">
        <h3 className="Title">{props.prodTitle}</h3>
      </div>
      <div className="ImageLib"><FbImageLibrary images={props.prodImgs} />
      </div>
      <h6>{props.prodDesc}</h6>
      <hr />
      <div className="actionBtn">
        <div className="LikeBtn" onClick={()=>{setIsLiked(!isLiked)}}>
          {isLiked
            ? <i style={{color:'#005eff'}} className="fa-regular fa-thumbs-up"></i>
            : <i style={{color:'#005eff'}} className="fa-solid fa-thumbs-up"></i>
          }
          <span>Like</span>
        </div>
        <div className="LikeBtn" onClick={()=>{setCommentBtn(!CommentBtn)}}>
          {CommentBtn
            ? <i style={{color:'#005eff'}} class="fa-regular fa-comment"></i>
            : <i style={{color:'#005eff'}} class="fa-solid fa-comment"></i>
          }
          <span>Comment</span>
        </div>
        <div className="LikeBtn" onClick={()=>{setshareBtn(!shareBtn)}}>
          {shareBtn
            ? <i style={{color:'#005eff'}} class="fa-regular fa-share-from-square"></i>
            : <i style={{color:'#005eff'}} class="fa-solid fa-share-from-square"></i>
          }
          <span>Share</span>
        </div>
      </div>

      {!CommentBtn ?
        <div className="CommentDiv">
          <h2>Comments</h2>
          <div className="commentator">
            <img className="profilePic" src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" />
            <input placeholder="Write a public comment" />
            <i style={{color:'#005eff'}} className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
        :
        <span></span>
      }
      {!shareBtn
      ?
      <div className="socialDiv"><SocialCard /></div>
      :
      <span></span>
      }
         </div>
  );
}


export default Post;