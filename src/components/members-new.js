import React, { Component } from "react";
import Member from "./member";
import request from "superagent";

import Moment from 'moment';



const TempMember = ({daysSincePlayed, memberType, displayName, dateLastPlayed}) => {
	return(
		<div 
			className={`member 
				${daysSincePlayed > 89 ? "boot" : "dont-boot"} 
				${memberType >= 3 ? "admin" : ""}`} key="index">
				<strong>{displayName}</strong> : Last played {dateLastPlayed}
		</div>
	)
};


class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BASE_URL: props.BASE_URL,
      API_KEY: props.API_KEY,
      groupId: props.groupId,
      clanName: props.clanName,
      platform: props.platform,
      members: [],
      membersWithData : []
    };
  }

  componentDidMount() {
    request
      .get(`${this.state.BASE_URL}/GroupV2/${this.state.groupId}/Members/`)
      .set("X-API-Key", this.state.API_KEY)
      .set("accept", "json")
      .end((err, res) => {
        if(!err){
          const results = JSON.parse(res.text);
          this.setState({
            members: results.Response.results
					});
					
					this.state.members.forEach( (member) => {
						this.getData(
							member.destinyUserInfo.displayName, 
							member.destinyUserInfo.membershipId,
							member.destinyUserInfo.memberType
							);
					});
        }
      });
  }

  getData(displayName, membershipId, memberType) {
		request
    .get(`${this.state.BASE_URL}/Destiny2/${this.state.platform}/Profile/${membershipId}/?components=100`)
    .set('X-API-Key', this.state.API_KEY)
    .set('accept', 'json')
    .end((err, res) => {
      if (!err) {
        const results = JSON.parse(res.text);
        if (results.Response) {

          let dateLastPlayed = Moment(results.Response.profile.data.dateLastPlayed);
          const today = Moment(new Date());
          const daysSincePlayed = dateLastPlayed.diff(today, 'days');

          const tempArray = this.state.membersWithData;
          tempArray.push({
            "displayName" : displayName,
            "dateLastPlayed" : dateLastPlayed.fromNow(),
						"daysSincePlayed" : daysSincePlayed * -1,
						"memberType" : memberType
          });

          this.setState({membersWithData : tempArray});

        } 
      }
    });
  }


  render() {
   
    if(this.state.members.length === 0){
      return <div></div>;
    } else {
      return (
        <div className={`clan ${this.state.clanName}-border`}>
          <header className={this.state.clanName}>
            <h2>{this.state.clanName}</h2>
            <div className="member-number">
              Number of members: <strong> {this.state.membersWithData.length} </strong>
            </div>
          </header>
					{this.state.membersWithData.sort( (a,b) => b.daysSincePlayed - a.daysSincePlayed ).map( (member, index) => 
						<TempMember 
							daysSincePlayed={member.daysSincePlayed}
							displayName={member.displayName}
							dateLastPlayed={member.dateLastPlayed}
							memberType={member.memberType}
							key={index.toString()}
						/>
					)}
        </div>
      );
    }
    
  }
}

export default Members;
