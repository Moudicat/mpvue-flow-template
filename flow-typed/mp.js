declare type ISwiperDataset = {
  comkey: string,
  eventid: string
};

declare type SwiperEvent = {
  type: string,
  timeStamp: number,
  x: number | void,
  y: number | void,
  currentTarget: {
    id: string | number,
    offsetLeft: number,
    offsetTop: number,
    dataset: ISwiperDataset
  },
  mp: {
    currentTarget: {
      dataset: ISwiperDataset,
      id: string | number,
      offsetLeft: number,
      offsetTop: number
    },
    detail: {
      current: number,
      currentItemId: string | number,
      source: string
    },
    target: {
      dataset: ISwiperDataset,
      id: string | number,
      offsetLeft: number,
      offsetTop: number,
      source: string
    }
  }
};

declare var getCurrentPages: any;
