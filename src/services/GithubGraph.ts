async function getContributions(token: string, username: string) {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
              user(login: "${username}") {
                name
                contributionsCollection {
                  contributionCalendar {
                    colors
                    totalContributions
                    weeks {
                      contributionDays {
                        color
                        contributionCount
                        date
                        weekday
                      }
                      firstDay
                    }
                  }
                }
              }
            }`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data;
}

async function getUser(token: string, username: string) {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
  repositoryOwner(login: "AppSiDaL") {
    login
    ... on User {
      bio
      avatarUrl
      login
      name
    }
  }
}`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data;
}

export default { getContributions, getUser };
