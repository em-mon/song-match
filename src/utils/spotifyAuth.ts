export async function redirectToSpotifyAuthorize() {
  const clientId = 'a5b2e7e7a6fd45468a8fd8a218e69fc0';
  const redirectUrl = 'https://song-match-three.vercel.app/home';
  const scope = 'user-read-private user-read-email';

  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const randomString = Array.from(randomValues).map(x => possible[x % possible.length]).join('');

  const code_verifier = randomString;
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest('SHA-256', data);
  const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  window.localStorage.setItem('code_verifier', code_verifier);

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.search = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUrl,
    code_challenge_method: 'S256',
    code_challenge: code_challenge_base64,
  }).toString();

  window.location.href = authUrl.toString();
}