export const contactForm = (data: any) => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://kjamxgbofa.execute-api.eu-north-1.amazonaws.com/rizz/contact-from",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.status !== 200) {
          throw new Error(data.message || "something went wrong!");
        }
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
