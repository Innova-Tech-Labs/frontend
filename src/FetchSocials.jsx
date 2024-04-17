fetch(`/api/social/share/${scavengerHuntId}`)
  .then(response => response.json())
  .then(data => {
    console.log('Share Links:', data);
  })
  .catch(error => console.error('Error fetching share links:', error));