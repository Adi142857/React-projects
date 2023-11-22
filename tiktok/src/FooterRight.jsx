import React, { useState } from 'react'
import FavoriteIcon from './icons/FavoriteIcon'
import FavoriteBorderIcon from './icons/FavoriteIconBordered'
import MessageIcon from './icons/Message'
import ShareIcon from './icons/Share'
import './FooterRight.css'

function VideoSidebar({ likes, shares, messages }) {
	// do something
	const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes);

	return (
		<div className="footer-right">
			<div className="sidebar-icon">
				{liked ? <FavoriteIcon style={{ width: '40px', height: '40px' }}/> :                   
				<FavoriteBorderIcon
					style={{ width: '40px', height: '40px' }}
					onClick={() => {
						// do something
                        setLiked(true);
                        setLikeCount((likes) => likes + 1);
					}}
				/>}

				<p>{likeCount}</p>
			</div>
			<div className="sidebar-icon">
				<MessageIcon style={{ width: '40px', height: '40px' }} />
				<p>{messages}</p>
			</div>
			<div className="sidebar-icon record-below">
				<ShareIcon style={{ width: '40px', height: '40px' }} />
				<p>{shares}</p>
			</div>
			<div className="sidebar-icon record">
				<img src="https://static.thenounproject.com/png/934821-200.png" />
			</div>
		</div>
	)
}

export default VideoSidebar
