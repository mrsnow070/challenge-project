export function substactDaysFromDate(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return date.toISOString();
}

export const trimLongString = str => {
  return str.length > 20 ? str.substring(0, 17) + '...' : str;
};

export const isNull = data => {
  return data === null;
};

export const isEmptyString = data => {
  return data === '';
};

export const parseWebViewLink = (htmlUrl, filename) => {
  return htmlUrl + `#file-${filename.replace('.', '-')}`;
};

export const getObjectKeys = obj => Object.keys(obj);

//takes server response and convert in structured data
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
