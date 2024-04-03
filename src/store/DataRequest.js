export const sendRequest = (items) => {
  return async () => {
    try {
      const response = await fetch(
        "https://react-mailbox-b8019-default-rtdb.firebaseio.com/Data.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
};
