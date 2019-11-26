import React, {
	Component
} from 'react';
import request from 'superagent';
import Moment from 'moment';

class Member extends Component {

	constructor(props) {
		super(props);
		this.state = {
			member: props.member,
			memberType: props.member.memberType,
			platform: props.platform,
			BASE_URL: props.BASE_URL,
			API_KEY: props.API_KEY,
			dateLastPlayed: null,
			daysSincePlayed: 0,
			missing: false,
		};
	}

	componentDidMount() {
		if (this.state.member.destinyUserInfo) this.getDateLastPlayed();
	}

	componentWillReceiveProps(newProps) {
		this.setState({ member: newProps.member });
	}

	getDateLastPlayed() {
		request
			.get(`${this.state.BASE_URL}/Destiny2/${this.state.platform}/Profile/${this.state.member.destinyUserInfo.membershipId}/?components=100`)
			.set('X-API-Key', this.state.API_KEY)
			.set('accept', 'json')
			.end((err, res) => {
				if (!err) {
					const results = JSON.parse(res.text);
					if (results.Response) {

						let dateLastPlayed = Moment(results.Response.profile.data.dateLastPlayed);
						const today = Moment(new Date());
						const daysSincePlayed = dateLastPlayed.diff(today, 'days');

						this.setState({
							dateLastPlayed: dateLastPlayed.fromNow(),
							daysSincePlayed: daysSincePlayed * -1
						});

					} else {
						this.setState({
							dateLastPlayed: "¯\\_(ツ)_/¯",
							missing: true
						});
					}

				}
			});
	}

	render() {
		if (!this.state.member.destinyUserInfo) return <div></div>;

		return (
			<div 
			className={`member 
				${this.state.daysSincePlayed > 89 ? "boot" : "dont-boot"} 
				${this.state.missing ? "missing" : ""}
				${this.state.memberType >= 3 ? "admin" : ""}`} key="index">
				<strong>{this.state.member.destinyUserInfo.displayName}</strong> : Last played {this.state.dateLastPlayed}
			</div>
		);
	}

}

export default Member;
