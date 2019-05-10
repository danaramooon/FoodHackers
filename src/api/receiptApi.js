export const getReceipts = () => (
  fetch(
    'http://localhost:8000/foods',
    {
      method: 'GET',
    }
  )
)
  
export const createReceipt = (data) => (
  fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8;"
      }
    }
  )
)