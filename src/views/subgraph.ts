import { gql, useQuery } from '@apollo/client';
// import { Button, Input, Table, Typography } from "antd";
// import 'antd/dist/antd.css';
// import GraphiQL from "graphiql";
// import 'graphiql/graphiql.min.css';
// import fetch from "isomorphic-fetch";
import React, { useState, useEffect } from 'react';

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
        holders {
          id
          friend {
            id
          }
          amount
        }
      }
  }
  `;

  const FRIENDS_GQL = gql(FRIENDS_QUERY);
  const SIGNALS_GQL = gql(SIGNALS_QUERY);

  const { loading: loadingFriends, data: dataFriends } = useQuery(FRIENDS_GQL, {
    pollInterval: 2500,
  });
  const { loading: loadingSignals, data: dataSignals } = useQuery(SIGNALS_GQL, {
    pollInterval: 2500,
  });

  const [friends, setFriends] = useState([]);
  const [signals, setSignals] = useState([]);
  //   const [tokens, setTokens] = useState([]);

  //   dem hooks
  useEffect(() => {
    if (dataFriends) {
      // let tempArr = dataFriends.owners.map(owner => ({
      //   id: owner.id,
      // }));
      setFriends(dataFriends);
    }
  }, [dataFriends]);
  useEffect(() => {
    if (dataSignals) {
      // let tempArr = dataSignals.activeEffects.map(effect => ({
      //   uri: effect.uri,
      //   tokenId: effect.tokenId,
      //   key: effect.key,
      //   active: effect.active,
      // }));
      setSignals(dataSignals);
    }
  }, [dataSignals]);

  return { friends, signals };
};
