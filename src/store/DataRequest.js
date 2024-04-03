import { DataSliceActions } from "./DataSlice";

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

export const fetchData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://react-mailbox-b8019-default-rtdb.firebaseio.com/Data.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch  data!");
      }

      const data = await response.json();
      return data;
    };
    try {
      const Data = await getData();
      dispatch(DataSliceActions.replaceItems(Data || []));
    } catch (error) {}
  };
};
