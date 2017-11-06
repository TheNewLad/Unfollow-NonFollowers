function unfollowNonFollowers() {
	const following = document.querySelectorAll("[id^='stream-item-user-']")
	for (let i = 0; i < following.length; i++) {
		if (following[i].querySelector('span.FollowStatus') === null) {
			const unfollowBtn = following[i].querySelector('div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > button:nth-child(3)');
			unfollowBtn.click();
		}
	}
}
unfollowNonFollowers();
