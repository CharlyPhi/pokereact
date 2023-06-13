export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Well this site is promising, but it seems to lack... I dont know.. coherence ?",
      username: "OwShift",
      userId: "1",
      parentId: null,
      createdAt: "2023-07-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Love the little book displaying info, can you make it a card ?! ",
      username: "DarkMode4Ever",
      userId: "2",
      parentId: null,
      createdAt: "2023-06-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "So's your face.",
      username: "KpopIsDope974",
      userId: "2",
      parentId: "1",
      createdAt: "2023-07-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Thank you for your comment, a card would be too big in the homepage, but i'm working on something you might like...  :) keep in touch",
      username: "Admin",
      userId: "2",
      parentId: "2",
      createdAt: "2023-06-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "unsubscribed user",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
