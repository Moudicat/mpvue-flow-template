// @flow
import { formatTime } from '@/utils/index';
import card from '@/components/card';

export default {
  components: {
    card
  },

  data() {
    return {
      logs: []
    };
  },

  created() {
    const logs = wx.getStorageSync('logs') || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
  }
};
