import { followService } from "~/services/postFollowService";

const handleFollowFunc = async (user) => {
  let newUser;
  if (user && user.is_followed) {
    newUser = await followService.unFollow(user.id);
  } else {
    newUser = await followService.follow(user.id);
  }

  return newUser && newUser.is_followed;
};

export default handleFollowFunc;
