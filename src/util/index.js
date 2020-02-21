export function substactDaysFromDate(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return date.toISOString();
}

export const isNull = data => {
  return data === null;
};

export const isEmptyString = data => {
  return data === '';
};

export const getObjectKeys = obj => Object.keys(obj);

export const parseGistData = gist => {
  const gistFiles = getObjectKeys(gist.files);

  const description =
    isNull(gist.description) || isEmptyString(gist.description)
      ? "Author don't set a description"
      : gist.description;

  const user = {
    avatarUrl: gist.owner.avatar_url,
    login: gist.owner.login,
  };
  const comments = gist.comments;

  return {...gist, gistFiles, user, comments, description};
};
