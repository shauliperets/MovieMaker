class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  LoadImage(blob) {
    console.log("(api) blob =>", blob);

    return fetch(`${this.baseUrl}/File/LoadImage`, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blob: blob,
      }),
    }).then((response) => {
      return response.json();
    });
  }
}

export const api = new Api({
  baseUrl: "http://localhost:5070/api",
});
