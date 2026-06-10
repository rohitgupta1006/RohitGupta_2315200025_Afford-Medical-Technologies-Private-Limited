const getWeight = (type) => {

  if (type === "Placement") return 3;

  if (type === "Result") return 2;

  return 1;
};

export const sortNotifications = (
  notifications
) => {

  return notifications.sort((a, b) => {

    const weightDiff =
      getWeight(b.Type)
      -
      getWeight(a.Type);

    if (weightDiff !== 0)
      return weightDiff;

    return new Date(b.Timestamp)
      -
      new Date(a.Timestamp);
  });
};