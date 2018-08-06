// @flow
import card from '@/components/card';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {}
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    // for test
    clickHandle(msg: string, ev: Event) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
