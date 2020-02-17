import React from 'react';
import Moment from 'moment';

const Member = ({member, platform}) => {

	const platforms = ["on Unknown", "on Xbox", "on Ps4", "on Steam", "on Blizzard" ,"on Stadia"];
	const xsavePlatforms = ["?", "XB1", "PSN", "PC", "PC", "Stadia"];
	const lastPlayed = Moment.unix(member.lastOnlineStatusChange).fromNow();
	const today = Moment(new Date());
	const daysSincePlayed = Moment.unix(member.lastOnlineStatusChange).diff(today, 'days');

// If a user has played/saved Destiny on multiple platforms show them e.g. (XB1, PSN)
	const xsavePlatformDisplay = member.destinyUserInfo.applicableMembershipTypes.length === 1 ? "" : 
		"(" + 
		member.destinyUserInfo.applicableMembershipTypes.map(
			function(xsavePlatform, index) {
				return xsavePlatforms[xsavePlatform] ;
			})
		+ ")";


	if (!member.destinyUserInfo && !member.bungieNetUserInfo)	{ 
		return <div></div>; 
	} else {
		return (
			<div 
				className={`member 
					${(daysSincePlayed - daysSincePlayed * 2) > 89 ? "boot" : "dont-boot"} 
					${member.memberType >= 3 ? "admin" : ""}`}>
						<strong>{member.destinyUserInfo.LastSeenDisplayName}</strong> : Played { lastPlayed } {platforms[platform]} {xsavePlatformDisplay}
			</div>
		);
	}
};

export default Member;
