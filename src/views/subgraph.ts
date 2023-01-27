import { gql, useQuery } from "@apollo/client";
// import { Button, Input, Table, Typography } from "antd";
// import 'antd/dist/antd.css';
// import GraphiQL from "graphiql";
// import 'graphiql/graphiql.min.css';
// import fetch from "isomorphic-fetch";
import React, { useState, useEffect } from "react";

export const useSubgraph = () => {
	const FRIENDS_QUERY = `
	{
		userStreams(where: {stream: "1"}) {
			id
			user {
			id
				}
			stream
			totalPoints
			availablePoints
			signals {
				id
				signal {
					id
					value
				}
				balance
				lastUpdatedTime
			  }
		}
	}
    
  `;
	const SIGNALS_QUERY = `
	{
		signals(where: {stream: "1"}) {
		  id
		  stream
		  value
		  balance
		  lastUpdatedTime
		  signallers {
			id
			balance
			lastUpdatedTime
			user {
			  id
			  user {
				id
			  }
			}
		  }
		}
	  }
  `;

	const FRIENDS_GQL = gql(FRIENDS_QUERY);
	const SIGNALS_GQL = gql(SIGNALS_QUERY);

	const {
		loading: loadingFriends,
		data: dataFriends,
		startPolling: friendsPoll,
		stopPolling: friendsStop
	} = useQuery(FRIENDS_GQL, {
		pollInterval: 2500
	});
	const {
		loading: loadingSignals,
		data: dataSignals,
		startPolling: signalsPoll,
		stopPolling: signalsStop
	} = useQuery(SIGNALS_GQL, {
		pollInterval: 2500
	});

	useEffect(() => {
		friendsPoll(5000);
		return () => {
			friendsStop();
		};
	}, [friendsPoll, friendsStop]);

	useEffect(() => {
		signalsPoll(5000);
		return () => {
			signalsStop();
		};
	}, [signalsPoll, signalsStop]);
	const [friends, setFriends] = useState([]);
	const [signals, setSignals] = useState([]);
	//   const [tokens, setTokens] = useState([]);

	//   dem hooks
	useEffect(() => {
		if (dataFriends && dataFriends["userStreams"]) {
			// let tempArr = dataFriends.owners.map(owner => ({
			//   id: owner.id,
			// }));
			setFriends(dataFriends["userStreams"]);
		}
	}, [dataFriends]);
	useEffect(() => {
		if (dataSignals && dataSignals["signals"]) {
			// let tempArr = dataSignals.activeEffects.map(effect => ({
			//   uri: effect.uri,
			//   tokenId: effect.tokenId,
			//   key: effect.key,
			//   active: effect.active,
			// }));
			setSignals(dataSignals["signals"]);
		}
	}, [dataSignals]);

	return { friends, signals };
};

export const useFriendInfo = (address: string | undefined) => {
	const FRIEND_QUERY = `
    {
		userStreams(where: {id: "${`1 ` + address?.toLowerCase()}"}) {
			id
			user {
				id
				}
			stream
			totalPoints
			availablePoints
			signals {
				id
				signal {
					id
					value
				}
				balance
				lastUpdatedTime
			  }
		}
	}
      
    `;

	const FRIEND_GQL = gql(FRIEND_QUERY);

	const {
		loading: loadingFriend,
		data: dataFriend,
		startPolling: friendPoll,
		stopPolling: friendStop
	} = useQuery(FRIEND_GQL, {
		pollInterval: 2500
	});

	useEffect(() => {
		friendPoll(5000);
		return () => {
			friendStop();
		};
	}, [friendPoll, friendStop]);

	const [friend, setFriend] = useState([]);

	useEffect(() => {
		if (
			dataFriend &&
			dataFriend.userStreams &&
			dataFriend.userStreams.length > 0
		) {
			// let tempArr = dataFriend.owners.map(owner => ({
			//   id: owner.id,
			// }));
			setFriend(dataFriend.userStreams[0]);
		}
	}, [dataFriend]);
	return friend;
};
