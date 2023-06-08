const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const fetchJson = async ({ apiEndpoint, method, acessToken, body }) => {
  try {
    const res = await fetch(`${BASE_URL}${apiEndpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${acessToken}`,
      },
      body: JSON.stringify(body),
      credentials: 'same-origin',
    });
    return await res.json();
  } catch (error) {
    console.log('fail', error);
  }
};

export default fetchJson;
