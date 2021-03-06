export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "e443eddd51484fb08298d9f582fbcbae";

const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recentyly-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
