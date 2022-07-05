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
    friends {
      id
      name
        holdings {
        id
        friend {
          id
        }
        amount
        timeValueSignal
        lastUpdatedTime
      }
    }
  }
    
  `;
	const SIGNALS_QUERY = `
  {
    signals {
        id
        balance
        meme
        timeValueSignal
        lastUpdatedTime
        holders {
          id
          friend {
            id
          }
          amount
          timeValueSignal
          lastUpdatedTime
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
		if (dataFriends && dataFriends["friends"]) {
			// let tempArr = dataFriends.owners.map(owner => ({
			//   id: owner.id,
			// }));
			setFriends(dataFriends["friends"]);
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
      friends(where: {id: "${address?.toLowerCase()}"}) {
        id
        name
        points
          holdings {
          id
          friend {
            id
          }
          amount
          timeValueSignal
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

	const [friend, setFriend] = useState();

	useEffect(() => {
		if (dataFriend && dataFriend.friends && dataFriend.friends.length > 0) {
			// let tempArr = dataFriend.owners.map(owner => ({
			//   id: owner.id,
			// }));
			setFriend(dataFriend.friends[0]);
		}
	}, [dataFriend]);
	return friend;
};
