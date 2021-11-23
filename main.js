const LinksSocialMedia = {
  github: 'marang4',
  youtube: '/UCgNRU7r-j8wEnWDjR-UGHlw',
  facebook: 'gabriel.marangoni.54',
  instagram: 'gmarangoni2',
  twitter: 'gmarangoni2'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
