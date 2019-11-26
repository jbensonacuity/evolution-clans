import React from 'react';
import Moment from 'moment';

const Member = ({member, platform}) => {

	const platforms = ["on Unknown", "on Xbox", "on Ps4", "on Steam", "on Blizzard" ,"on Stadia"];
	const lastPlayed = Moment.unix(member.lastOnlineStatusChange).fromNow();
	const today = Moment(new Date());
	const daysSincePlayed = Moment.unix(member.lastOnlineStatusChange).diff(today, 'days');

	if (!member.destinyUserInfo)	{ 
		return <div></div>; 
	} else {
		return (
			<div 
				className={`member 
					${(daysSincePlayed - daysSincePlayed * 2) > 89 ? "boot" : "dont-boot"} 
					${member.memberType >= 3 ? "admin" : ""}`}>
					<strong>{member.destinyUserInfo.displayName}</strong> : Played { lastPlayed } {platforms[platform]}
			</div>
		);
	}
};

export default Member;
