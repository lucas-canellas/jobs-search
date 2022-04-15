export async function getData({ location, keyword }) {
  const url = "https://br.jooble.org/api/";
  const key = "6537d598-dc5a-422f-a474-e6a272167cf1";

  const jobs = await fetch(url + key, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      location: location,
      keywords: keyword,
    }),
  })
    .then((res) => res.json())
    .then((res) => res);

  return jobs;
}
