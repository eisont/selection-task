const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const fetchJson = async ({ apiEndpoint, body }) => {
  try {
    const res = await fetch(`${BASE_URL}${apiEndpoint}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
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
