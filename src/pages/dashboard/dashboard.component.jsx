import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPostsStart } from '../../store/posts/posts.actions';

import Posts from '../../components/Posts/posts.container';

const DashboardPage = ({ fetchPostsStart }) => {
	useEffect(
		() => {
			fetchPostsStart();
		},
		[ fetchPostsStart ]
	);

	// throw Error;

	return <Posts />;
};

const mapDispatchToProps = (dispatch) => ({
	fetchPostsStart: () => dispatch(fetchPostsStart())
});

export default connect(null, mapDispatchToProps)(DashboardPage);
